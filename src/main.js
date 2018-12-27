// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Login from './components/Login'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import routers from './router/routes'
import App from './App'

// Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({routers});

// // 全局导航钩子
// router.beforeEach((to, from, next) => {
// 	 // 判断该路由是否需要登录权限
// 	 if (to.meta.requireAuth) {
// 	     // 通过vuex state获取当前的token是否存在
// 	     // console.log(isEmptyObject(store.state.user)) 
// 	     // if(!isEmptyObject(store.state.user)) {   
// 	     //     next();
// 	     // }
// 	     // else { 
// 	     //     next({
// 	     //        path: '/login',
// 	     //        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
// 	     //    })
// 	     // }
// 	 }
// 	 else {
// 	     // next();
// 	 }
// });


function isEmptyObject(obj) {
 for (var key in obj) {
     return false;
 }
 return true;
}

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

