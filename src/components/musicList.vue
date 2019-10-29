<template>
    <div class="musicList">
        <div class="head">
            <h2>{{title}}</h2>
            <router-link :to="{name:'More',params:{musictype:this.musicType,title:title}}" class="more">更多</router-link>
        </div>
        <div class="content">
            <!-- <div class="list"> -->
                <ul>
                    <li v-for="(item,index) in todayrecommend" :key="index">
                        <div class="song-sheet">
                            <router-link :to="{name: 'Play', params:{songid:item.song_id}}" tag="div">
                                <img :src="item.pic_big">
                            </router-link>
                            <span class="song-name">{{ item.title }}</span>
                        </div>
                    </li>
                </ul>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name:"musicList",
    data(){
        return{
            todayrecommend:[]
        }
    },
    props:{
        title:{
            type:String,
            default:"今日榜单"
        },
        musicType:{
            type:String,
            default:"1"
        },
        musicSize:{
            type:String,
            default:"9"
        }
    },
    mounted(){
        var url = this.Host + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.musicType+"&size="+this.musicSize+"&offset=0"
        this.$axios.get(url)
        .then(res => {
            this.todayrecommend = res.data.song_list
            // console.log(res.data)
        })
        .catch(error => {
            // console.log(error);
        })
    }
}
</script>

<style scoped>
.musicList{
    background-color: #ffffff;
    padding: 10px 17px;
    margin-bottom: 10px;
    background-color: #D1EEEE;
}
.head{
    display: flex;
    margin: 14px 0 18px 0;
}
.head h2{
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    flex: 3;
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 20px;
    line-height: 32px;
}
.more{
    flex: 1;
    /* font-size: 12px; */
    text-align: right;
    line-height: 32px;
}
.content ul{
    overflow: hidden;
}
.content ul li{
    float: left;
    width: 33%;
}
.song-sheet{
    padding: 0 5px 10px;
}
img{
    width: 100%;
}
.song-name{
    display: block;
    height: 25px;
    line-height: 25px;
    /* font-size: 12px; */
    overflow: hidden;
}
</style>


