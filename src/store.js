import Vue from "vue";
import Vuex from "vuex";
import Axios from 'axios'

Vue.use(Vuex);
Vue.prototype.$axios = Axios

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});
