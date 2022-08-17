<template>
  <div class="content">
      <div class="login-page">
     
        <el-form :model="loginFormData" :rules="loginRules" ref="loginForm" label-width="100px" class="login-form">
          <el-form-item>
            <h2 class="title">后台管理系统</h2>
          </el-form-item>

          <el-form-item label="账号" prop="account">
            <el-input v-model="loginFormData.account"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">  
            <el-input v-model="loginFormData.password" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm()" >登录</el-button>
          </el-form-item>
        </el-form>
        
      </div>
  </div>
</template>
<script>
import {loginRequest} from "@/api/user.js";
import {mapActions} from "vuex";

export default {
  data(){
    return{
       loginFormData:{  //定义与初始数据，用 model 双向绑定
         account:'admin',
         password: '123456'
       },
       loginRules:{  //定义校验规则，规则属性名即与 el-input 双向绑定的数据名
         account:[
          {required:true,message:'账号不能为空'}
         ],
         password:[
          { required: true, message: '密码不能为空'},
          { min: 1, max: 9, message: "密码长度为1 ~ 9" }
         ]
       }
      }
    },
    methods:{
      ...mapActions("user",["loginSuccessful"]),
      submitForm(){
           // 点击登录，将数据提交到后台
        this.$refs.loginForm.validate(async vaild =>{

            if(!vaild) return; //如果 vaild 为 false 也就是校验失败， 则直接返回，不进行页面跳转的操作

            // 将登录数据提交到后端
            try{
              const token = await loginRequest(this.loginFormData).then(data => {return data.data.token});
              // console.log(token);
              this.loginSuccessful({token})
          
            }catch{
              console.log("登录失败");
            }
          
        
                /**
                 * 登录成功做什么？
                 *  - 跳转到首页
                 *  - 将得到token存在本地缓存 / vuex
                 */
                

                // 登录失败
              
            
        })
      }
    }
  }

</script>
<style scoped>
  .content{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(../../assets/bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;  
  }
.el-button{
  width: 200px;
}
.login-page{
  margin-left: -60px
}
.title{
  text-align: center
}
</style>

