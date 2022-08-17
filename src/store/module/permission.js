/* 
    区分不同权限，筛选不同的路由
    过滤掉不显示在菜单上的路由，返回对应导航菜单的 路由数组
*/

import {publicRoutes , privateRoutes} from "@/router";

/* 
 根据传来得权限值，和路由配置里设置的 role 值进行匹配
 匹配成功则返回匹配成功的路由 
 includes  是否包含该数据 ，若包含则返回true
 filter 对返回 true 的值添加到一个新的数组中  最后返回
 */
function filterRoutes(role){
  return privateRoutes.filter(v=>v.meta.role.includes(role))  
}                                                               
export default{
  namespaced: true,
  state: {
    routes: publicRoutes,   // 用来菜单栏遍历用
    permissionRoutes:[]     // 存放筛选后的路由，便于后续的遍历添加到权限路由
  },
  mutations: {
    setRoutesData(state,newRoutes){
      state.routes = [...publicRoutes, ...newRoutes];
      // console.log(state.routes);
    },
    setPermissionRoutes(state,newRoutes){  
      state.permissionRoutes = newRoutes;
    }
  },
  actions: {
    /**
     * 
     * @param {*} context 
     * @param {*} permission 
     * @returns 
     */
    async generateRoutes(context,permission){
      let routes = await filterRoutes(permission);          // 拿到过滤后的权限路由
      await context.commit("setRoutesData", routes);        
      await context.commit("setPermissionRoutes",routes);
      return Promise.resolve(routes);                       // 返回一个成功的 promise 对象
      
    }
  }
}
