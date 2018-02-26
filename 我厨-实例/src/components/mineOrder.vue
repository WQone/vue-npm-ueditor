<template>
	<div class="mineOrder">
		    <div class="order_top" id="order_top">
				<router-link to="/mine">
					<img src="http://wmall.wochu.cn/h5/css/images/back.gif"/>
				</router-link>
				<p>我的订单</p>
			
			</div>
	
			<div class="order_middle" id="order_middle">
				<div class="order_nav">
					<ul>
						<li><router-link to="/mineOrder/order_All">全部</router-link></li>
						<li><router-link to="/mineOrder/order_notpay">待付款</router-link></li>
						<li><router-link to="/mineOrder/order-notcomment">待收货</router-link></li>
						<li><router-link to="/mineOrder/order-notreceive">待评价</router-link></li>
					</ul>
					
					
				</div>
				
				 <router-view> </router-view>
		

			
	    	</div>
		
		<Footnav></Footnav>
	</div>
</template>


<script>
import Footnav from '@/components/footnav'
export default {
	  name: 'mineOrder',
	  components:{
			  	Footnav
	  }
	  
}
</script>
<style type="text/css" scoped>
	#order_top{height: 0.5rem;padding: 0.5rem 0;background: white;border-bottom: 1px solid #55ba42;position: fixed;top: 0;z-index: 1000;
						width: 100%;}
				#order_top a{position: absolute;left: 5%;top: 25%;width: 10%;display: block;}
				#order_top a img{width: 0.5rem;height: 0.75rem;}
				#order_top p{text-align: center;font-size: 0.5rem;font-weight: bold;color: #686868;left: 10%;position: absolute;width: 75%;}
			
			#order_middle{margin-top: 1.64rem;width: 100%;text-align: center;background: white;}
				.order_middle_wrap{padding-top:4rem;padding-bottom: 3.12rem;}
				.order_middle_wrap img{width:2.89rem;height: .9rem;}
				.order_middle_wrap h3{display: block;color: #999999;padding: 0.31rem;font-size: 0.5rem;font-weight: bold;color: black;}
				.order_middle_wrap p{font-size:0.42rem;color: #333;padding-bottom: 0.31rem;}
				.order_middle_wrap span{border: 1px solid #f47d30;;display: inline-block;padding:0.15rem 0.31rem;
							color: #565656;border-radius: 0.06rem;margin-top: 0.31rem;font-size: 0.45rem;font-weight: bold;}
				
				.order_nav{width: 100%;position: fixed;height: 0.93rem;top: 1.5rem;border-bottom: 1px solid #666;padding-top: 0.25rem;}
					.order_nav ul {width: 100%;display:inline-block;}
					.order_nav ul li{float: left;width: 25%;display: block;height: 0.87rem;text-align: center;}
					.order_nav ul li a{display: block;color: #565656;font-weight:bold ;font-size: 0.44rem;height: 100%;}
			
			    .router-link-active{border-bottom: 2px solid #f5843a;}
			


</style>

