<template>
    <div class="musicRanking">
        <!-- <search /> -->
        <ul>
            <li>
                <router-link to="/List/new">新歌榜</router-link>
            </li>
            <li>
                <router-link to="/List/hot">热歌榜</router-link>
            </li>
            <li>
                <router-link to="/List/king">King榜单</router-link>
            </li>
            <li>
                <router-link to="/MoreRankings">更多排行</router-link>
            </li>
        </ul>
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
// import search from "../components/Search"
export default {
    name:"List",
    // components:{
    //    search,
    // }
}
</script>

<style scoped>
.musicRanking{
    /* background-color: #D1EEEE; */
    padding: 10px 17px;
}
.more{
    flex: 1;
    text-align: right;
    line-height: 32px;
}
ul{
    display: flex;
}
ul li{
    float: left;
    flex: 1;
    padding: 12px 0 12px 0;
}
</style>


