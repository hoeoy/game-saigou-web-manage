<template>
  <div class="animated fadeIn">

 <div style="font-size: 18px;position: relative;top: -5px;left: 30vw;width: 80px;background: #143f6d; color: #ccc;text-align: center;">积分记录</div>

		<div class="shooo" style="width: 80vw;margin-top: -20px; height: 70vh;border: 1px solid #0078DE;padding: 30px;">
			<table id="customers" >
				<tr>
					<th>编号 </th>
					<th>账号 </th>
					<th>期数 </th>
					<th>类型 </th>
					<th>积分明细 </th>
					<th>时间 </th>
				</tr>
				<tr v-for="(item,index) in listData" id="altss">
					<td>{{item.period_code}}</td>
					<td>{{item.user_code}}</td>
					<td>{{item.pk_bet}}</td>
					<td>{{item.bet_item}}</td>
					<td>{{item.money}}</td>
					<td>{{item.ts}}</td>
				</tr>
				
			</table>
		</div>


</div>
</template>

<script>
    export default {
        data () {
            return {
                
                listData:[{}]
            }
        },
        methods: {
           	retrieve(){
        		
        	
           let url =general+"/api/cash/retrieve"
           let str ={
           	 pk_user: sessionStorage.Pid
           }
           this.$http.post(url, str).then((response) => {
					if(response.body.success == true) {
						this.listData =response.body.resultData
					} else {
						this.$Message.error(response.body.msg)
					}
				}).catch(function(response) {
					this.$Message.error("服务器故障请联系管理员")
				});
				},
            
        },
        mounted () {
            this.retrieve()
        }
    }
</script>
<style scoped lang="css">
		#customers {
		font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
		width: 100%;
		border-collapse: collapse;
	}
	/*id为customers 的标签里面的td标签和th标签的样式*/
	
	#customers td,
	#customers th {
		font-size: 1em;
		border: 1px solid #697182;
		padding: 3px 7px 2px 7px;
	}
	/*id为customers 的标签里面的th标签的样式*/
	
	#customers th {
		font-size: 1.1em;
		text-align: left;
		padding-top: 5px;
		padding-bottom: 4px;
		background-color: #0078DE;
		color: #FFF;
	}
	/*id为customers的标签里面的class名为alt的tr标签里面的td标签的样式*/
	
	#customers tr td {
		color: #000;
		background-color: #EAF2D3;
	}
	#customers #altss tr:hover{
		background: #0066CC;
	}
.shooo{
	box-shadow: 2px 4px 15px #0066CC;
}
</style>

