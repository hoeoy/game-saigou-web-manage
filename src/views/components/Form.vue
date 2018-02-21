<template>

<div>
    <div style="font-size: 18px;position: relative;top: -5px;left: 30vw;width: 80px;background: #143f6d; color: #ccc;text-align: center;">每日统计</div>

		<div class="shooo" style="width: 80vw;margin-top: -20px; height: 70vh;border: 1px solid #0078DE;padding: 30px;">
			<table id="customers" >
				<tr>
					<th>时间</th>
					<th>下注积分 </th>
					<th>中奖积分 </th>
					<!--<th>反水积分 </th>-->
					
				</tr>
				<tr v-for="(item,index) in listData" id="altss">
					<td>{{item.date}}</td>
					<td>{{item.bet/100}}</td>
					<td>{{item.win/100}}</td>
					<!--<td>{{item.Number}}</td>-->
					
				</tr>
				
			</table>
		</div>

</div>

</template>
<script>
    export default {
    	name: 'form',
        data () {
            return {
                listData:[{}],
                
            }   
        },//data
        mounted:function(){
        	this.recae()
        },
      methods: {
      	recae(){
      		let str ={
 				 pk_user: sessionStorage.Pid
      		}
           let url =general+"/api/cash/retrieveAgg"
           this.$http.post(url,str).then((response) => {
           	this.listData =response.body.content
					if(response.body.success == true) {
						
						this.listData =response.body.resultData
						console.log(44455,this.listData)
					} else {
						this.$Message.error(response.body.msg)
					}
				}).catch(function(response) {
					this.$Message.error("服务器故障请联系管理员")
				});
      	},
        },
        
           
    }
</script>

<style type="text/css" scoped>
		
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

