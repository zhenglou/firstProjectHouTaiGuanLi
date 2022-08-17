import variables from "@/style/variables.less";
import {setStorage, getStorage} from "@/until/storage";
export default{
  namespaced: true,
  state: {
    variables,
    themeColor: getStorage("theme") || 'white',
    themeColorList:{
      white:'sunny',
      dark:'moon'
   }
  },
  mutations: {
    toggleThemeColor(state){
      state.themeColor = state.themeColor == 'white' ? 'dark':'white';
      setStorage("theme", state.themeColor)
    }
  },
  actions: {
   
  }
}
