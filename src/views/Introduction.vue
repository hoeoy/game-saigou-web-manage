<template>
	<div class="animated fadeIn" >
		<div style="float: left;margin-right: 40px;margin-top: 40px;">
		<div style="font-size: 18px;position: relative;top: -5px;left: 220px;width: 80px;background: #143f6d; color: #ccc;text-align: center;">公告</div>
		<div class="shooo" style="width: 500px;margin-top: -20px; height: 300px;border: 1px solid #0078DE;">
			<p style="text-align: center;margin-top: 30px;">title</p><p style="float: right;margin-top: 200px;">2018/12/12</p>
			<p>澳门游戏俱乐部今日降临河北了11111111</p>
		</div>
		
		</div>
		<div style="float: left;margin-right: 40px;margin-top: 40px;">
		<div style="font-size: 18px;position: relative;top: -5px;left: 220px;width: 80px;background: #143f6d; color: #ccc;text-align: center;">公告</div>
		<div class="shooo" style="width: 500px;margin-top: -20px; height: 300px;border: 1px solid #0078DE;">
			<p style="text-align: center;margin-top: 30px;">title</p><p style="float: right;margin-top: 200px;">2018/12/12</p>
			<p>澳门游戏俱乐部今日降临河北了11111111</p>
		</div>
		
		</div>
		<div style="float: left;margin-right: 40px;margin-top: 40px;">
		<div style="font-size: 18px;position: relative;top: -5px;left: 220px;width: 80px;background: #143f6d; color: #ccc;text-align: center;">公告</div>
		<div class="shooo" style="width: 500px;margin-top: -20px; height: 300px;border: 1px solid #0078DE;">
			<p style="text-align: center;margin-top: 30px;">title</p><p style="float: right;margin-top: 200px;">2018/12/12</p>
			<p>澳门游戏俱乐部今日降临河北了11111111</p>
		</div>
		
		</div>
		
	
		

	</div>
</template>

<script>
	import IntroChartCount from './charts/IntroChartCount';
	import IntroChartPie from './charts/IntroChartPie';

	export default {
		components: {
			IntroChartCount,
			IntroChartPie
		},
		name: 'dashboard',
		data() {
			return {
				value1: 0,
				value2: 0,
				value3: 0,

				speed: 10000,
			}
		},
		methods: {
			test_logout() {
				this.$store.dispatch('LogOut').then(() => {
					this.$router.push({
						path: '/login'
					});
				}).catch(err => {
					this.$message.error(err);
				});
			}
		},
		mounted() {
			const token = this.$store.getters.token;

		}
	}
</script>

<style type="text/css" scoped>
	.time {
		font-size: 14px;
		font-weight: bold;
	}
	
	.content {
		padding-left: 5px;
	}
	
	.dashboard_feature {
		text-align: center;
	}
	
	.demo-carousel {
		height: 600px;
		line-height: 200px;
		text-align: center;
		color: #fff;
		font-size: 20px;
		background: #506b9e;
	}
	
	.demo-carousel img {
		height: 100%;
		width: 100%;
	}
	
	h3,
	h4,
	h5 {
		margin: 12px;
	}
	
	h3 {
		margin-bottom: 20px;
	}
	
	p {
		margin: 12px;
	}
	
	.row-margin-top {
		margin-top: 30px;
	}
	
	.menus {
		width: 300px;
		height: 40px;
		margin-top: 5px;
		margin-left: 1vw;
		padding-left: 1vw;
		//text-align: center;
		line-height: 40px;
		border: 1px solid #0078DE;
	}
	
	.shooo {
		box-shadow: 2px 4px 15px #0066CC;
	}
</style>