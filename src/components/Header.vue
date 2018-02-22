<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" ></a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>
     
    </ul>
		<span style="margin-left: 25vw;font-size: 18px;color: #FFF">
			最新赛狗排名：
			{{listData.f1}}
			{{listData.f2}}	
			{{listData.f3}}	
			{{listData.f4}}	
			{{listData.f5}}	
			{{listData.f6}}	
			{{listData.f7}}	
			{{listData.f8}}	
			{{listData.f9}}	
			{{listData.f10}}	
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
  		admins:sessionStorage.user,
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
						this.listData =response.body.resultData[1]
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

</style>
