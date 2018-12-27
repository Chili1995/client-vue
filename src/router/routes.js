import Main from '@/components/Main'
import Login from '@/components/Login'

export default [
    {
      path: '/login',
      component: Login
    },
    {
        path: '/main', 
        meta: {
        	// 添加该字段，表示进入这个路由是需要登录的
         	requireAuth: true,  
        },           
        component: Main,
    }
 ]
