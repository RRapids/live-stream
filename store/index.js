import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 将登录后的user和token作为状态管理对象，定义actions为登录方法，
// 调用 的时候用dispatch分发，这样做的好处是可以包含异步操作

export default new Vuex.Store({
	state: {
		user: null,
		token: null
	},
	action: {
		login({
			state
		}, user) {
			state.user = user
			state.token = user.token

			uni.setStorageSync('user', JSON.stringify(user))
			uni.setStorageSync('token', user.token)
		}
	}
})
