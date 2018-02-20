<template>
<div>

   

   <div style="font-size: 18px;position: relative;top: -5px;left: 30vw;width: 80px;background: #143f6d; color: #ccc;text-align: center;">历史记录</div>

		<div class="shooo" style="width: 80vw;margin-top: -20px; min-height: 70vh;border: 1px solid #0078DE;padding: 30px;">
			<table id="customers" >
				<tr>
					
					<th>赛狗冠军</th>
					<th>赛狗排名 </th>
					<th>时间</th>
					<!--<th>反水积分 </th>-->
					
				</tr>
				<tr v-for="(item,index) in listData" id="altss">
					<td>{{item.f1}}</td>
					<td>
						{{item.f1}}
						{{item.f2}}
						{{item.f3}}
						{{item.f4}}
						{{item.f5}}
						{{item.f6}}
						{{item.f7}}
						{{item.f8}}
						{{item.f9}}
						{{item.f10}}
					</td>
					<td>{{item.ts}}</td>
					<!--<td>{{item.Number}}</td>-->
					
				</tr>
				
			</table>
		</div>

    
    </div>
</template>
<script>
    export default {
         data () {
            return {
            		listData:[{},{}],
                showcodeall:true,
                open: false,
                value3: '',
                value1: '2016-01-01',
                value2: ['2016-01-01', '2016-02-15'],
                  options1: {
                    disabledDate (date) {
                                   return date && date.valueOf() < Date.now() - 86400000;
                          },
                    shortcuts: [
                        {
                            text: '今天',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了今天');
                            }
                        },
                        {
                            text: '昨天',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了昨天');
                            }
                        },
                        {
                            text: '一周前',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了一周前');
                            }
                        }
                    ]
                },
                options2: {
                     disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    },
                    shortcuts: [
                        {
                            text: '最近一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            },
                             
                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        },
        methods:{
           retrieve(){
        		
        	
           let url =general+"/api/period/retrieve"
           let str ={
           	pk_user: sessionStorage.Pid
           }
           this.$http.post(url,str).then((response) => {
					if(response.body.success == true) {
						this.$Message.success("查询成功")
						this.listData =response.body.resultData
					} else {
						this.$Message.error(response.body.msg)
					}
				}).catch(function(response) {
					this.$Message.error("服务器故障请联系管理员")
				});
				},
        },
        mounted:function(){
        	this.retrieve()
        }
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