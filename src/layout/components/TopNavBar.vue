<template>
  <div>
    <div class="l-menubar">
      <div class="hamburger-container" >
          <i :class="sideBarOpen?'el-icon-s-unfold' :  'el-icon-s-fold' " @click="toggleSidebarSwitch()"></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path:'/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" >{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="r-menubar">
        <i :class="'el-icon-' + themeColorList[themeColor]" @click="toggleThemeColor"></i>
        <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar 
            shape="circle" 
            :size="30" 
            :src="$store.state.user.userInfo.avatar"
          >
          </el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
   
     
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions} from 'vuex'
export default {
  name:'TopNavBar',
  computed:{
    ...mapState("app",["sideBarOpen"]),
    ...mapState("theme",["themeColor"]),
    ...mapState("theme",["themeColorList"]),
  },
  methods:{
    ...mapMutations("app",["toggleSidebarSwitch"]),
    ...mapMutations("theme",["toggleThemeColor"]),
    ...mapActions("user",["loginOut"]),

  handleCommand(){
    this.loginOut();
  }
  }
}
</script>
<style lang="less" scoped>
  .l-menubar {
  display: flex;
  overflow: hidden;
  height: 100%;
  align-items: center;
  & > div {
    margin-right: 16px;
  }
  .hamburger-container {
    i{
      font-size: 24px;
    }
  }
}


</style>
