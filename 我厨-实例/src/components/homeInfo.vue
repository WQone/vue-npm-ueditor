<template>
	<div id="home-imgInfo">
		<div class="loading" v-if="loading">
    		 <div class="spinner">
				  <div class="spinner-container container1">
				    <div class="circle1"></div>
				    <div class="circle2"></div>
				    <div class="circle3"></div>
				    <div class="circle4"></div>
				  </div>
				  <div class="spinner-container container2">
				    <div class="circle1"></div>
				    <div class="circle2"></div>
				    <div class="circle3"></div>
				    <div class="circle4"></div>
				  </div>
				  <div class="spinner-container container3">
				    <div class="circle1"></div>
				    <div class="circle2"></div>
				    <div class="circle3"></div>
				    <div class="circle4"></div>
				  </div>
			</div>
    	</div>
		<div v-else>
			<div v-for="(item,index) in swiperImg">
				<img :src="item">
			</div>
			<div class="goback">
				<router-link to="/home">
					<img src="http://wmall.wochu.cn/h5/activityTemplate/img//ac-back.png?v=a21ad015db"/>
				</router-link>
				 
			</div>
			
			<div class="gocart">
				<router-link to="/cart">
					<img src="http://wmall.wochu.cn/h5/activityTemplate/img/ac-cart.png?v=e98e99d6e3"/>
				</router-link>
				
			</div>
		
			<div class="gototop" @click="goToTop()">
				<a>
					<img src="http://wmall.wochu.cn/h5/activityTemplate/img/go_top.png?v=2be36c8ddb"/>
				</a>
				
			</div>
		</div>
	
	</div>

</template>



<script>
import $ from'jquery' 
 export default {
    name: 'homeInfo',
   data() {
	   	 return {
	   	 	swiperImg:[],
	   	 	loading: false
	   	 }
    },
    
   	watch:{
		"$route":"getInfo"
	},
	
    methods:{
//  	winReload:function(cond){
//         window.location.reload();//刷新页面
//      },
       	goToTop(){
//     	  document.body.scrollTop = 0;
//     	  document.documentElement.scrollTop = 0;
  				$('html, body').animate({
	            scrollTop: 0
	        	}, 1000)
    	},
        getInfo(){
        	this.loading = true ,
     	 	this.$http.get("/api/db") 
		    .then(function (data){
		     var swiper=data.body.swiperSlides;
		     var paramsData=this.$route.params;
		     for(var i=0;i<swiper.length;i++){
		     	if(paramsData.id==swiper[i].activityId){
		     		this.swiperImg=swiper[i].imgInfo;
		     	}
		     }
		     
		     setTimeout(()=>{
						// 当数据返回, 隐藏loading	
						this.loading = false 
			 },1000)
		     
		  })
     	}
    },
   
    created(){
	  	this.getInfo();
    }
   
 }  
</script>
<style type="text/css">
			#home-imgInfo{box-sizing: border-box;}
			#home-imgInfo div>img{width: 100%;background: pink;}
			#home-imgInfo .gocart{position: fixed;padding: 1.2rem 0.16rem;z-index: 999;right: 0rem;top: 0rem;}
			#home-imgInfo .gocart>a>img,#home-imgInfo .goback>a>img{width: 1.11rem;height: 1.11rem;}
			#home-imgInfo .goback{position: fixed;padding: 1.2rem 0.16rem;z-index: 999;left: 0rem;top: 0rem;}
			
			#home-imgInfo .gototop{position: fixed;padding: .3rem 0.16rem;z-index: 999;right: 0rem;bottom: 0;}
			#home-imgInfo .gototop>a>img{width: 1.16rem;height: 1.16rem;}
/*loading特效*/

.spinner {
  margin: 50% 42%;
  width: 1.22rem;
  height: 1.22rem;
  position: relative;
 
}
 
.container1 > div, .container2 > div, .container3 > div {
  width: 0.25rem;
  height: 0.25rem;
  background-color: #333;
 
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
 
.spinner .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
 
.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
 
.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
 
.circle1 { top: 0; left: 0; }
.circle2 { top: 0; right: 0; }
.circle3 { right: 0; bottom: 0; }
.circle4 { left: 0; bottom: 0; }
 
.container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.container3 .circle1 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
.container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
 
.container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
 
.container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
 
.container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
 
.container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
 
.container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
 
.container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}
 
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}
 
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}			
			
			
			  
</style>