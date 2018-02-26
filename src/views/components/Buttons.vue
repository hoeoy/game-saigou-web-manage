<template>
	<div class="animated fadeIn">

		<!--<div style="font-size: 18px;position: relative;top: -5px;left: 30vw;width: 200px;background: #143f6d; color: #ccc;text-align: center;"><span>{{currt}}</span>期下注</div>-->
		<span><span style="color: red;">{{currt}}</span>期下注</span>
		<span style="margin-left: 30px;">可用积分 <span style="color: red;">{{money/100}}</span></span>
			<span>距离封盘还有 <span style="color: red;" id="time">{{time}}</span>秒</span>
			<span style="color: red;" v-if="falss">剩余40秒 禁止下注!</span>
			<span style="float: right;">本期结束将自动刷新数据，如有问题请
			<a @click="routPu">手动刷新</a></span>
        <!--<div class="shooo" style="width: 80vw;margin-top: -20px; min-height: 70vh;border: 1px solid #0078DE;padding: 30px;">-->
			<table id="customers" >
				<tr>
					
					<th style="width: 30%;">狗号/积分数</th>
					<th style="width: 30%;">倍率 </th>
					<!--<th style="width: 30%;"></th>-->
					<!--<th>反水积分 </th>-->
					
				</tr>
				<tr v-for="(item,index) in listData" id="altss">
					<td>{{item.number}}号狗：
					<span><input onkeyup="value=value.replace(/[^\d]/g,'') " v-model="item.integral" style="background:;height: 25px;border: none;color: red;width: 100px;"placeholder="请输入积分数"   ></span>
					</td>
					<td>
						{{item.Rate}}
					</td>
					<!--<td></td>-->
				</tr>
				<div style="width: 160px;height: 100%;float: left;height: 80px;text-align: center;margin-top: 35px;">
				<!--<input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">快捷下注</label>-->
				<button style="width: 60px;height: 30px;background: #0066CC;border: none;border-radius: 2px;margin-left: 10px;z-index: 1000000;" @click="Commit()" id="ccccc" :disabled="styles">提交</button>
				<button style="width: 60px;height: 30px;background: #0066CC;border: none;border-radius: 2px;margin-left: 10px;" @click="Reset()">重置</button>
			</div>

			</table>
		<!--</div>-->
		
	</div>

</template>

