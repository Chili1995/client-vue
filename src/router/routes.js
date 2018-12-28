/*
* author：Chili
* description：配置页面路由
**/

import Main from '@/components/Main'
import Login from '@/components/Login'

export default [
    {
      path: '/Login',
      component: Login
    },
    {
        path: '/', 
        meta: {
        	// 添加该字段，表示进入这个路由是需要登录的
         	requireAuth: true,  
        },           
        component: Main,
    }
 ]
