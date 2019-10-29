<template>
    <div class="List">
        <ul class="song-list">
            <router-link tag="li" :to="{name:'Play',params:{songid:item.song_id}}" v-for="(item,index) in songList" :key="index">
                {{ item.title}}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "List",
    data(){
        return{
            songList: []
        }
    },
    props:{
        ting_uid:{
            type:String,
            default:""
        }
    },
    mounted(){
        var atristDetailsUrl = this.Host + "/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+this.ting_uid+"&limits=20&use_cluster=1&order=2"
        this.$axios.get(atristDetailsUrl)
        .then(res => {
            this.songList = res.data.songlist
        })
        .catch(error => {
            // console.log(error);
        })
    }
}
</script>

<style scoped>
.List{
    padding: 0 17px;
}
.song-list{
    list-style: none;
}
.List li{
    height: 50px;
    line-height: 50px;
    text-align: left;
    border-bottom: 1px solid #00bfff;
}
</style>