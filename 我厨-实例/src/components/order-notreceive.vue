<template>
	<div class="order-notreceive">
		  
				<div class="order_middle_wrap">
					<img src="http://wmall.wochu.cn/h5/mall/css/images/ic_no_goods.png"/>
					<h3>您还没有相关订单</h3>
					<p>可以看看哪些想买的</p>
					<router-link to="/home"><span>随便逛逛</span></router-link>
				</div>

			
	    	</div>
		
	</div>
</template>


<script>
export default {
	  name: 'order-notreceive',

	  
}
</script>
<style type="text/css" >
			
			#order_middle{margin-top: 1.64rem;width: 100%;text-align: center;background: white;}
				.order_middle_wrap{padding-top:4rem;padding-bottom: 3.12rem;}
				.order_middle_wrap img{width:2.89rem;height: .9rem;}
				.order_middle_wrap h3{display: block;color: #999999;padding: 0.31rem;font-size: 0.5rem;font-weight: bold;color: black;}
				.order_middle_wrap p{font-size:0.42rem;color: #333;padding-bottom: 0.31rem;}
				.order_middle_wrap span{border: 1px solid #f47d30;;display: inline-block;padding:0.15rem 0.31rem;
							color: #565656;border-radius: 0.06rem;margin-top: 0.31rem;font-size: 0.45rem;font-weight: bold;}
				
			


</style>

