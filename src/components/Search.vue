<template>
    <div class="search">
        <router-link tag="div" :to="{name:'SearchList',params:{searchContent:searchContent}}" class="search-box">
            <input type="text" placeholder="请输入搜索内容" v-model="searchContent">
            <div class="search-btn">
                <img src="../assets/search.png">
            </div>    
        </router-link>
        <!-- <ul class="song-list">
            <li v-for="(item,index) in songList" :key="index">
                <p class="songname">{{item.songname }}</p>
                <p class="artistname">{{ item.artistname}}</p>
            </li>
        </ul> -->
    </div>
</template>

<script>
export default {
    name: "Search",
    data(){
        return{
            searchContent:"",
            songList: [],
        }
    },
    // methods:{
    //     searchHandler(event){
    //         const searchUrl =  this.Host + "/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=" + this.searchContent;
    //         this.$axios.get(searchUrl)
    //         .then(res=>{
    //             if(res.data.error_code == 22001 ){
    //                 this.$message('搜索数据不存在')
    //                 return;
    //             }
    //             this.songList = res.data.song
    //             console.log("点击请求数据生效")
    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         })
    //     }
    // }
}
</script>

<style scoped>
.search{
    padding: 10px 17px;
    background-color: #00bfff;
}
.search-box{
    display: flex;
    height: 35px;
}
input{
    flex: 5;
    border: 1px solid #CDAD00;
    background-color: #D1EEEE;
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
</style>