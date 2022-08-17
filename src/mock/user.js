
//监听注册界面用户请求响应的数据

export default{
  login(config){
    // config 模拟拿到请求的配置信息数据（json格式）
    // 接着解析为 js 格式 来继续操作
    // console.log(config);
    let data = JSON.parse(config.body);
    // console.log(data);
  switch(data.account){
    case "admin":
        return{
          code:200,
          token:"admin",
          data:{
            msg:"登录成, 欢迎superManager"
          }
        }
    case "editor":
        return{
          code:200,
          token:"editor",
          data:{
            msg:"登录成功, 欢迎superEditor"
          }
        }
    default:
      return{
        code:400,
        data:{
          msg:"登录失败，账号不存在"
        }
      }
   }
  },


  // 获取用户信息




getUserInfo(config){
    // console.log(config);
      let token = JSON.parse(config.body).token;
      // console.log(token);
      switch(token){
        case "admin":
          return{
            code: 200,
            data:{
                permission: "admin",// 权限
                name: "超级管理员",// 名字
                avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fexp-picture.cdn.bcebos.com%2F274e9635dd8a59de45e598b2b370d5413b8c8474.jpg%3Fx-bce-process%3Dimage%2Fresize%2Cm_fill%2Cw_92%2Ch_69&refer=http%3A%2F%2Fexp-picture.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655384431&t=99224a16e58f8c1d98b3ca848a58df18"// 头像
            }
          }
      case "editor":
        return{
          code: 200,
          data:{
            permission: "editor",
            name: "编辑者",
            avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F200610%2F4-2006101A419.jpg&refer=http%3A%2F%2Fpicture.ik123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655384448&t=34b703acb406b2592019b2c65693d6e0"
          }
        }
      default:
        return{
          code: 401,
          data:{
              msg: "token过期或者不存在,请重新登录"
          }
        }
      }

    }

  }
