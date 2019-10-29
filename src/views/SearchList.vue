<template>
    <div class="searchList">
        <div class="search-box">
            <input type="text" placeholder="请输入搜索内容" v-model="searchContent">
            <div class="search-btn" @click="searchHandler">
                <img src="../assets/search.png">
            </div>    
        </div>
        <ul class="song-list">
            <li v-for="(item,index) in songList" :key="index">
                <p class="songname">{{ item.songname }}</p>
                <p class="artistname">{{ item.artistname }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import search from "../components/Search"
export default {
    name: "SearchList",
    data(){
        return{
            songList: [],
            searchContent:""
        }
    },
    methods:{
        searchHandler(event){
            const searchUrl =  this.Host + "/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=" + this.searchContent;
            this.$axios.get(searchUrl)
            .then(res=>{
                if(res.data.error_code == 22001 ){
                    this.$message('搜索数据不存在')
                    return;
                }
                this.songList = res.data.song
            })
            .catch(error =>{
                console.log(error);
            })
        }
    }
}
</script>
<style scoped>
.search-box{
    display: flex;
    height: 45px;
    padding: 10px 17px 0 17px;
    background-color: #00bfff;
}
input{
    flex: 5;
    border: 1px solid #CDAD00;
    background-color: #D1EEEE;
    height: 33px;
    border-radius: 17.5px;
    padding: 0 10px;
    outline:none;
}
.search-btn{
    height: 35px;
    width: 35px;
    flex: 1;
    text-align: right;
}
img{
    width: 35px;
    height: 35px;
}
.song-list{
    list-style: none;
    margin-top: 10px;
    padding: 0 17px;
}
.searchList li{
    text-align: left;
    border-bottom: 1px solid #00bfff;
}
.songname{
    display: block;
    height: 35px;
    line-height:35px; 
    font-size: 20px;
}
.artistname{
    display: block;
    height: 25px;
    line-height: 25px;
    font-size: 16px;
}
</style>