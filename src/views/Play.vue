<template>
    <div class="play">
        <div class="header">
            <router-link to="/Home"><img src="../assets/yinle.png"></router-link>
        </div>
        <div class="title">
            <p class="s_name">{{ currentUrl.songinfo.title }}</p>
            <p class="a_name">{{ currentUrl.songinfo.author }}</p>
        </div>
        <div class="s_container">
            <div class="s_img"><img :src="currentUrl.songinfo.pic_big"></div>
            <Lrc :durationTime="durationTime" :currentTime="currentTime" :songid="this.$route.params.songid"/>  
        </div>
        <div class="s_play">
            <div>
                <audio ref="player" :src="currentUrl.bitrate.file_link" controls autoplay class="audio-style"></audio>
            </div>         
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
const Lrc = Vue.component("lrc",(reslove)=>require(["../components/Lrc"],reslove))
export default {
    name:"Play",
    data(){
        return{
            currentUrl:{
                songinfo:{
                    title: "",
                    author: "",
                },
                 bitrate:{
                    file_link:" "
                }
            },
            currentTime:0,
            durationTime:0
        }
    },
    components:{
        Lrc
    },
    mounted(){
        var playUrl = this.Host + "/v1/restserver/ting?method=baidu.ting.song.play&songid=" + this.$route.params.songid;
        this.$route.params.songid
        this.$axios.get(playUrl)
        // this.$route.params.songid
        .then(res=>{
            this.currentUrl = res.data
            // console.log(res.data)
        })
        .catch(res=>{

        })
        this.addEventListeners();
    },
    beforeDestroy(){
        this.removeEventListeners();
    },
    methods:{
        addEventListeners(){
            this.$refs.player.addEventListener('timeupdate',this._currentTime),
            this.$refs.player.addEventListener('canplay',this._durationTime)
        },
        removeEventListeners(){
            this.$refs.player.removeEventListener('timeupdate',this._currentTime),
            this.$refs.player.removeEventListener('canplay',this._durationTime)
        },
        _currentTime(){
            // 当前播放时间
            this.currentTime = this.$refs.player.currentTime
        },
        _durationTime(){
            // 整体播放时间
            this.durationTime = this.$refs.player.duration
        }
    }
}
</script>

<style scoped>
.play{
    height: 100vh;
    position: relative;
    background-color: #F0FFFF;
}
.header{
    height: 60px;
    position: relative;
    text-align: left;
    background-color: #00bfff;
}    
.header img{
    height: 80%;
    width: 16%;
    margin: 6px;
}
.title p{
    height: 30px;
    line-height: 30px;
    margin: 5px 0;
    text-align: center;
}
.s_name{
    font-size: 20px;
}
.a_name{
    font-size: 16px;
}
.s_container{
    padding: 15px;
    height: 70%;
}
.s_img{
    width: 100%;
    text-align: center;
    height:40%;
}
img{
    width: 172.5px;
    height: 172.5px;
}
.s_play{
    width: 100vw;
    position: absolute;
    bottom: 0;
}
.s_play div{
    text-align: center;
}
.audio-style{
    background-color: #F0FFFF;
    width: 100%;
}

</style>

