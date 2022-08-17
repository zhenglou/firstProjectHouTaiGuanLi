import Vue from 'vue'
import Vuex from 'vuex'
import user from "./module/user"
import theme from "./module/theme"
import permission from "./module/permission"
import app from "./module/app"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    theme,
    permission,
    app
  }
})
