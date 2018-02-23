<template>
  <div class="animated fadeIn">
		<div style="font-size: 18px;position: relative;top: -5px;left: 220px;width: 80px;background: #143f6d; color: #ccc;text-align: center;" >修改账号</div>
		
		
		
		<div class="shooo" style="width: 500px;margin-top: -20px; height: 300px;border: 1px solid #0078DE;">
			 <p style="margin-top: 40px;"></p>
			 <!--<div class="menus "><span>所属用户组:</span><span>代理</span></div>-->
			 <div class="menus "><span>登录账号:</span><span>{{admin}}</span></div>
			 <div class="menus "><span>修改密码:</span><span><input type="" name="" id="" v-model="psss"  style="border: none;background: #eff0f4;height: 30px;"/></span></div>
			 <p>密码大于6位，小于15位，数字或大小写字母</p>
			 <button style="width: 80px;height: 30px;margin-left: 100px;background: #0078DE; border: none;border-radius: 2px;" @click="buttons()">提交</button>
		</div>
		
 





         

        
       
      

      
     




   


  </div>
</template>

<script>
import DashChartCount from './charts/DashChartCount';
import DashChartVisitor from './charts/DashChartVisitor';
import DashChartLarge from './charts/DashChartLarge';
import VueCalendar from './components/VueCalendar';
import TodoList from '@/components/TodoList'

export default {
  components:{DashChartCount,DashChartVisitor,DashChartLarge,VueCalendar,TodoList},
  name: 'dashboard',
        data () {
            return {
            		argee:false,
            		Pid:false,
                admin:sessionStorage.userid,
                psss:''
            }
        },
        methods:{
        	buttons(){
        		let str = {
        			user_password :this.psss,
        			pk_user:sessionStorage.Pid
        		}
        		let strs =JSON.stringify(str)
        		let url =general+"/root/base/user/save"
        		     	this.$http.post(url,strs).then((responsr)=>{
            			if(response.body.success ==true){
            				this.$Message.success('修改用户成功');
            				this.passs =""
            			}else(
            				this.$Message.error(response.body.msg),
            				this.passs =""
            			)
            	}).catch(function(response) {
						
						this.passs =""
				});
        	},
              test_logout(){
                 this.$store.dispatch('LogOut').then(() => {
                    this.$router.push({ path: '/login' });
                  }).catch(err => {
                    this.$message.error(err);
                  });
              }
        },
        mounted(){
        	//alert(sessionStorage.argee)
        	if(sessionStorage.argee){
        		this.argee == true
        		
        	}
        	else{
        		this.$router.push({ name: 'Page404' });
        	}
        	//alert(sessionStorage.Pid)
        	if(sessionStorage.Pid){
        		this.Pid ==true
        	}else{
        		this.$router.push({ path: '/' });
        	}
//              const token=this.$store.getters.token;
//              if(typeof(sessionStorage.userid)==undefined){
//              	this.$Message.error('请重新登录');
//              }
//              
//           this.$Notice.success({
//                  title: '欢迎使用管理系统',
//                  //desc:  `你的账户权限是 ${token}
//                  //<span></span>
//                  //`,
//                  
//                          
//                      
//                  duration: 10
//              });

        }
}
</script>


<style type="text/css" scoped>
.state-overview{color:#fff}.state-overview .ivu-col{margin-bottom:20px}.state-overview .state-value .value{font-size:24px;font-weight:700;margin-bottom:5px}.state-overview .state-value .title{font-size:14px}.state-value{width:60%;display:inline-block}.symbol{width:35%;display:inline-block}.state-overview .panel{border-radius:4px;padding:25px 20px}.panel.purple{background:#6a8abe;box-shadow:0 5px 0 #5f7cab}.panel.red{background-color:#fc8675;box-shadow:0 5px 0 #e27869}.panel.blue{background:#5ab6df;box-shadow:0 5px 0 #51a3c8}.panel.green{background:#4acacb;box-shadow:0 5px 0 #42b5b6}.dash_income_chart{float:left}.ivu-row{margin-bottom:20px!important}.dash_income{border-radius:4px;background-color:#fff;height:80px;padding:15px}.staff_name{font-weight:900;font-size:16px}.staff_progress{margin-left:10px;width:90%}.staff_progress p{margin:0}.staff_list{border-radius:4px;margin-top:0;height:90px;display:flex;align-items:center}.animated{background-color:#eff0f4}li{margin-bottom:11px;margin-left:10px;margin-right:10px}.num{font-weight:700}.time{font-size:14px;font-weight:700}.content{padding-left:5px}.dashboard_feature{text-align:center}.demo-carousel{height:600px;line-height:200px;text-align:center;color:#fff;font-size:20px;background:#506b9e}.demo-carousel img{height:100%;width:100%}h3,h4,h5{margin:12px}h3{margin-bottom:20px}p{margin:12px}.row-margin-top{margin-top:30px}.state-info{position:absolute;right:15px;top:20px;margin-bottom:30px}.state-info .panel{margin-bottom:20px;float:right;margin-left:15px}.panel{background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.state-info .panel .summary{float:left;margin-right:20px}.state-info .panel .summary span{color:#49586e;font-size:13px;font-weight:400;text-transform:uppercase;margin-bottom:10px}.state-info .panel .summary h3.red-txt{color:#fc8675}.state-info .panel .summary h3.green-txt{color:#65cea7}.state-info .panel .summary h3{font-size:200%;font-weight:700;line-height:20px;margin:0}.page-heading h3{color:#49586e;font-size:25px;font-size:11%;font-weight:400;margin:10px 0}.chart-bar{float:right;margin-top:5px}.chart-bar img{display:inline-block;width:68px;height:45px;vertical-align:top}@media screen and (max-width:767px){.state-info{position:static;width:100%;margin-top:15px}.state-info .panel{width:100%}}.panel.blue-box{background:none repeat scroll 0 0 #5ab5de;box-shadow:0 5px 0 #51a3c7;color:#fff}.twt-info h3{font-family:'Open Sans',sans-serif;font-size:16px;font-weight:900;margin:10px 0 30px 0;text-align:center}.twt-info p{font-size:18px;line-height:25px;font-style:italic;margin:0 0 20px 0;text-align:center}.twt-info p a{color:#98fdf4}.media:first-child{margin-top:0}.media.usr-info>.pull-left{margin-right:20px;margin-top:10px}.media>.pull-left{margin-right:10px}.pull-left{float:left}.pull-left{float:left!important}.custom-trq-footer{background:none repeat scroll 0 0 #4eb6b7!important;box-shadow:0 5px 0 #46a3a4;color:#fff;border-top:none}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.usr-info .thumb{width:80px;height:80px;border-radius:50%;-webkit-border-radius:50%}.usr-info img{vertical-align:middle}.usr-info h4{color:#658585;margin-bottom:0}.media-heading{margin:0 0 5px}.usr-info .media-body span{color:#ea755c;font-size:12px;margin-bottom:20px;display:inline-block}.usr-info .media-body p{color:#b6bcbc}ul.user-states{list-style-type:none;padding:20px 0}ul.user-states li{text-align:center;float:left;width:33%;font-size:18px;margin:0}
.menus{
	width: 300px;
	height: 40px;
	margin-top: 5px;
	margin-left: 1vw;
	padding-left:1vw ;
	//text-align: center;
	line-height: 40px;
	border: 1px solid #0078DE;
}
.shooo{
	box-shadow: 2px 4px 15px #0066CC;
}
</style>