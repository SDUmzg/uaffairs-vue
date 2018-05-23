<template>
  <div id="app" class="container-fluid container-height">
    <div class="row row-height">
      <div id="nav-bar" class="col-md-2">
        <side-bar></side-bar>
      </div>
      <div id="content" class="col-md-10">
        <div class="wrapper">
          <div id="header">
              <div id="userdiv">
              <!-- Single button -->
              <div class="btn-group">
                <button class="user-button" v-on:click="clickuserbutton">
                  <span class="glyphicon glyphicon-user" ></span>
                </button>
                <ul class="dropdown-menu" v-show="isActive">
                  <li><router-link to="/notify">通知</router-link></li>
                  <li><router-link to="/passwd">修改密码</router-link></li>
                  <li><router-link to="/login-out">退出</router-link></li>
                </ul>
              </div>                
              </div>
          </div>
          <div id="main">
              <router-view/>
          </div>          
        </div>
<!--         <div id="footer">
            <footer-nav></footer-nav>
        </div>   -->  
      </div>
    </div>
  </div>
</template>

<script>
import FooterNav from './components/footer.vue'
import SideBar from './components/sidebar.vue'
export default {
  name: 'App',
  components:{
    FooterNav,
    SideBar
  },
  data(){
    return{
      isActive: false
    }
  },
  methods:{
    clickuserbutton(){
      this.isActive=!this.isActive;
    }
  }
}
</script>

<style>

@import url('./assets/css/public.css');
@import "bootstrap/dist/css/bootstrap.min.css";
.dropdown-menu{
  display: block;
  width: 100px;
  min-width: 80px;
}
#main{
  height: 100%;
}
</style>
