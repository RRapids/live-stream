<template>
	<view>
		<uni-status-bar></uni-status-bar>
		<view class="ml-3 mt-3" @click="back"><text class="iconfont icon-guanbi text-main"></text></view>

		<view class="text-center" style="padding-top: 130rpx;padding-bottom: 70rpx;font-size: 55rpx;">
			{{ status ? '手机验证码登录' : '账号密码登录' }}
		</view>

		<view class="px-2">
			<template v-if="!status">
				<view class="mb-2"><input type="text" v-model="form.username" placeholder="请输入用户名" class="border-bottom p-2" /></view>
				<view class="mb-2 flex align-stretch">
					<input type="text" v-model="form.password" placeholder="请输入密码" class="border-bottom p-2 flex-1" />
					<view class="border-bottom flex align-center justify-center font text-muted" style="width: 150rpx;">忘记密码？</view>
				</view>
			</template>

			<template v-else>
				<view class="mb-2 flex align-stretch">
					<view class="border-bottom flex align-center justify-center font px-2">+86</view>
					<input type="text" v-model="form.phone" placeholder="手机号" class="border-bottom p-2 flex-1" />
				</view>
				<view class="mb-2 flex align-stretch">
					<input type="text" v-model="form.code" placeholder="请输入验证码" class="border-bottom p-2 flex-1" />
					<view
						class="border-bottom flex align-center justify-center font-sm text-white"
						:class="codeTime > 0 ? 'bg-disabled' : 'bg-main'"
						style="width: 180rpx;"
						@click="getCode"
					>
						{{ codeTime > 0 ? codeTime + ' s' : '获取验证码' }}
					</view>
				</view>
			</template>
		</view>

		<view class="py-2 px-3">
			<button
				class="text-white bg-main"
				style="border-radius: 50rpx;border: 0;outline: none;"
				:disabled="disabled"
				:class="disabled ? 'bg-disabled' : 'bg-main'"
				@click="submit"
			>
				登录
			</button>
		</view>

		<view class="flex align-center justify-center pt-2 pb-4">
			<view class="text-main font-sm" @click="changeStatus">{{ status ? '账号密码登录' : '验证码登陆' }}</view>
			<text class="text-muted mx-2">|</text>
			<view class="text-main font-sm">登录遇到问题</view>
		</view>

		<view class="flex align-center justify-center">
			<view style="height: 1rpx;background-color: #dddddd;width: 100rpx;"></view>
			<view class="mx-2 text-light-muted">社交账号登录</view>
			<view style="height: 1rpx;background-color: #dddddd;width: 100rpx;"></view>
		</view>

		<view class="flex align-center px-5 py-3">
			<view class="flex-1 flex align-center justify-center">
				<image src="../../static/weixin.png" style="width: 70rpx;height: 70rpx;"></image>
			</view>
			<view class="flex-1 flex align-center justify-center">
				<image src="../../static/qq.png" style="width: 70rpx;height: 70rpx;"></image>
			</view>
			<view class="flex-1 flex align-center justify-center">
				<image src="../../static/weibo.png" style="width: 70rpx;height: 70rpx;"></image>
			</view>
		</view>

		<view class="flex align-center justify-center text-muted mt-3">
			注册即代表同意
			<text class="text-main">《社区直播协议》</text>
		</view>
	</view>
</template>

<script>
import uniStatusBar from '@/components/uni-ui/uni-status-bar/uni-status-bar.vue';
export default {
	components: {
		uniStatusBar
	},
	data() {
		return {
			status: false,
			form: {
				username: '',
				password: '',
				phone: '',
				code: ''
			},
			codeTime: 0
		};
	},
	onLoad() {},
	computed: {
		disabled() {
			if ((this.form.username === '' || this.form.password === '') && (this.form.phone === '' || this.form.code === '')) {
				return true;
			}
			return false;
		}
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		// 初始化表单
		initForm() {
			this.form.username = '';
			this.form.password = '';
			this.form.phone = '';
			this.form.code = '';
		},
		// 切换登录方式
		changeStatus() {
			// 初始化表单
			this.initForm();
			this.status = !this.status;
		},
		// 获取验证码
		getCode() {
			// // 防止重复获取
			// if (this.codeTime > 0) {
			// 	return;
			// }
			// // 验证手机号
			// if (!this.validate()) {
			// 	return;
			// }

			this.$H.post('/sendcode', { phone: this.form.phone }).then(res => {
				// 倒计时
				this.codeTime = 60;
				let timer = setInterval(() => {
					if (this.codeTime >= 1) {
						this.codeTime--;
					} else {
						this.codeTime = 0;
						clearInterval(timer);
					}
				}, 1000);
			});
		},
		// 表单验证
		validate() {
			//手机号正则
			var mPattern = /^1[34578]\d{9}$/;
			if (!mPattern.test(this.phone)) {
				uni.showToast({
					title: '手机号格式不正确',
					icon: 'none'
				});
				return false;
			}
			// ...更多验证
			return true;
		},
		// 提交
		submit() {
			// 表单验证
			// if (!this.validate()) {
			// 	return;
			// }
			let type = '';
			if (this.status) {
				type = 'phoneLogin';
			} else {
				type = 'login';
			}
			// console.log(type);
			console.log(this.form);
			this.$H.post('/' + type, this.form).then(res => {
				console.log(res);
				uni.showToast({
					title: '登录成功',
					icon: 'none'
				});
				this.$store.dispatch('login', res);
				uni.navigateBack({
					delta: 1
				});
			});
		}
	}
};
</script>

<style></style>
