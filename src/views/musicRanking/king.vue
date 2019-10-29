<template>
    <div>
        <Ranking  :url="url"/>
    </div>
</template>

<script>
import Ranking from "../../components/ranking"
export default {
    name: "King",
    data(){
        return{
            url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=20&offset=0"
        }
    },
    components:{
        Ranking,
    }
}
</script>

<style>

</style>

