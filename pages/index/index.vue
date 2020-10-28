<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="200" style="width: 750rpx;height: 250rpx;">
			<swiper-item><image src="../../static/1.jpg" style="width: 750rpx;height: 250rpx;"></image></swiper-item>
			<swiper-item><image src="../../static/2.jpg" style="width: 750rpx;height: 250rpx;"></image></swiper-item>
		</swiper>

		<!-- </view> -->
		<view class="flex flex-wrap">
			<view class="list-item" v-for="i in 10" :key="i">
				<image src="../../static/me.jpg" style="width: 365rpx;height: 365rpx;" class="rounded" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script></script>

<style>
.list-item {
	width: 375rpx;
	height: 375rpx;
	padding: 5rpx;
	box-sizing: border-box;
	position: relative;
}
</style>
