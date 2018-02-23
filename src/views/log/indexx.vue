<template>
	<div>
		<div>账号：<input type="text"/></div>
		<div>密码：<input type="text"/></div>
		<Button  @click="lllll()" >登录</Button>
	</div>
</template>
<script>
	export default{
		name:'login',
		data(){
			return{
				
			}
		},
		methods:{
			lllll(){
				alert(11)
				this.$router.push({ name: 'Page404' });
			}
		},
		mounted:function(){
			
		}
	}
</script>