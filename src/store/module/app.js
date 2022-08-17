import route from "@/router"
export default{
  namespaced: true,
  state: {
    sideBarOpen:false,
    tagRoutes:[
      {
        name:'index',
        path:'/index',
        meta:{
          title:"首页",
          icon: "el-icon-house",
          noDropDown:true
        }
      },
    ]
  },
  mutations: {
    toggleSidebarSwitch(state){
      state.sideBarOpen = !state.sideBarOpen
    },
    addTagRoutes(state, tagRoutes){
      let isFind = state.tagRoutes.find(item => item.path == tagRoutes.path);
          !isFind && state.tagRoutes.push(tagRoutes);
    },
    removeTagRoutes(state,{index,isRoute}){
      state.tagRoutes.splice(index,1);
      if(isRoute) route.push(state.tagRoutes[state.tagRoutes.length-1].path) 
    }
  },
  actions: {
   
  }
}
