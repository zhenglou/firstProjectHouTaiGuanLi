<template>
  <div>
    <el-menu
      :default-active="$route.path"
      :collapse="sideBarOpen"
      class="el-menu-vertical-demo"
      :background-color="variables[themeColor+'MainBgColor']"
      :text-color="variables[themeColor+'MainTextColor']"
      :active-text-color="variables.menuActiveTextColor"
      :unique-opened="true"
      :collapse-transition="false"
      router
    >
        <template v-for="item in routes">
            <SideBarItem 
                v-if="item.meta && item.meta.icon" 
                :key="item.path" 
                :route="item"
                
            />
        </template>
    </el-menu>
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem"
import {mapState} from "vuex"
export default {
    name: "SiderBarMenu",
    components: {SideBarItem},
    computed: {
        ...mapState("permission", ["routes"]),
        ...mapState("app",["sideBarOpen"]),
        ...mapState("theme",["variables"]),
        ...mapState("theme",["themeColor"])
    }
};
</script>

<style></style>
