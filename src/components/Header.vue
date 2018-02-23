<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" ></a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>
     
    </ul>
		<span style="margin-left: 5vw;font-size: 18px;color: #FFF" class="nums">
			最新赛狗排名：
			<span :class="'mm'+f1" >{{f1}}</span>
			<span :class="'mm'+f2" >{{f2}}</span>
			<span :class="'mm'+f3" >{{f3}}</span>
			<span :class="'mm'+f4" >{{f4}}</span>
			<span :class="'mm'+f5" >{{f5}}</span>
			<span :class="'mm'+f6" >{{f6}}</span>
			<span :class="'mm'+f7" >{{f7}}</span>
			<span :class="'mm'+f8" >{{f8}}</span>
			<span :class="'mm'+f9" >{{f9}}</span>
			<span :class="'mm'+f10" >{{f10}}</span>
			
			
		</span>
    <ul class="nav navbar-nav d-md-down-none">
      
       <li class="nav-item header-item">
  

        
      </li>
        <li class="nav-item header-item">
        
      


      </li>




        <li class="nav-item header-item">
      

       
        </router-link> 


      </li>



     
    </ul>


    <ul class="nav navbar-nav ml-auto">
      
     

      <Dropdown class="nav-item">
        <a href="javascript:void(0)">
           <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o">
          <span class="d-md-down-none">{{admins}}</span>
          </span>
        </a>
        <Dropdown-menu slot="list" >
           
           
           
            
            
              </Dropdown-item>

                 <Dropdown-item > <a href="" @click="Logout"  ><p  class="dropdown-itemp"><Icon type="power"></Icon>Logout</p></a></Dropdown-item>

        </Dropdown-menu>
    </Dropdown>

 <span style="width: 30px;"></span>
      <!--<li class="nav-item d-md-down-none">
        <a class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle">&#9776;</a>
      </li>-->
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'

export default {
  name: 'header',
  components: {
    navbar,
    
  },
  data(){
  	return{
  		admins:sessionStorage.userid,
  		  f1:1,
  			f1:2,
  			f1:3,
  			f1:4,
  			f1:5,
  			f1:6,
  			f1:7,
  			f1:8,
  			f1:9,
  			f1:10,
  		listData:{
  			f1:1,
  			f1:2,
  			f1:3,
  			f1:4,
  			f1:5,
  			f1:6,
  			f1:7,
  			f1:8,
  			f1:9,
  			f1:10
  		}
  	}
  },
  mounted:function(){
  	this.retrieve()
  },
  methods: {
  	 retrieve(){
        		
        	
           let url =general+"/api/period/retrieve"
           let str ={
           	pk_user: sessionStorage.Pid
           }
           this.$http.post(url,str).then((response) => {
					if(response.body.success == true) {
						this.f1 =response.body.resultData[1].f1
						this.f2 =response.body.resultData[1].f2
						this.f3 =response.body.resultData[1].f3
						this.f4 =response.body.resultData[1].f4
						this.f5 =response.body.resultData[1].f5
						this.f6 =response.body.resultData[1].f6
						this.f7 =response.body.resultData[1].f7
						this.f8 =response.body.resultData[1].f8
						this.f9 =response.body.resultData[1].f9
						this.f10 =response.body.resultData[1].f10
					} else {
						this.$Message.error(response.body.msg)
					}
				}).catch(function(response) {
					this.$Message.error("服务器故障请联系管理员")
				});
				},
    Logout(e){
         e.preventDefault();
         this.$store.dispatch('LogOut').then(() => {
                this.$router.push({ path: '/login' });
              }).catch(err => {
                this.$message.error(err);
              });
    },
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>

<style type="text/css" scoped>
  .dropdown-itemp{
    text-align: left;
    font-size: 15px;
    padding: 10px;
  }
 .header-item .ivu-dropdown-item{
  padding: 15px;
}
  .header-item{
    width: 130px;
    /*background-color: #20a8d8;*/
    /*background-color: white;*/

    height: 55px;
    
    
  }
  .header-item a{
        color:white !important;

  }
  .nums{
  	float: left;
  }
  .nums>span {
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
  }
  .mm1 {
    background: #FF0000;
  }
  .mm2{
    background: #5200FF;
  }
  .mm3 {
    background: #008000;
  }
  .mm4 {
    background: #2D92C2;
  }
  .mm5 {
    background: #763e51;
  }
  .mm6 {
    background: #6F8A97;
  }
  .mm7 {
    background-color: #A76A2A;
  }
  .mm8 {
    background-color: #4C208C;
  }
  .mm9 {
    background-color: #975429;
  }
  .mm10 {
    background-color: #716676;
  }

</style>
