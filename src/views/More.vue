<template>
    <div class="more">
        <ul class="rank_list">
            <li v-for="(item,index) in moreData" :key="index">
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
    name: "New",
    data(){
        return{
            moreData:[],
            offest:0,
        }
    },
    mounted(){
        const moreUrl = this.Host + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musictype+"&size=80&offset=0"
        this.$axios.get(moreUrl) 
        .then(res =>{
            // this.billboard_songnum = res.data.billboard_songnum
            this.moreData = res.data.song_list
            // this.offest = this.offest + 12
            console.log(res.data)
        })
        .catch(error =>{
            // console.log(error);
        })
    },
}
</script>

<style scoped>
/* .more{
    border-top: 1px solid darkgrey;
} */
.rank_list{
    background-color: #ffffff;
    padding: 0 20px 20px 20px;
    overflow: hidden;
    background-color: #D1EEEE;
}
.rank_list li{
    height: 70px;
    border-bottom: 1px solid darkgray;
    display: flex;
}
.s_img{
    width: 45px;
    height: 45px;
    margin-top: 15px;
    /* float: left; */
    /* flex: 1 */
}
.s_inform{
    /* float: left; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 15px;
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