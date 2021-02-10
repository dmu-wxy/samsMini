<template>
	<view class="content">
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/basics_cur.png"></image>
				</view>
				<view class="text-green">首页</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/component.png"></image>
				</view>
				<view class="text-gray">地图</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/plugin.png"></image>
				</view>
				<view class="text-gray">其他</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
