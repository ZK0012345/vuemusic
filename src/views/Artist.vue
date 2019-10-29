<template>
  <div class="artist">
    <ul class="artist-list">
      <router-link tag="li" :to="{name:'ArtistDetails',params:{avatar_s500:item.avatar_s500,name:item.name,ting_uid:item.ting_uid}}" v-for="(item,index) in artistData" :key="index">
        <div class="Avatar"><img :src="item.avatar_s500" :alt="item.name"></div>
        <div class="name">{{ item.name }}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:"Artist",
  data(){
    return{
      artistArry: ["2571","1097","1557","1095","1035","1226","1224","1579","9529","6919","7004","28646904","2045","1204","28310844",],
      artistData: []
    }
  },
  created(){
    for(var i=0; i<this.artistArry.length;i++){
      const artistUrl = this.Host + "/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+this.artistArry[i];
      this.$axios.get(artistUrl)
      .then(res=>{
        this.artistData.push({
          name: res.data.name,
          avatar_s500: res.data.avatar_s500,
          ting_uid: res.data.ting_uid
        })
      })
      .catch(res =>{
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>
.artist{
  padding: 10px 17px;
}
.artist-list{
  width: 100%;
}
.artist-list li{
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #00bfff;
}
.Avatar{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 5px;
  float: left;
  background-color: yellow;
  overflow: hidden;
}
.name{
  text-align: left;
  font-size: 20px;
  height: 50px;
  margin: 5px 20px;
  line-height: 50px;
  float: left;
}
img{
  width: 50px;
  height: 50px;
}

</style>


