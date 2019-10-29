<template>
    <div class="nav">
        <ul>
            <router-link tag="li" to="/Home" class="img"><img src="../assets/yinle.png"></router-link>
            <router-link tag="li" to="/Artist">歌手</router-link>
            <router-link tag="li" to="/List">排行榜</router-link>
            <router-link tag="li" to="/News">资讯</router-link>
            <router-link tag="li" to="/Mine">我的</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Index",
}
</script>

<style scoped>
.nav ul{
  width: 100%;
  height: 60px;
  background-color: #00bfff;
  display: flex;
}
.nav ul li{
  height: 60px;
  list-style: none;
  font-size: 20px;
  flex: 20%;
  line-height: 60px;
}
/* a{
  display: block;
  line-height: 60px;
  height: 60px;

} */
.nav img{
  width: 80%;
  height: 80%;
  margin: 6px;
}
</style>


