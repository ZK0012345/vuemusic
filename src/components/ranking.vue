<template>
    <div class="ranking">
        <ul class="rank_list">
            <li v-for="(item,index) in songlist" :key="index">
                <router-link tag="div" :to="{name: 'Play', params:{songid:item.song_id}}" class="s_img">
                    <img :src="item.pic_big" :alt="item.title">
                </router-link>
                <div class="s_inform">
                    <p class="s_name">{{ item.title }}</p>
                    <p class="a_name">{{ item.artist_name }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Ranking",
    data(){
        return{
            songlist:[]
        }
    },
    props:{
        url:{
            type: String,
            default: ""
        }
    },
    mounted(){
        const httpUrl = this.Host+this.url;
        this.$axios.get(httpUrl)
        .then(res =>{
            // console.log(res.data)
            this.songlist = res.data.song_list
        })
        .catch(res =>{
            // console.log(error)
        })
    }
}
</script>

<style scoped>
.ranking{
    border-top: 1px solid darkgrey;
}
.rank_list{
    padding: 0 20px 20px 20px;
    overflow: hidden;
}
.rank_list li{
    height: 70px;
    border-bottom: 1px solid darkgray;
    display: flex;
}
.s_img{
    width: 45px;
    height: 45px;
    margin-top: 10px;
}
.s_inform{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    height: 45px;
    flex: 1
}
.s_img img{
    width: 45px;
    height: 45px;
}
.s_name{
    margin-left: 10px;
    display: block;
    height: 25px;
    line-height: 25px;
    text-align: left;
    /* font-size: 16px; */
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
} 
.a_name{
    margin-left: 10px;
    display: block;
    height: 20px;
    line-height: 20px;
    text-align: left;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
}
</style>

