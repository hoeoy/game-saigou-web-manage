<template>
  <div class="animated fadeIn">

   
  
   <div style="font-size: 18px;position: relative;top: -5px;left: 30vw;width: 200px;background: #143f6d; color: #ccc;text-align: center;"><span>20170212990</span>期下注</div>

		<div class="shooo" style="width: 80vw;margin-top: -20px; min-height: 500px;border: 1px solid #0078DE;padding: 30px;">
			 
			 <p><span >今日盈亏<span style="color: red;"></span></span>
   		<span>可用积分 <span style="color: red;"></span></span>
   		<span>距离封盘还有 <span style="color: red;"></span></span></p>
   		
   		<div v-for="(item,index) in listData" style="background: #0078DE;width: 420px;height: 30px;color: #fff;line-height: 30px;margin-top: 1vw;margin-right: 2vw;float: left;">
   			<span>号码或类型：</span><span>{{item.number}}</span>
   			<span style="margin-left: 3vw;">倍率：</span><span>{{item.Rate}}</span>
   			<span style="margin-left: 3vw;">积分数：</span><span ><input onkeyup="value=value.replace(/[^\d]/g,'') " v-model="item.integral" style="background: #0078DE;height: 30px;border: none;color: #fff;width: 100px;"placeholder="请输入积分数"   ></span>
   		</div>
   		<div style="width: 800px;height: 100%;float: left;height: 80px;text-align: center;margin-top: 35px;">
   			<input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">快捷下注</label>
   			<button style="width: 60px;height: 30px;background: #0066CC;border: none;border-radius: 2px;margin-left: 10px;" @click="Commit()">提交</button>
   			<button style="width: 60px;height: 30px;background: #0066CC;border: none;border-radius: 2px;margin-left: 10px;" @click="Reset()">重置</button>
   		</div>
		</div>

 </div>
      
</template>

<script>

export default {
  name: 'buttons',

   data () {
            return {
            	  checked:false,
                listData:[{
                	number:1,
                	numberid:1,
                	Rate:12,
                	integral:""
                },
                {
                	number:2,
                	numberid:2,
                	Rate:12,
                	integral:""
                },
                {
                	number:3,
                	numberid:3,
                	Rate:12,
                	integral:""
                },
                {
                	number:4,
                	numberid:4,
                	Rate:12,
                	integral:""
                },
                {
                	number:5,
                	numberid:5,
                	Rate:12,
                	integral:""
                },
                {
                	number:6,
                	numberid:6,
                	Rate:12,
                	integral:""
                },
                {
                	number:7,
                	numberid:7,
                	Rate:12,
                	integral:""
                },
                {
                	number:8,
                	numberid:8,
                	Rate:12,
                	integral:""
                },
                {
                	number:9,
                	numberid:9,
                	Rate:12,
                	integral:""
                },
                {
                	number:10,
                	numberid:10,
                	Rate:12,
                	integral:""
                },{
                	number:"大",
                	numberid:"big",
                	Rate:1.2,
                	integral:""
                },{
                	number:"小",
                	numberid:"little",
                	Rate:1.2,
                	integral:""
                },{
                	number:"单",
                	numberid:"odd",
                	Rate:1.2,
                	integral:""
                },{
                	number:"双",
                	numberid:"even",
                	Rate:1.2,
                	integral:""
                },]
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            Commit(){
            	alert(1)
            },
            Reset(){
            	alert(2)
            },
        }
}


</script>


<style scoped lang="css">
  .btn {
     margin-bottom: 4px;
  }
  
    .showallcode{
            height: 100px;
    }
    .hidecode{
            height: 100%;
    }
    .highlight{
         transition:1000ms ease all;
    }
.shooo{
	box-shadow: 2px 4px 15px #0066CC;
}
</style>


