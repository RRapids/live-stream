<template>
	<view>
		<list style="width: 520rpx;height: 500rpx;" :show-scrollbar="false" :bounce="false">
			<cell
				class="flex align-center px-3 pt-3"
				v-for="(item, index) in gifts"
				:key="index"
				insert-animation="default"
				delete-animation="default"
				:ref="'item' + index"
			>
				<view class="flex rounded-circle" style="width: 325rpx; background-image: linear-gradient(to right,#BCABB1,#65AAF0);">
					<view class="p">
						<image :src="item.avatar || defaultAvatar" style="width: 70rpx;height: 70rpx;" class="rounded-circle"></image>
					</view>
					<view class="flex-1 flex flex-column justify-center">
						<text class="text-white font">{{ item.username }}</text>
						<text class="text-white font-sm">送{{ item.gift_name }}</text>
					</view>
					<view class="p"><image :src="item.gift_image" style="width: 70rpx;height: 70rpx;" class="rounded-circle"></image></view>
				</view>
				<text class="text-warning font-lg ml-1">X {{ item.num }}</text>
			</cell>
		</list>
	</view>
</template>

<script>
const dom = weex.requireModule('dom');
export default {
	data() {
		return {
			defaultAvatar: "/static/me.jpg",
			gifts: []
		};
	},
	methods: {
		send(gift) {
			this.gifts.push(gift);
			this.toBottom();
			this.autoHide();
		},
		toBottom() {
			this.$nextTick(() => {
				let index = this.gifts.length - 1;
				let ref = 'item' + index;
				if (this.$refs[ref]) {
					dom.scrollToElement(this.$refs[ref][0], {});
				}
			});
		},
		autoHide() {
			if (this.gifts.length) {
				let timer = setTimeout(() => {
					this.gifts.splice(0, 1);
				}, 5000);
			}
		}
	}
};
</script>

<style></style>
