import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Axios from 'axios'

Vue.prototype.$axios = Axios
Vue.prototype.Host = "/baidu_music_api"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
