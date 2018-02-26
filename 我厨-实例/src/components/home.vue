<template>
	<div class="home">
		
		<div class="home_top" id="home_top">
				<div class="logo">
					<img src="http://wmall.wochu.cn/h5/img/wc-logo.png"/>
				</div>
				<div class="address">
					<img src="http://wmall.wochu.cn/h5/home/img/location-white.png" class="location" />
					<p>请填写地址</p>
					<img src="http://wmall.wochu.cn/h5/home/img/down-arr1.png" class="down">
				</div>
				<div class="search">
					<router-link to="/search">
					<img src="http://wmall.wochu.cn/h5/home/img/search-white.png" />
					</router-link>
				</div>
				
				
			</div>
			
<!--			
			<swiper :options="swiperOption" ref="mySwiper" id="home_slide">

		    	
				    <swiper-slide  v-for="(item,index) in swiperSlides" :key="item.id" >
						<router-link v-bind:to="{name:'homeInfo', params: {id: item.activityId}} ">
				    		<img :src="item.swiperSlide">
						</router-link>
				    </swiper-slide>
				
				    <div class="swiper-pagination"  slot="pagination"></div>
				
		    </swiper>-->
			
			<ul class="home_nav" id="home_nav">
				<li class="home_nav_list"  v-for="(item,index) in homeNav">
					<img :src="item.homeNavImg">
				</li>				
			</ul>

			<ul class="home_middle" id="home_middle">
			<!--第一部分-->
				<li class="home_middle_list"  v-for="(item,index) in homePage">
						<img v-lazy="item.homePageImg">
				</li>
				
		
				
			<!--第四部分 推荐商品-->
				<li class="home_middle_msg">
					<img src="http://img.i-kitchen.cn/upload/e0aefc21-2ab2-4ac7-b3d2-602d6738129f.jpg"/>
				</li>
				
				<li class="home_middle_list">
					<img src="http://img.i-kitchen.cn/upload/8c22b564-d162-4257-9e73-830dbfc6383e.jpg"/>
				</li>
				<li class="goods_list">
					<ul>
						<li  v-for="(goodsItem,index) in shopList">
							<a href="#">
								<img v-lazy="goodsItem.shopImg">
							</a>
							<p class="goods_name">{{goodsItem.shopName}}</p>
							<div class="goods_price">
								<div class="old_price">￥{{goodsItem.oldPrice}}</div>
								<div class="new_price">￥{{goodsItem.price}}</div>
							</div>
							<div class="addCart" @click="addStore(goodsItem)">
								<img src="http://wmall.wochu.cn/h5/home/img/addcart.png"/>
							</div>
						</li>
					</ul>
				</li>	

			</ul>
		<Footnav> </Footnav>	
	</div>
	
</template>
	
	
<script type="text/javascript">
import Footnav from '@/components/footnav'

export default {
  name: 'home',
  components:{
		  	Footnav
	 },
  data() {
      return {
      	  swiperSlides:[],
      	  homeNav:[],
      	  homePage:[],
      	  shopList:[],
          swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
        }
      }
   },
   
// watch:{
// 	"$route":"xxx"
// },
   
  created:function (){
	  	 this.$http.get("api/db") 
		    .then(function (data){
		     var swiperSlides = data.body.swiperSlides;
      		 this.swiperSlides = swiperSlides;
      		 var homeNav = data.body.homeNav;
      		 this.homeNav = homeNav;
      		 var homePage = data.body.homePage;
      		 this.homePage = homePage;
      		 var shopList = data.body.shopList;
      		 this.shopList = shopList;
      		 
	      })
//		    this.xxx();
	},
		
	
  methods:{
  	addStore(goodsItem){
			this.$store.commit("ADD_STORE",goodsItem)
			alert("已加入购物车")
		}
  }
  
}

	
</script>
	
<style> 
		 
			#home_top{width:100%;height:1.19rem;background:#78c652;line-height: 1.19rem;
						position: fixed;top: 0;left: 0;z-index: 99;padding: 0 .37rem;box-sizing: border-box;}
			.logo{width:2.27rem;float: left;}
			.logo img{width: auto;height:0.75rem;margin-left: 0.1rem;margin-top: 0.16rem;}
			.address{float: left;color: white;width: 4.9rem;font-size: .4rem;color: #fff;
   						 text-align: center;}
				.location{height: 0.4rem;width: auto;vertical-align: initial;margin-right:0.23rem;}
				.address p{display: inline-block;width: 3.33rem;}
				.down{height: 0.4rem;margin-left: 0.23rem;vertical-align: initial;}
				
			
			.search{float:right;color: #222; }
			.search img{width: 0.74rem;height: auto;margin-top: 0.1rem;}
			
			#home_slide{margin-top: 1.2rem!important;width:640px;}
			.swiper-slide{width: 100%!important;}	
			.swiper-slide img{width:100%!important;height: 4.62rem;}	
			.swiper-pagination-bullet-active{background: white!important;}
			
			#home_nav::before{display: table;content: "";}
			#home_nav::after{display: table;content: "";clear: both;}
			#home_nav{width: 100%;background: white;padding:0.18rem 0 0 .1rem;}
			.home_nav_list{float: left;width: 25%;height: 2.25rem;margin: 0 0 0.18rem 0;}
			.home_nav_list  img{height: 100%;}
			

			#home_middle{font-size:0.43rem;margin-bottom: 1.5rem;}			
			  .home_middle_list img{height: 4.06rem;width: 100%;margin-bottom: 0.1rem;}
			  .home_middle_msg{height: 1.2rem;background:#f8f8f8;}
			  .home_middle_msg img{height: 1.02rem;margin-bottom: 0.1rem;margin-top: .12rem;}
		
			  .goods_list{padding: 0 0.26rem 0.26rem 0.37rem;box-sizing: border-box;height: 100%;width: 100%;display: block;}
			  .goods_list>ul>li{width: 3.01rem;height: 4.8rem;margin-top: 0.37rem;margin-right: 0.108rem;float:left;box-sizing: border-box;}
			  .goods_list>ul>li>a>img{width: 100%;}
		
			  	.goods_name{color: #333;font-size: 0.37rem;height: 0.7rem; overflow: hidden;word-break: break-all;
   						 text-overflow: ellipsis;width:100%;line-height: .38rem;padding-top: 0.1rem;}
			  	.goods_price{float: left;margin-top: 0.2rem;}
			  	.old_price{color: #999;text-decoration: line-through;font-size: 0.37rem;line-height: .37rem;}
			  	.new_price{font-size:0.43rem;color: #f96d16;line-height: .42rem;}
			  	.addCart{width: 0.87rem;height: 0.71rem;float: right;line-height: .99rem;}
			  		.addCart img{width: 0.65rem;}
		</style>
		