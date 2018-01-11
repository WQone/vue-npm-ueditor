<template>
  <div id="app">
  	<!--<transition name="fade">
  	  <keep-alive>-->
    			<router-view> </router-view>
			<!--</keep-alive>
    </transition>-->
    
    
  </div>
</template>

<script>
import $ from'jquery'  
$(function(){	
	
})


export default {
  name: 'app',
  
}
</script>

<style>
			#tabBar{height: 1.15rem;width: 100%;background-color:#FFFFFF;border-top: 1px solid #fad1b6;
						padding:0.12rem 0;position: fixed;bottom: 0;z-index: 100; left: 0; right: 0;
						margin: 0 auto;}
			#tabBar ul{    display: table;width: 100%;}
			#tabBar ul li{height: 1.18rem;display: table-cell;width: 25%;text-align: center;
						vertical-align: middle;font-size: 0.37rem;line-height: .44rem;}
			#tabBar ul li a{height: 100%;font-size: 100%;color: #898989;text-decoration: none;display: block;}
			#tabBar img{width:0.58rem;height: 0.53rem;}
			.router-link-active{color:rgb(249, 109, 22)!important;}
			
			
			/*.fade-enter-active, .fade-leave-active {
  				transition: opacity .3s
				}
			.fade-enter, .fade-leave-active {
 			 opacity: 0
				}*/

</style>
