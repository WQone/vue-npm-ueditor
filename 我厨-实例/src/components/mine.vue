<template>
	<div class="mine">
		<div class="person_top" id="person_top">
			<div class="setup_button">
				<a href="#">
					<img src="http://wmall.wochu.cn/h5/personal/css/images/center_button_setting_default@3x.png"/>
				</a>
			</div>
			<div class="person_top_bg">
				<img src="http://wmall.wochu.cn/h5/personal/css/images/top.gif"/>
			</div>
			<div class="person_coin">
				<a href="#">
					<img src="http://wmall.wochu.cn/h5/personal/css/images/center_image_user@3x.png" />
				</a>
				<span id="phone">15579179388</span>
			</div>
			<ul class="person_shopinfo">
				<li>
					<a href="#">
						0 <br />积分
					</a>
				</li>
				<li>
					<a href="#">
						0 <br />优惠劵噢
					</a>
				</li>
			</ul>
			
			
		</div> 
	
		<div class="person_middle" id="person_middle">
			<ul class="person_nav">
				<li>
					<router-link to="/mineOrder/order_All">
						<img src="http://wmall.wochu.cn/h5/personal/css/images/center_button_pay_default@3x.png" >
						<br>待付款
					 </router-link>
				</li>
				<li>
					<router-link to="/mineOrder/order_notpay">
						<img src="http://wmall.wochu.cn/h5/personal/css/images/center_button_receive_default@3x.png" >
						<br>待收货
					</router-link>
				</li>
				<li>
					<router-link to="/mineOrder/order-notcomment">
						<img src="http://wmall.wochu.cn/h5/personal/css/images/center_button_evaluated_defaulr@3x.png" >
						<br>待评价
					</router-link>
				</li>
				<li>
					<router-link to="/mineOrder/order-notreceive">
						<img src="http://wmall.wochu.cn/h5/personal/css/images/center_button_service_default@3x.png" >
						<br>退款/售后
					</router-link>
				</li>
				
			</ul>
			
			<div class="person_list">
				<ul>
					<li>
						<img src="http://wmall.wochu.cn/h5/personal/css/images/center_icon_allorders@3x.png" />
						<a href="#">
							全部订单
							<span>
								查看全部订单
								<img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png"/>
							</span>
						</a>
					</li>
					<li>
						<img src="http://wmall.wochu.cn/h5/personal/css/images/addr_icon.png" />
						<a href="#">
							我的地址
							<span>
								<img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png"/>
							</span>
						</a>
					</li>
					<li>
						<img src="http://wmall.wochu.cn/h5/personal/css/images/center_icon_collect@2x.png" />
						<a href="#">
							我的收藏
							<span>
								<img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png"/>
							</span>
						</a>
					</li>
					<li>
						<img src="http://wmall.wochu.cn/h5/personal/css/images/center_icon_collect@2x.png" />
						<a href="#">
							我的团
							<span>
								<img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png"/>
							</span>
						</a>
					</li>
					<li>
						<img src="http://wmall.wochu.cn/h5/personal/css/images/about-us.png?v=173cad2e87" />
						<a href="#">
							关于我厨
							<span>
								<img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png"/>
							</span>
						</a>
					</li>
					<li>
						<img src="http://wmall.wochu.cn/h5/personal/css/images/center_icon_help@3x.png" />
						<a href="#">
							帮助中心
							<span>
								<img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png"/>
							</span>
						</a>
					</li>
					<li>
						<img src="http://wmall.wochu.cn/h5/personal/css/images/center_icon_allorders@3x.png" />
						<a href="#">
							意见反馈
							<span>
								<img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png"/>
							</span>
						</a>
					</li>
					
				</ul>
				
			</div>
			
		</div> 
		
		<Footnav></Footnav>
	</div>
</template>


<script>
import Footnav from '@/components/footnav'
export default {
	name: 'mine',
  components:{
		  	Footnav
	 }
}
</script>
<style type="text/css" >

	 	#person_top{position: relative;width: 100%;}
				.setup_button{height: 0.93rem;position: absolute; right: 12px;top: 12px;width:0.93rem;}
				.setup_button img{height: 100%;}
				.person_top_bg img{width: 100%;}
				.person_coin{position: absolute;left: 0;top: 20%;text-align: center;width: 100%;}
				.person_coin>a{width: 2.62rem;position: absolute;margin-left: -1.31rem;left: 50%;border-radius: 5.21rem;overflow: hidden;
								top: 0rem;height: 2.62rem;}
				.person_coin>a>img{width: 100%;padding-bottom: 0.38rem;}
				.person_coin #phone{position: absolute;top: 3.45rem;left: 0;width: 100%;display: block; font-size:0.38rem;text-shadow: none !important;
									color: #333333;}
				.person_shopinfo{width: 100%;text-shadow: 0 1px 0 #fff;position: absolute;left: 0;bottom:0rem;background:rgba(0,0,0 ,.3);}
				.person_shopinfo li{width:49.9%;padding: 0.16rem 0;float: left;text-align: center;}
				.person_shopinfo li a{color: black;font-size: 0.4rem;display: block;text-shadow: none;}
				.person_shopinfo li:nth-of-type(1) a{border-right: 1px solid #fff}
		
		
			#person_middle ul{background: white;border-bottom: 1px solid #e5e4e4;}
				.person_nav{padding: 0.19rem 0;}
				.person_nav li{float: left;width: 25%;text-align: center;}
				.person_nav li a{color: black;padding: 0 0.38rem;font-size: 0.37rem;display: block;}
				.person_nav li img{width: 61%;}
				
				.person_list ul{padding-bottom: 2.25rem;height: 100%;}
				.person_list ul li{border-bottom: 1px solid #e5e4e4;display:block;background: #fff;position: relative;height: 1.5rem;}
				.person_list li>img{width: 6%; padding-left: 0.37rem;float: left;padding-top: 0.37rem;}
				.person_list li>a{color: black;display: block;height: 1.12rem;font-size: 0.43rem;width: 81%;
								float: right;line-height: 1.12rem;padding: 0.18rem 0.37rem;}
				.person_list li a span{position: absolute;right: 0.37rem;}
				.person_list li:nth-of-type(1) span>img{width: 6%;}
				.person_list li span>img{width: 28%;padding-left: 0.18rem;margin-top: -0.1rem;}
				
		
		</style>

