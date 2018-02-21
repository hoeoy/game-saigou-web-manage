<template>
  <div class="animated fadeIn">

  <div style="font-size: 18px;position: relative;top: -5px;left: 30vw;width: 80px;background: #143f6d; color: #ccc;text-align: center;">中奖记录</div>

		<div class="shooo" style="width: 80vw;margin-top: -20px; height: 70vh;border: 1px solid #0078DE;padding: 30px;">
			<table id="customers" >
				<tr>
					<th>编号 </th>
					<th>账号 </th>
					<th>期数 </th>
					<th>类型 </th>
					<th>下注数量 </th>
					<th>时间 </th>
				</tr>
				<tr v-for="(item,index) in listData" id="altss">
					<td>{{item.period_code}}</td>
					<td>{{item.user_code}}</td>
					<td>{{item.pk_period}}</td>
					<td>{{item.bet_desc}}</td>
					<td>{{item.bet_money/100}}</td>
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
                listData:[
                {}
                ]
            }
        },
        mounted:function(){
        	this.retrieve()
        },
        methods: {
        		retrieve(){
			let url =general+"/api/bet/retrieve"
			let str ={
				pk_user :sessionStorage.Pid,
				length:200,
				orderColumnName:"ts",
				orderDir:"desc",
				win:"1"
			}
			this.$http.post(url, str).then((response) => {
					if(response.body.success == true) {
						//this.$Message.success("")
						this.listData =response.body.resultData
					} else {
						this.$Message.error(response.body.msg)
					}
				}).catch(function(response) {
					this.$Message.error("服务器故障请联系管理员")
				});
		},
        }
    }

</script>
<style scoped lang="css">
	
	.doc-header {
		width: 100%;
		border-bottom: 1.5px dashed rgb(6, 40, 115);
		padding-left: 5px;
		padding-top: 5px;
		padding-bottom: 30px;
	}
	
	.doc-content {
		margin-top: 10px;
		margin-bottom: 50px;
		padding: 5px;
		line-height: 20px;
	}
	
	.doc-content p {
		margin-bottom: 5px;
		margin-top: 5px;
	}
	
	.doc-content h5 {
		margin-bottom: 10px;
		margin-top: 10px;
	}
	
	.showallcode {
		height: 100px;
	}
	
	.hidecode {
		height: 100%;
	}
	
	.highlight {
		transition: 1000ms ease all;
	}
	
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


