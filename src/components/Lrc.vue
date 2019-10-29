<template>
    <div class="lrcContainer">
        <div class="lrc" ref="lrc">
            {{ getAllkey }}
            <p class="lrc_p"  
            :class="{active:parseInt(currentTime) >= keyArr[index] && parseInt(currentTime) < keyArr[index+1]}" 
            v-for="(item,key,index) in lrcData" :key="index">
            {{ item }}
            {{ srcollLrc(key,index)}}
            </p>
            <!-- 
                1s     1s
                2s
                3s     3s
                4s
                5s     5s
             -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Lrc",
    data(){
        return{
            lrc:{},
            lrcData:{},
            keyArr:[],
            lrcContent: {}
        }
    },
    props:{
        songid:{
            type:[String,Number],
            default:""
        },
        //当前播放时间
        currentTime:{
            type:[String,Number],
            default:0
        },
        //总体时间
        durationTime:{
            type:[String,Number],
            default:0
        }
    },
    mounted(){
        const lrcUrl = this.Host + "/v1/restserver/ting?method=baidu.ting.song.lry&songid="+this.songid;
        this.$axios.get(lrcUrl)
        .then(res => {
            this.lrc = res.data
            // console.log(res.data)
            var lyrics = res.data.lrcContent.split("\n");
            var lrcObj = {};
            for(var i = 0; i<lyrics.length; i++){
                var lyric = decodeURIComponent(lyrics[i]);
                var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
                var timeRegExpArr = lyric.match(timeReg);
                if(!timeRegExpArr)continue;
                var clause = lyric.replace(timeReg,'');
                    for(var k = 0,h = timeRegExpArr.length;k<h;k++){
                        var t = timeRegExpArr[k];
                        var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                            sec = Number(String(t.match(/\:\d*/i)).slice(1));
                        var time = min * 60 + sec;
                        lrcObj[time] = clause;    
                    }
            }
            this.lrcData = lrcObj
            // console.log(res.data)
        })
        .catch(error => {
            // console.log(error);
        })
    },
    computed:{
        getAllkey(){
            for(var i in this.lrcData){
                this.keyArr.push(i);
                // console.log(i)
            }
        }
    },
    methods:{
        srcollLrc(key,index){
            const lrcDiv = this.$refs.lrc
            if(key < this.currentTime && key > this.currentTime - (this.keyArr[index+1] -  this.keyArr[index])){
                lrcDiv.style.top = -((index-2)*30) + "px"
            // console.log(key)
            }
        }
    }
}
</script>
<style scoped>
.lrcContainer{
    margin-top: 30px;
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 200px;
}
.lrc{
    width: 100%;
    position: absolute;
    top: 50px;
}
.active{
    color: red !important
}
.lrc_p{
    height: 30px;
    line-height: 30px;
}
.up30{
    margin-top: -30px;
}
</style>

