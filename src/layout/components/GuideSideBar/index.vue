<template>
  <div>
      <div class="logo-container">
        <img :src="logoUrl" alt="赶不上" class="logo-img">
        <h1 class="logo-title">后台管理系统</h1>
      </div>

      
       <SideBarMenu></SideBarMenu>
      
  </div>
 
</template>
<script>
import SideBarMenu from "./SideBarMenu";
export default {
  name:'GuideSideBar',
  components:{SideBarMenu},
  data(){
    return{
      logoUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F33%2F6d%2F82%2F336d82ec4a3fc5cf5add5c347946452e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655815847&t=36b712a685b116e695c9bf3f4cb81de4",
    }
  }
 
}
</script>
<style lang="less" scoped>
.logo-container {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  // background-color: rgb(120, 120, 86);
  .logo-img {
    width: 34px;
    height: 34px;
    vertical-align: middle;
    border-radius: 17px;
  }
  .logo-title {
    margin-left: 10px;
    // color: #fff;
    letter-spacing: 2px;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
