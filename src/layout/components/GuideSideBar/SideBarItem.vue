<template>
    <div>
        <!-- 判断有没有children嵌套路由 -->
        <el-submenu v-if="route.children && route.children.length > 0 && !route.meta.noDropDown" :index="route.path">
            <!-- 多级菜单的标题 -->
            <template slot="title">
                <i :class="route.meta.icon"></i>
                <span>{{route.meta.title}}</span>
            </template>
            <!-- 通过递归的方式使用当前组件 -->
            <SideBarItem 
                v-for="childrenItem in route.children"
                :key="childrenItem.path"
                :index="childrenItem.path"
                :route="childrenItem"
            >
            </SideBarItem>
        </el-submenu>


        <el-menu-item v-else :index="route.meta.noDropDown ? route.children[0].path: route.path">
            <i :class="route.meta.icon"></i>
            <span>{{route.meta.title}}</span>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name: "SideBarItem",
    props: ["route"]
}
</script>

<style>

</style>
