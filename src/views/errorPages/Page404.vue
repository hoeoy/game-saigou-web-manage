<template>
<div translate="no"  class="body">
    






<div class="content" >
  <canvas class="snow" id="snow" width="3000px" height="400"></canvas>
  <div class="main-text" style="margin-top: -100px;">
    <h4>免责声明</h4>
    <div style="font-size: 12px;line-height:30px;height: 2000px;float: left;text-align: left;margin-left: 5vw;">
    	● 01. 为避免出现争议请仔细阅读以下信息<br />
       ● 02.  使用本网站的各户及玩家，请留意所在国家或居住地的相关法律法规，如有疑问可寻求当地的法律意见，守法娱乐。<br />

● 03.  若发生遭骇客入侵破坏行为或不可抗拒之灾害导致网站故障、或资料损坏、资料丢失等情况，我们将以本公司资料为最后处理依据。为确保各方利益，请会员列印资料，本公司不会接受没有列印资料的投诉。<br />

● 04.  为避免纠纷，各会员在投注之后务必进入状况检查及列印资料，若发生任何异常，请立即与代理商联系查证，一切投注将以本公司资料库的资料为准。如出现特殊网络情况或线路不稳定导致不能下注或下注失败，本公司概不负责。<br />

● 05.  开奖结果以官方公布的结果为准。<br />

● 06.  我们将竭力提供准确而可靠的开奖统计资料，但并不保证资料绝对无误，统计资料仅供参考，并非是对客户行为的指引，本公司也不接受于统计数据产生错误而引起的相关投诉。<br />

● 07.  本公司拥有一切判决及注销任何涉嫌以非常方式之权利，在进行更深入的调查期间，将停止发放与其有关之任何下分及颁奖的程序。<br />

    客户有责任确保自己的账户及密码保密，如果客户怀疑自己的资料被盗用，应立即通知本公司或当地代理商，并须更改个人详细资料，所有被盗用账号之损失将由客户自己负责。<br />

● 08.  与本公司客服或当地代理商联系，申请账号密码，谢谢<br />

● 09.  若官方游戏中心遇到黑客或病毒出现开奖错误导致本系统采集数据时出错情况下，当期错误的所有注单以官方网站更改后的数据标准重新结算，在此特别声明，客户不得有任何异议。 <br />
● 10. <span style="color:red;"> 以上押奖只限娱乐游戏及奖励游戏，本站拒绝各种赌博、色情。</span><br />
  <input type="checkbox" v-model="yes" @click="yess()"/>同意<span style="margin-left: 40px;"></span><input type="checkbox" v-model="no"/>不同意 
    </div>
     
  </div>
 
</div>

  

</div>
</template>

<script>
import Vue from 'vue'

 
   export default {

        data () {
            return {
           yes:false
            }
        },
        mounted(){
            (function() {
    function ready(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
    
    function makeSnow(el) {
        var ctx = el.getContext('2d');
        var width = 0;
        var height = 0;
        var particles = [];
        
        var Particle = function() {
            this.x = this.y = this.dx = this.dy = 0;
            this.reset();
        }
        
        Particle.prototype.reset = function() {
            this.y = Math.random() * height;
            this.x = Math.random() * width;
            this.dx = (Math.random() * 1) - 0.5;
            this.dy = (Math.random() * 0.5) + 0.5;
        }
        
        function createParticles(count) {
            if (count != particles.length) {
                particles = [];
                for (var i = 0; i < count; i++) {
                    particles.push(new Particle());
                }
            }
        }
                
        function onResize() {
            width = window.innerWidth;
            height = window.innerHeight;
            el.width = width;
            el.height = height;
            
            createParticles((width * height) / 10000);
        }
        
        function updateParticles() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#f6f9fa';
            
            particles.forEach(function(particle) {
                particle.y += particle.dy;
                particle.x += particle.dx;
                
                if (particle.y > height) {
                    particle.y = 0;
                }
                
                if (particle.x > width) {
                    particle.reset();
                    particle.y = 0;
                }
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
                ctx.fill();
            });
            
            window.requestAnimationFrame(updateParticles);
        }
        
        onResize();
        updateParticles();
    }
    
    ready(function() {
        var canvas = document.getElementById('snow');
        makeSnow(canvas);
    });
})();

       },
       methods:{
       	yess(){     		
       		if(this.yes == true){
       			
       			this.$router.push({
       				path:"/"
       			})
       		}
       	}
       }
       
       
    }

</script>


 <style>
 .body {
  height: 700px;
  min-height: 450px;
  font-size: 32px;
  font-weight: 500;
  color: #5d7399;
  margin:0;padding:0;border:0;
}

