import Mock from "mockjs";
import user from "./user";

Mock.setup({
  timeout:'300-600' //全局延迟时间
})


// 监听post请求响应的数据
Mock.mock("/api/login","post", user.login);
Mock.mock("/api/userInfo","get", user.getUserInfo);

export default Mock