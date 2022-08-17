import router from "./router/index.js";
import store from "@/store";
// import permission from "./store/module/permission";
// import { userInfoRequest } from "@/api/user";

// 因为响应的数据是模拟返回来的 对象, 即便对象内定义状态码为失败的，但axios依旧会认为是成功

const whiteList = ["/login"];
// 定义前置守卫
router.beforeEach(async (to, from, next)=>{
  if(store.state.user.token){
    if(/\/login/i.test(to.path)){
      return next("/");
    }
    if(store.state.user.userInfo.length === 0 || !store.state.user.userInfo){

      // 拿到用户信息的权限值
      let permission = await store.dispatch("user/getUserInfo").then(permission => permission).catch(()=>{console.log("返回 permission 失败");});
      // 拿到过滤后的路由
      let newRoutes =  await store.dispatch("permission/generateRoutes", permission);
      // 遍历添加私有路由过滤后的路由到权限路由中
      newRoutes.forEach(v=>{
        router.addRoute(v)
    })
      return router.push(to.path);
    }
    next();
  }else{
    
     return whiteList.includes(to.path) ? next() : next("/login");
  }
  
})