<script>
	import $ from 'jquery';
	export default {
		name: 'buttons',

		data() {
			return {
				styles:false,
				
				falss: false,
				Pids: "",
				currt: "",
				rest: '',
				time: 300,
				money: "",
				checked: false,
				listData: [{
						number: 1,
						numberid: 1,
						Rate: 9.5,
						integral: ""
					},
					{
						number: 2,
						numberid: 2,
						Rate: 9.5,
						integral: ""
					},
					{
						number: 3,
						numberid: 3,
						Rate: 9.5,
						integral: ""
					},
					{
						number: 4,
						numberid: 4,
						Rate: 9.5,
						integral: ""
					},
					{
						number: 5,
						numberid: 5,
						Rate: 9.5,
						integral: ""
					},
					{
						number: 6,
						numberid: 6,
						Rate: 9.5,
						integral: ""
					},
					{
						number: 7,
						numberid: 7,
						Rate: 9.5,
						integral: ""
					},
					{
						number: 8,
						numberid: 8,
						Rate: 9.5,
						integral: ""
					},
					{
						number: 9,
						numberid: 9,
						Rate: 9.5,
						integral: ""
					},
					{
						number: 10,
						numberid: 10,
						Rate: 9.5,
						integral: ""
					}, {
						number: "大",
						numberid: "big",
						Rate: 1.9,
						integral: ""
					}, {
						number: "小",
						numberid: "little",
						Rate: 1.9,
						integral: ""
					}, {
						number: "单",
						numberid: "odd",
						Rate: 1.9,
						integral: ""
					}, {
						number: "双",
						numberid: "even",
						Rate: 1.9,
						integral: ""
					},
				]
			}
		},
		ready: function() {
			this.recae()
		},
		mounted: function() {
			this.recae()
			this.catchFlow()
			this.beilv()
		},
		watch: {
			"this.time": {
				handler(val, oldVal) {
					console.log(val)
					if(this.time == 0) {
						alert(222)
						location.reload()
					}
				},
				deep: true
			}

		},
		methods: {
			times() {
				if(this.time == 0) {
					this.$router.push({
						path: 'buttons'
					})
				}
			},
			toLoading() {
				this.loading = true;
			},
			Commit() {
				let Data = this.listData
				let i

				let arr = []
				for(i in Data) {
					let sss = {
						bet_item: "",
						bet_money: "",
						pk_period: this.Pids + "",
						pk_user: sessionStorage.Pid
					}
					if(Data[i].integral !== "") {
						sss.bet_item = Data[i].numberid
						sss.bet_money = Data[i].integral * 100
						arr.push(sss)
						//console.log(999,arr)
					}

				}

				//console.log(3333,numberid)
				//let item =
				//          	let stes ={
				//          		bet_item: numberid,
				//				        bet_money: integral,
				//				    //期数
				//				        pk_period: "228",
				//				        pk_user: sessionStorage.Pid
				//          	}
				//let str =JSON.stringify(stes)
				let url = general + "/api/bet/saveBatch"
				this.$http.post(url, arr).then((response) => {
					if(response.body.success == true) {
						this.$Message.success("下注成功")
						let i
						for(i of this.listData) {
							i.integral = ""
						}
					} else {
						this.$Message.error(response.body.msg)
						let i
						for(i of this.listData) {
							i.integral = ""
						}
					}
				}).catch(function(response) {
					this.$Message.error("服务器故障请联系管理员")
					let i
					for(i of this.listData) {
						i.integral = ""
					}
				});
			},
			Reset() {
				let i
				for(i of this.listData) {
					i.integral = ""
				}

			},
			Inter() {
				clearInterval(this.interval)
				this.interval = setInterval(d => {
					this.time = this.time - 1;

					if(this.time <= 40) {
						this.falss = true
						//var obj = document.getElementById("ccccc");
						//obj.style.disabled= "disabled";
						//$("#ccccc").css("disabled","disabled")
						this.styles =true
					}
					if(this.time <= 0) {
//						clearInterval(this.interval)
//						this.$router.push({
//							name: "Page500"
//						})
//
//						this.$nextTick(d => {
//							this.recae()
//						})
              window.location.reload();
					}
				}, 1000);
			},
			beilv(){
				let url =general+"/api/setting/retrieve"
				this.$http.get(url).then((response) => {
						this.listData[0].Rate=response.body.rateNum	
						this.listData[1].Rate=response.body.rateNum	
						this.listData[2].Rate=response.body.rateNum	
						this.listData[3].Rate=response.body.rateNum	
						this.listData[4].Rate=response.body.rateNum	
						this.listData[5].Rate=response.body.rateNum	
						this.listData[6].Rate=response.body.rateNum	
						this.listData[7].Rate=response.body.rateNum	
						this.listData[8].Rate=response.body.rateNum	
						this.listData[9].Rate=response.body.rateNum
						this.listData[10].Rate=response.body.rateTwo	
						this.listData[11].Rate=response.body.rateTwo	
						this.listData[12].Rate=response.body.rateTwo	
						this.listData[13].Rate=response.body.rateTwo	
					if(response.code == 200){
					}
				}).catch(function(response) {
					this.$Message.error("服务器故障请联系管理员倍率丢失")
				});
			},
			recae() {
				let url = general + "/api/period/retrieveSummery"
				this.$http.get(url).then((response) => {

					if(response.body.code == 0) {
						this.currt = response.body.content.current_num
						this.time = response.body.content.rest_second
						this.Pids = response.body.content.pk_period
						this.$nextTick(d => {
							this.Inter()
						})
						

					} else {
						this.$Message.error(response.body.msg)
					}
				}).catch(function(response) {
					this.$Message.error("服务器故障请联系管理员")
				});
			},
			catchFlow() {
				let url = general + "/root/base/user/retrieveByPK?pk_user=" + sessionStorage.Pid
				this.$http.get(url).then((response) => {

					if(response.body.code == 0) {

						this.money = response.body.content.def1

					} else {
						this.$Message.error(response.body.msg)
					}
				}).catch(function(response) {
					this.$Message.error("服务器故障请联系管理员")
				});
			},
			routPu() {
				this.$router.push({
					name: 'Page500'
				})
			}
		}
	}
</script>

<style scoped lang="css">
	.btn {
		margin-bottom: 4px;
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
	
	.shooo {
		box-shadow: 2px 4px 15px #0066CC;
	}
	
	.bbb {
		display: inline-block;
		border-right: 1px solid #000000;
		height: 25px;
		width: 40px;
	}
</style>
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