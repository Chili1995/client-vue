import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	userInfo:{
		userName:''
	}
}

const mutations = {
	isLogin (state,user) {
		state.userInfo.userName = user;
	}
}

export default new Vuex.Store({
	state,
	mutations
})