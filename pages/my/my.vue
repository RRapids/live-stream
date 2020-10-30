<template>
	<view>
		<view class="top flex align-center justify-center"></view>

		<view class="flex align-center">
			<view class="flex align-center justify-center position-relative" style="width: 180rpx;height: 160rpx;">
				<image
					src="https://rapids.oss-cn-beijing.aliyuncs.com/logo/efbe1ed0-b8e4-49b1-bb62-e804bc253d2d.jpg"
					class="rounded-circle"
					style="width: 145rpx; height: 145rpx; position: absolute;top: -60rpx;"
				></image>
			</view>

			<view class="flex flex-column">
				<text class="font-md">Rapid</text>
				<text class="font text-muted">KK</text>
			</view>
			<view class="ml-auto mr-3">
				<view class="border border-main rounded flex align-center justify-center p-2" hover-class="bg-light">
					<text class="text-main font">编辑资料</text>
				</view>
			</view>
		</view>

		<view class="f-divider"></view>
		<f-list-item icon="iconbizhongguanli" title="我的金币" :showRight="false"><text class="text-main font">500金币 立即充值</text></f-list-item>
		<f-list-item icon="iconzhengzaizhibo" title="我的直播"><text class="text-muted font">0</text></f-list-item>
		<f-list-item icon="iconfenxiang" title="我的关注"><text class="text-muted font">0</text></f-list-item>
		<f-list-item icon="iconmore" title="历史记录"></f-list-item>
	</view>
</template>

<script>
import fListItem from '@/common/f-list-item.vue';
export default {
	components: {
		fListItem
	},
	data() {
		return {
			statusBarHeight: 0
		};
	},
	onLoad() {
		let res = uni.getSystemInfoSync();
		this.statusBarHeight = res.statusBarHeight;
	},
	methods: {}
};
</script>

<style lang="scss">
.top {
	width: 750rpx;
	height: 260rpx;
	background-image: url('https://rapids.oss-cn-beijing.aliyuncs.com/img/black-coffee-2847957_1920.jpg');
	background-size: cover;
	// background-image: linear-gradient(to right, #ba7ace 0%, #8745ff 100%);
}
</style>
