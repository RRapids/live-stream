<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="200">
			<swiper-item><image src="../../static/1.jpg" style="width: 750rpx; height: 280rpx;"></image></swiper-item>
			<swiper-item><image src="../../static/2.jpg" style="width: 750rpx; height: 280rpx;"></image></swiper-item>
		</swiper>
		<view class=" flex-2 flex-wrap flex">
			<list v-for="(item, index) in list" :key="index" :item="item" :index="index" @openLive="openLive"></list>
		</view>
	</view>
</template>

<script>
import tab from '../../components/common/tab.vue';
import list from '../../components/common/list.vue';
export default {
	components: {
		tab,
		list
	},
	data() {
		return {
			title: 'Hello',
			list: [
				// {
				// 	id:0,
				// 	image:"https://rapids.oss-cn-beijing.aliyuncs.com/logo/15279830-6bd9-457b-a2ca-1f3a2dad5f9b.jpg",
				// 	url:'https://live2.utools.club/live/rXYgzJ12XzD1VTwTwC3B.flv?sign=1604344085-25d925635f602d678426d2778bfa87a7',
				// 	coin:999,
				// 	hot:999,
				// 	title:"直播测试",
				// 	status:'直播中'
				// },
				{
					id: 1,
					image: 'https://rapids.oss-cn-beijing.aliyuncs.com/logo/15279830-6bd9-457b-a2ca-1f3a2dad5f9b.jpg',
					money: 0,
					colorIndex: 0,
					moods: 10,
					title: '标题1',
					status: '直播中'
				},
				{
					id: 2,
					image: 'https://rapids.oss-cn-beijing.aliyuncs.com/logo/f45a96cf-820f-46a8-adcd-9d83b251a2da.jpg',
					money: 0,
					colorIndex: 1,
					moods: 10,
					title: '标题2',
					status: '已结束'
				},
				{
					id: 3,
					image: 'https://rapids.oss-cn-beijing.aliyuncs.com/logo/d4fca01c-d7ed-474d-8b80-f4dbd038aadc.jpg',
					money: 0,
					colorIndex: 0,
					moods: 10,
					title: '标题1',
					status: '直播中'
				},
				{
					id: 4,
					image: 'https://rapids.oss-cn-beijing.aliyuncs.com/img/-53981c443f97787.jpg',
					money: 0,
					colorIndex: 1,
					moods: 10,
					title: '标题2',
					status: '已结束'
				},
				{
					id: 5,
					image: 'https://rapids.oss-cn-beijing.aliyuncs.com/logo/efbe1ed0-b8e4-49b1-bb62-e804bc253d2d.jpg',
					money: 0,
					colorIndex: 0,
					moods: 10,
					title: '标题1',
					status: '直播中'
				},
				{
					id: 6,
					image: '../../static/me.jpg',
					money: 0,
					colorIndex: 1,
					moods: 10,
					title: '标题2',
					status: '已结束'
				}
			]
		};
	},
	onLoad() {
		// uni.hideTabBar()
	},
	methods: {
		openLive(e) {
			uni.navigateTo({
				url: '../live/live'
			});
		}
	}
};
</script>

<style>
.content {
	width: 100%;
	height: 100%;
}
</style>
