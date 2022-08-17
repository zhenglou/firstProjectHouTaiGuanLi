import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/layout/index.vue"
Vue.use(VueRouter)

export const publicRoutes = [
  {
    name:'login',
    path:'/login',
    component:()=> import("@/views/login/login.vue"),
    meta:{
      title:'登录'
    }
  },
  {
    name:'index',
    path:'/',
    redirect: "/index",
    component:()=> import('@/layout/index.vue'),
    meta:{
      title:"首页",
      icon: "el-icon-house",
      noDropDown:true

    },
    children:[
      {
        path:'/index',
        component: ()=>import("@/views/home/index.vue"),
        meta:{
          title:'HOME'
        }
      }
    ]
  },
  {
    name:'404',
    path:'/404',
    component:()=> import('@/views/error/404.vue'),
    meta:{
      title:"404"
    }
  },
  {
    name:'401',
    path:'/401',
    component:()=> import('@/views/error/401.vue')
  }
]
export const privateRoutes=[
    {
      name:'articleManage',
      path:'/articleManage',
      // redirect:'/articleManage/aritcleCreate',
      component:Layout,
      meta:{
        title:'文章管理',
        role:['admin'],
        icon:'el-icon-document-copy',
        noDropDown:false
      },
      children:[
        {
          path:"/articleManage/aritcleCreate",
          name:"aritcleCreate",
          component:()=>import("@/views/article-create/index.vue"),
          meta:{
            title:"创建列表",
            icon:'el-icon-document-add'

          }
        },
        {
          path:"/articleManage/articleList",
          name:"articleList",
          component:()=>import("@/views/article-list/index.vue"),
          meta:{
            title:"文章列表",
            icon:'el-icon-document'

          }
        },
        {
          path:"/articleManage/aritcleTag",
          name:"aritcleTag",
          component:()=>import("@/views/article-tag/index.vue"),
          meta:{
            title:"文章标签",
            icon:'el-icon-collection-tag'

          }
        }
      ]
    },
    {
      path:"/userManage",
      name:"userManage",
      component:Layout,
      meta:{
        title:"用户管理",
        role:['admin'],
        icon:'el-icon-user',
        noDropDown:false

      },
      children:[
        {
          path:"/userManage/userList",
          name:"userList",
          component:()=>import("@/views/user-list/index.vue"),
          meta:{
            title:"用户列表",
            icon:'el-icon-user-solid'

          }
        }
      ]
    },
    {
      path:"/newsManager",
      name:"newsManager",
      component:Layout,
      meta:{
        title:"消息管理",
        role:['admin','editor'],
        icon:'el-icon-bell',
        noDropDown:false

      },
      children:[
        {
          path:'/newsManager/comment',
          name:'comment',
          component:()=>import("@/views/comment/index.vue"),
          meta:{
            title:'评论管理',
            icon:'el-icon-s-comment'

          }
        },
        {
          path:'/newsManager/message',
          name:'message',
          component:()=>import("@/views/message/index.vue"),
          meta:{
            title:'留言管理',
            icon:'el-icon-message'

          }
        }
      ]
    },
    {
      path:'/linksManage',
      name:'linksManage',
      component:Layout,
      meta:{
        title:'友链管理',
        role:['admin','editor'],
        icon:'el-icon-position',
        noDropDown:false

      },
      children:[
        {
          path:'/linksManage/linkList',
          name:'linkList',
          component:()=>import('@/views/link-list/index.vue'),
          meta:{
            title:'友链列表',
            icon:'el-icon-link'

          }
        }
      ]
    }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:publicRoutes
})

export default router
