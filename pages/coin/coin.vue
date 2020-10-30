<template>
	<view class="border-top border-light-secondary p-3">
		<view class="rounded p-4 flex flex-column align-center justify-center bg-main">
			<text class="text-white font-sm mb-2">当前金币</text>
			<text class="font-weight-bold text-white" style="font-size: 60rpx;">50</text>
		</view>
		<view class="border-top border-light-secondary my-3"></view>
		<view><text class="font-sm text-muted">请选择充值金币</text></view>
		<view class="flex flex-wrap" style="margin-left: -20rpx;margin-right: -20rpx ;">
			<view style="width: 33.3%;box-sizing: border-box;" class="p-2" v-for="i in 6">
				<view style="height: 130rpx;" class="border rounded flex flex-column align-center justify-center">
					<view class="flex align-center">
						<text class="iconfont text-warning mr-1">&#xe633;</text>
						<text class="font-md font-weight-bold">10</text>
					</view>
					<text class="font text-light-muted">￥10</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
import uniPopupDialog from '@/components/uni-ui/uni-popup/uni-popup-dialog.vue';
export default {
	components: {
		uniPopup,
		uniPopupDialog
	},
	data() {
		return {
			activeIndex: 0,
			list: [
				{
					coin: 10,
					price: 10
				},
				{
					coin: 20,
					price: 10
				},
				{
					coin: 30,
					price: 10
				},
				{
					coin: 50,
					price: 10
				},
				{
					coin: 100,
					price: 10
				},
				{
					price: 0
				}
			],
			price: 0
		};
	},
	onLoad() {
		let p = this.list[this.activeIndex].price
		if(p>0){
			this.price = p
		}
	},
	methods: {
		chooseCoin(index){
			this.activeIndex = index
			let p = this.list[index].price
			if(p>0){
				this.price = p
			}else{
				// 自定义价格
				this.$refs.popup.open()
			}
		},
		//
		close(done){
			done()
		},
		//
		confirm(done,value){
			console.log(value)
			if(!value){
				return uni.showToast({
					title:'请输入要充值的金额',
					icon:'none'
				});
			}
			this.price = value
			done()
		}
	}
};
</script>

<style></style>
