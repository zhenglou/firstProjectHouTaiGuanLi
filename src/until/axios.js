import axios from "axios";
const service = axios.create({//创建axios实例
  baseURL:'',//相当于根路由基本配置路由是啥
  timeout:'5000'

})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //config.url 返回baseURL后的路径



  return config;
}, function (error) {
  // 对请求错误做些什么



  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
    // 2xx 范围内的状态码都会触发该函数
    
    
    
  return response;
}, function (error) {
  // 对响应错误做点什么
  // 超出 2xx 范围的状态码都会触发该函数。



  return Promise.reject(error);
});

export default service;