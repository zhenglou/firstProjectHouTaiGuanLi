<template>
  <div class="layout-page" :class="$store.state.app.sideBarOpen ? 'hideSidebar' : 'openSidebar'">
    <!-- 左侧导航菜单 -->
      <GuideSideBar class="l-guide-siderbar-container"></GuideSideBar>

      <!-- 右侧主体 -->
      <div class="r-main-container">
          <!-- 顶部topbar -->
          <TopNavBar class="topbar-container"></TopNavBar>
          <!-- tag标签栏 -->
          <PageTag class="t-tag-container"></PageTag>

          <!-- //右下方内容展示区 -->
          <main class="r-content">
          <!-- 渲染二级出口 -->
            <router-view></router-view>
          </main>
      </div>
  </div>
</template>
<script>
import TopNavBar from "./components/TopNavBar";
import GuideSideBar from "./components/GuideSideBar/index.vue";
import PageTag from "./components/PageTag.vue";
import { mapMutations } from "vuex";
export default {
  name:"layout",
  components:{
    TopNavBar,
    GuideSideBar,
    PageTag
},
  methods:{
    ...mapMutations("app",["addTagRoutes"])
  },
  watch:{
      // 侦听当前$route的变化
      $route: {
        handler(newData){
          // console.log(newData);
          let {path, meta} = newData;
          this.addTagRoutes({path, meta});
        },
        immediate: true  //初始时执行一次
      }
    }
}
</script>
<style lang="less" scoped>
@import "~@/style/variables.less";
@import "~@/style/layout.less";
</style>


