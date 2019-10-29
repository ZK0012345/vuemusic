import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Home from "./views/Home.vue";
import More from "./views/More.vue";
import Artist from "./views/Artist.vue";
import ArtistDetails from "./views/ArtistDetails.vue";
import List from "./views/List.vue";
import SearchList from "./views/SearchList.vue";
import MoreRankings from "./views/MoreRankings.vue";
import News from "./views/News.vue";
import Mine from "./views/Mine.vue";
import Hot from "./views/musicRanking/hot.vue";
import New from "./views/musicRanking/new.vue";
import King from "./views/musicRanking/king.vue";
import Play from "./views/Play.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
      redirect:"/Home",
      children:[
        {
          path:"Home",
          component:Home,
        },
        {
          path: "Artist",
          component: Artist,
        },
        {
          path: "List",
          component: List,
          redirect: "List/hot",
          children:[
            {
              path: "hot",
              component:Hot,
            },
            {
              path: "new",
              component:New,
            },
            {
              path: "king",
              component:King,
            }
          ],
        },
        {
          path:"SearchList",
          name: "SearchList",
          component:SearchList,
        },
        {
          path:"MoreRankings",
          component:MoreRankings,
        },
        {
          path: "news",
          component: News,
        },
        {
          path: "Mine",
          component: Mine,
        },
        {
          path: "More",
          name: "More",
          component: More,
        },
        {
          path: "ArtistDetails",
          name: "ArtistDetails",
          component: ArtistDetails,
        },
      ]
    },
    {
      path: "/Play",
      name: "Play",
      component: Play,
    }
  ]
});
