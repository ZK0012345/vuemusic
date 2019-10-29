<template>
  <div class="home">
    <search />
    <musicList title="新歌速递" musicType="1" musicSize="6"/>
    <musicList title="热门歌单" musicType="2" musicSize="6"/>
    <musicList title="流行音乐" musicType="16" musicSize="10"/>
    <keep-alive>
        <router-view />
    </keep-alive>
  </div>
</template>

<script>
import musicList from "../components/musicList"
import search from "../components/Search"
export default {
  name: "home",
  components:{
    musicList,
    search,
  }
};
</script>

<style scoped>
</style>
