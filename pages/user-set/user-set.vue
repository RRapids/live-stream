<template>
	<view><f-list-item icon="icontuichu" title="退出" @click="logout()"></f-list-item></view>
</template>

<script>
import fListItem from '@/common/f-list-item.vue';

export default {
	components: {
		fListItem
	},
	data() {
		return {};
	},
	methods: {
		logout() {
			this.$store.dispatch('logout').then(res => {
				uni.navigateBack({
					delta: 1
				});
			});
		}
	}
};
</script>

<style></style>
