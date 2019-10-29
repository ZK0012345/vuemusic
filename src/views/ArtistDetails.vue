<template>
    <div class="ArtistDetails">
       <List :ting_uid="this.$route.params.ting_uid"/>
    </div>
</template>

<script>
import List from "../components/details/List"
import Title from "../components/details/Title"
export default {
    data(){
        return{

        }
    },
    components:{
        List,
        Title,
    }
    // mounted(){
    //     var atristDetailsUrl = this.Host + "/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+this.$route.params.ting_uid+"&limits=20&use_cluster=1&order=2"
    //     this.$axios.get(atristDetailsUrl)
    //     .then(res => {
    //         this.songList = res.data.songlist,
    //         this.artistInfo = res.data.artistinfo
    //     })
    //     .catch(error => {
    //         // console.log(error);
    //     })
    // }
}
</script>

<style scoped>
/* .ArtistDetails{
    background-color: blueviolet;
    position: relative;
}
.cover{
    width: 100%;
    height: 135px;
    background-color: purple;
    position: absolute;
    top: 0;
    left: 0;
}
.Avatar{
    width: 65px;
    height: 65px;
    margin: 35px auto;
    background-color: yellow;
    border-radius: 50%;
    overflow: hidden;
}
img{
    width: 100%;
    height: 100%;
}
.song-list{
    width: 100%;
    list-style: none;
    position: absolute;
    top: 135px;
    left: 0;
}
.song-list li{
    height: 50px;
    line-height: 50px;
    text-align: left;
    background-color: violet;
    border-bottom: 1px solid purple;
    padding: 0 20px;
} */

</style>