.content {
  height: 100%;
  position: relative;
  z-index: 1;
  background-color: #d2e1ec;
 // background-image: -webkit-linear-gradient(top, #bbcfe1 0%, #e8f2f6 80%);
 // background-image: linear-gradient(to bottom, #bbcfe1 0%, #e8f2f6 80%);
  overflow: hidden;
}

.snow {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 20;
}

.main-text {
  padding: 20vh 0px 0 20px;
  text-align: center;
  line-height: 2em;
  font-size: 5vh;
}
.main-text h1 {
  font-size:45px;
  line-height:48px;
  margin:0;
  padding:0;}
.main-text-a{
  height:32px;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}
.main-text-a a {
   font-size:16px;
   text-decoration:none;
   color:#0066CC;
 }
.main-text-a a:hover{
   color:#000;
}
.home-link {
  font-size: 0.6em;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
  border-bottom: 1px dashed rgba(93, 115, 153, 0.5);
}
.home-link:hover {
  opacity: 1;
}

.ground {
  height: 160px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #f6f9fa;
  box-shadow: 0 0 10px 10px #f6f9fa;
}
.ground:before, .ground:after {
  content: '';
  display: block;
  width: 250px;
  height: 250px;
  position: absolute;
  top: -62.5px;
  z-index: -1;
  background: transparent;
  -webkit-transform: scaleX(0.2) rotate(45deg);
          transform: scaleX(0.2) rotate(45deg);
}
.ground:after {
  left: 50%;
  margin-left: -166.66667px;
  box-shadow: -340px 260px 15px #8193b2, -620px 580px 15px #8193b2, -900px 900px 15px #b0bccf, -1155px 1245px 15px #b4bed1, -1515px 1485px 15px #8193b2, -1755px 1845px 15px #8a9bb8, -2050px 2150px 15px #91a1bc, -2425px 2375px 15px #bac4d5, -2695px 2705px 15px #a1aec6, -3020px 2980px 15px #8193b2, -3315px 3285px 15px #94a3be, -3555px 3645px 15px #9aa9c2, -3910px 3890px 15px #b0bccf, -4180px 4220px 15px #bac4d5, -4535px 4465px 15px #a7b4c9, -4840px 4760px 15px #94a3be;
}
.ground:before {
  right: 50%;
  margin-right: -166.66667px;
  box-shadow: 325px -275px 15px #b4bed1, 620px -580px 15px #adb9cd, 925px -875px 15px #a1aec6, 1220px -1180px 15px #b7c1d3, 1545px -1455px 15px #7e90b0, 1795px -1805px 15px #b0bccf, 2080px -2120px 15px #b7c1d3, 2395px -2405px 15px #8e9eba, 2730px -2670px 15px #b7c1d3, 2995px -3005px 15px #9dabc4, 3285px -3315px 15px #a1aec6, 3620px -3580px 15px #8193b2, 3880px -3920px 15px #aab6cb, 4225px -4175px 15px #9dabc4, 4510px -4490px 15px #8e9eba, 4785px -4815px 15px #a7b4c9;
}

.mound {
  margin-top: -80px;
  font-weight: 800;
  font-size: 180px;
  text-align: center;
  color: #dd4040;
  pointer-events: none;
}
.mound:before {
  content: '';
  display: block;
  width: 600px;
  height: 200px;
  position: absolute;
  left: 50%;
  margin-left: -300px;
  top: 50px;
  z-index: 1;
  border-radius: 100%;
  background-color: #e8f2f6;
  //background-image: -webkit-linear-gradient(top, #dee8f1, #f6f9fa 60px);
  //background-image: linear-gradient(to bottom, #dee8f1, #f6f9fa 60px);
}
.mound:after {
  content: '';
  display: block;
  width: 28px;
  height: 6px;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  top: 68px;
  z-index: 2;
  background: #dd4040;
  border-radius: 100%;
  -webkit-transform: rotate(-15deg);
          transform: rotate(-15deg);
  box-shadow: -56px 12px 0 1px #dd4040, -126px 6px 0 2px #dd4040, -196px 24px 0 3px #dd4040;
}

.mound_text {
  -webkit-transform: rotate(6deg);
          transform: rotate(6deg);
}

.mound_spade {
  display: block;
  width: 35px;
  height: 30px;
  position: absolute;
  right: 50%;
  top: 42%;
  margin-right: -250px;
  z-index: 0;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  background: #dd4040;
}
.mound_spade:before, .mound_spade:after {
  content: '';
  display: block;
  position: absolute;
}
.mound_spade:before {
  width: 40%;
  height: 30px;
  bottom: 98%;
  left: 50%;
  margin-left: -20%;
  background: #dd4040;
}
.mound_spade:after {
  width: 100%;
  height: 30px;
  top: -55px;
  left: 0%;
  box-sizing: border-box;
  border: 10px solid #dd4040;
  border-radius: 4px 4px 20px 20px;
}
 </style>
