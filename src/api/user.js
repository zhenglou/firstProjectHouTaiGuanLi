import request from "@/until/axios.js";


export function loginRequest(data){
    return request({
      url:'/api/login',
      method:'post',  //提交登录信息
      data:data
    })
}


export function userInfoRequest(data){
  return request({
    url:'/api/userInfo', //请求用户信息
    method:'get',
    data:data
  })
}