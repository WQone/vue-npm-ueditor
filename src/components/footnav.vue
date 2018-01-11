<template>
 	<div class="footnav">						
      <footer id="tabBar" ng-show="rootIsShowFooter">
			<ul>
				<li class="tabBar_list ">
				  <router-link to="/home">
					<img src="http://wmall.wochu.cn/h5/img/index_n.png" id="a_1"/>
					<p class="active">首页</p>
					</router-link>
				</li>
				
				<li class="tabBar_list">
					<router-link to="/market">
					<img src="http://wmall.wochu.cn/h5/img/shopping_n.png"/>
					<p >分类</p>
					</router-link>
				</li>
				
				<li class="tabBar_list">
					<router-link to="/cart">
					<img src="http://wmall.wochu.cn/h5/img/cart_n.png"/>
					<p >购物车</p>
					<span class="buyNum"  v-show="sum!==0">{{sum}}</span>
					</router-link>
				</li>
				
				<li class="tabBar_list">
				 <router-link to="/mine">
					<img src="http://wmall.wochu.cn/h5/img/my_n.png"/>
					<p>我的</p>
				 </router-link>
				</li>
			
			</ul>	
		</footer>
		

    
  </div>
</template>

<script>

export default {
	computed:{
		sum(){
			return this.$store.getters.sum
		}
	}
}


</script>

<style >
			#tabBar{height: 1.15rem;width: 100%;background-color:#FFFFFF;border-top: 1px solid #fad1b6;
						padding:0.12rem 0;position: fixed;bottom: 0;z-index: 100; left: 0; right: 0;
						margin: 0 auto;}
			#tabBar ul{    display: table;width: 100%;}
			#tabBar ul li{height: 1.18rem;display: table-cell;width: 25%;text-align: center;
						vertical-align: middle;font-size: 0.37rem;line-height: .44rem;position: relative;}
			#tabBar ul li p{margin-top: 0.12rem;}
			#tabBar ul li a{height: 100%;font-size: 100%;color: #898989;text-decoration: none;display: block;}
			#tabBar img{width:0.58rem;height: 0.53rem;}
			.buyNum{background: #ee7c1b;border-radius: 50%;text-align: center;color: white;height: 0.43rem;width: 0.43rem;
						position: absolute;top: -.05rem;right:0.47rem;font-size: 0.37rem;}
			#tabBar>.router-link-active{color:rgb(249, 109, 22);}
			
</style>
