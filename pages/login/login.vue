<template>
	<view class="container">
		<view class="flex align-center justify-center" style="height: 350rpx;">
			<text style="font-size: 50rpx;" class="text-light">LIVE-SHOW</text>
		</view>

		<view class="px-3">
			<input
				type="text"
				v-model="form.username"
				class="bg-light px-3 mb-4 font rounded"
				placeholder="请输入用户名"
				style="height: 100rpx;"
			/>
			<input
				type="text"
				v-model="form.password"
				class="bg-light px-3 mb-4 font rounded"
				placeholder="请输入密码"
				style="height: 100rpx;"
			/>
			<input
				v-if="type != 'login'"
				type="text"
				v-model="form.repassword"
				class="bg-light px-3 mb-4 font rounded"
				placeholder="请输入确认密码"
				style="height: 100rpx;"
			/>
		</view>

		<view class="p-3 flex align-center justify-center" @click="submit">
			<view class="bg-main rounded p-3 flex align-center justify-center flex-1" hover-class="bg-main-hover">
				<text class="text-white font-md">{{ type === 'login' ? '登 录' : '注 册' }}</text>
			</view>
		</view>

		<view class="flex align-center justify-center">
			<view class="text-light-muted font p-2" @click="changeType">
				{{ type === 'login' ? '注册账号' : '去登录' }}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: 'login',
			form: {
				username: '',
				password: '',
				repassword: ''
			}
		};
	},
	methods: {
		changeType() {
			this.type = this.type === 'login' ? 'reg' : 'login';
		},
		submit() {
			let msg = this.type === 'login' ? '登录' : '注册';
			this.$H.post('/' + this.type, this.form).then(res => {
				uni.showToast({
					title: msg + '成功',
					icon: 'none'
				});
				if (this.type === 'reg') {
					this.changeType();
					this.form = {
						username: '',
						password: '',
						repassword: ''
					};
				} else {
					this.$store.dispatch('login', res);
					uni.navigateBack({
						delta: 1
					});
				}
			});
		}
	}
};
</script>

<style>
.container {
	width: 750rpx;
	height: 100vh;
	margin: 0;
	padding: 100rpx 0 0 0;
	background-size: cover;
	background-image: linear-gradient(to bottom, #ba7ace 0%, #8745ff 100%);
}
</style>