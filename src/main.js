// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store.js'
import Login from './components/Login'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router/routes'
import App from './App'

Vue.use(VueResource);
Vue.use(VueRouter);

//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({routes});

// 全局导航钩子
router.beforeEach((to, from, next) => {
	//判断该路由是否需要登录权限
	//已经登陆成功，通过校验的话
	if(isEmptyObject(store.state.userInfo.userName)){
		if (to.meta.requireAuth) {
			next({
	            path: 'Login'
	            // query: {redirect: location.hostname}  // 可以作为校验
	        })
	        //以下应该是判断用户登录权限?
		    //通过vuex state获取当前的token是否存在
		    // console.log(isEmptyObject(store.state.user)) 
		    // if(!isEmptyObject(store.state.user)) {   
		    //     next();
		    // }else { 
		    //     next({
		    //         path: '/Login',
		    //         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
		    //     })
		    // }
		}else {
		    next();
		}
	}else{
		next();
	}
	
});

function isEmptyObject(obj) {
	for (var key in obj) {
	   return false;
	}
	return true;
}

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
});



