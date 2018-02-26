<template>
  <div class="cart">
 
	 		<div class="gocart_middle" id="gocart_middle"  v-show="sum==0">
					<div class="gocart_middle_wrap">
						<img src="http://wmall.wochu.cn/h5/mall/css/images/ic_no_goods.png"/>
						<span>您的购物车为空</span>
						<span>可以看看哪些想买的</span>
						
						<span><router-link to="/home">随便逛逛</router-link></span>
						
					</div>
			</div> 
			
			<div class="buyCart"  v-show="sum!==0">
					<div class="buyCart_top" id="buyCart_top">
							<div class="goback">
								<router-link to="/market">
								<img src="http://wmall.wochu.cn/h5/mall/img/back.png"/>
								</router-link>
							</div>
							<div class="address">
								<img src="http://wmall.wochu.cn/h5/mall/img/location.png" class="location" />
								<p>请填写地址</p>
								<img src="http://wmall.wochu.cn/h5/mall/img/down-arr.png" class="down" />
							</div>
							<div class="edit"  @click="fn()">
								<p>编辑</p>
							</div>
					</div>
							<div class="buyCart_middle" id="buyCart_middle">
								<div class="buyCart_nav">
									<ul> 
										<li  ><a href="#">今天配送</a></li>
										<li style="border: 1px solid #f5843a;border-bottom: 1px solid #f1f0ee;"><a href="#"style="color:#f96d16;">4/18周二</a></li>
										<li><a href="#">4/19周三</a></li>
										<li><a href="#">4/20周四</a></li>
									</ul>
									
								</div>
						
							 	<div class="buyCart_foods"> 
							 		<ul>
							 			<li  v-for="(goodsItem,index) in products">
							 				<div class="buyCart_title">
							 					<span>{{goodsItem.active}}</span>
							 					{{goodsItem.nowActive}}
							 				</div>
							 				<div class="buyCart_list">
							 					<input type="checkbox" :value="index" v-model="selectArr" class="shop_click" ></input>
							 					<div class="shop_img">
							 						<a href="#">
															<img :src="goodsItem.img">
							 						</a>
							 					</div>
							 					<div class="shop_info">
							 						<div class="s-title">{{goodsItem.name}}</div>
							 						<div class="s-price"><span>￥{{goodsItem.price}}</span></div>
							 						<div class="s-number">
							 							<a class="minus" @click="down(goodsItem)">
							 								<img src="http://wmall.wochu.cn/h5/mall/img/disminus.png" />
							 							</a>
							 							<input class="num" min="1" type="number" v-model="goodsItem.count" />
							 							<a class="add"  @click="add(goodsItem)"> 
							 								<img src="http://wmall.wochu.cn/h5/mall/img/plus.png"/>
							 							</a>
							 						</div>
							 					</div>
							 					
							 				</div>
							 			</li>
							 		</ul>
							 	
							 	</div>

								<div class="buyCart_check">
									<div class="toCheack" v-if="willShow">
											<input type="checkbox" class="check_all" @click="selectAll"></input>
											<div class="check_price">
												<div class="total_price">合计：<span>￥{{total}}</span></div>
												<div class="fright">不含运费{{selectArr}}</div>
											</div>
											<div class="btn_checkout" >结算<span v-show="selectArr.length!==0">({{selectArr.length}})</span></div>
									</div>
									<div class="toedit" v-else>
											<input type="checkbox" class="check_all" @click="selectAll" >
											<span>全选</span>
											<p>清除购物车</p>
											<div class="btn_del" @click="del">删除</div>
									</div>									
								</div>
							
						</div>
			</div>

 		<Footnav></Footnav>
 		
  </div>
</template>

<script>
import Footnav from '@/components/footnav'

export default {
	name: 'cart',
  components:{
		  	Footnav
	 },
	 data(){
	 	
	 	 return {
    			willShow:true,
     			products:this.$store.getters.products,
     			selectArr: []
    	}
   },
   
	 methods:{
			down(goodsItem){
				this.$store.commit("DOWN",goodsItem)
			},
			add(goodsItem){
				this.$store.commit("ADD",goodsItem)
			},
			
			fn:function(){
          if(this.willShow==true){
            this.willShow=false;
          }else{
            this.willShow=true
          }
      },
      
      del() {
       	  let arr = [];
       	  var  products=this.$store.getters.products;
       	  console.log(products)
	        var len = this.products.length;
	        for (var i = 0; i < len; i++) {
		          if (this.selectArr.indexOf(i) >= 0) {
		          	
		            console.log(this.selectArr.indexOf(i))
		          } else {
		            arr.push(products[i])
		          }
	        }	        
	        this.products = arr;
	        this.selectArr = [];
      },
      
      
      selectAll(event) {
		        var _this = this;
		        console.log(event.currentTarget) 
		       if (!event.currentTarget.checked) {
		           this.selectArr = [];
		          
		        } else { 
						//实现全选
									_this.selectArr = [];
									_this.products.forEach(function(item, i) {
						      _this.selectArr.push(i);
									});
						}
       }
			
		
		},
	computed:{
			sum(){
				return this.$store.getters.sum
			},
			total(){
				return this.$store.getters.total
			},
			products(){
				
				return this.$store.getters.products			
				
			}
			
	},

  
}
</script>

<style scoped>
#gocart_middle{margin-top: 1.64rem;width: 100%;text-align: center;}
				.gocart_middle_wrap{padding-top: 20%;}
				.gocart_middle_wrap img{width:3.81rem;height: 1.15rem;}
				.gocart_middle_wrap span{display: block;color: #999999;}
				.gocart_middle_wrap span:nth-of-type(1){font-size:0.56rem;color: #666;line-height:40px;}
				.gocart_middle_wrap span:nth-of-type(2){font-size: 0.43rem;color:#dddcdc;}
				.gocart_middle_wrap span:nth-last-of-type(1) a{border: 1px solid #f47d30;;display: inline-block;padding: 0.05rem .83rem;
							color: #f47d30;line-height: 0.93rem;border-radius: 0.06rem;margin-top: 0.31rem;font-size: 0.5rem;}


	#buyCart_top{width:100%;height:1.19rem;background:white;line-height: 1.19rem;
						position: fixed;top: 0;left: 0;z-index: 99;padding: 0 .37rem;box-sizing: border-box;}
			.goback{width:2.27rem;float: left;}
			.goback img{width: auto;height:0.55rem;margin-left: 0.1rem;}
			#buyCart_top .address{float: left;color: black;width: 4.9rem;font-size: .4rem;
   						 text-align: center;}
			#buyCart_top	.location{height: 0.4rem;width: auto;vertical-align: initial;margin-right:0.23rem;}
			#buyCart_top	.address p{display: inline-block;width: 3.33rem;}
			#buyCart_top	.down{height: 0.4rem;margin-left: 0.23rem;vertical-align: initial;}
			.edit{float:right;color: #666; }

				
			
			#buyCart_middle{width: 100%;background: white;}
				
				
				.buyCart_nav{width: 100%;position: fixed;height:1.09rem;top: 1.18rem;left: 0;margin-bottom: 0.62rem;}
					.buyCart_nav ul {width: 100%;display:inline-block;background: #fef9f5;}
					.buyCart_nav ul li{float: left;width: 24.8%;display: block;height:1.05rem;text-align: center;border-bottom: 1px solid #f5843a;line-height: 1.05rem;}
					.buyCart_nav ul li a{display: block;color: #565656;font-size: 0.44rem;}
			
				.buyCart_foods{margin-top: 2.7rem;width: 100%; }
					.buyCart_foods ul {background: #F4F5F7;width: 100%;margin-bottom: 4.25rem;height: 100%;}
					.buyCart_foods ul li{height:4.05rem;color: #333;background: white;margin-top: 0.31rem;}
					.buyCart_title{border-bottom:1px solid #E6E6E6;height: 1.06rem;line-height: 1.06rem;width: 100%;padding:0 0.26rem ;}
					.buyCart_title span{color: #f96d16;border: 1px solid #f96d16;border-radius: 0.1rem;padding: 0.05rem 0.13rem;margin-right: 0.26rem;}
					.buyCart_list{padding: 0 0.28rem;}
						.shop_img{width: 2.93rem;float: left;}
						.shop_img a img{width: 100%;}
						.shop_click{height: 0.42rem;width: .42rem;float: left;margin-top: 10%;}
						.shop_info{float: right;padding: 0.26rem 0;width: 5.54rem;height: 100%;}
						.s-title{overflow: hidden;height: 0.79rem;display: box;-webkit-line-clamp: 2;line-height: .4rem;
   						 -webkit-box-orient: vertical;word-break: break-all;text-overflow: ellipsis;margin-bottom: 0.82rem;}

						.s-number a img{width: 0.66rem;}
						.s-price{width: 0.59rem;float: left; color: #f96d16;}
						.s-number{margin-left: 1.5rem;width: 2.76rem;height: 0.66rem;}
						.s-number,.s-number>a,.s-number>span{float: left;}
							.minus{margin-right: 0.31rem;}
							.add{margin-top: -0.03rem;margin-left: 0.31rem;}
							.num{width: 0.66rem;float: left;font-size: 0.43rem;}
						
				.buyCart_check{position: fixed;height:1.6rem;bottom: 1.35rem;background: white;width: 100%;border-top: 1px solid #fad1b6;padding-left: 0.26rem;}
					.check_all{float: left;width: 0.45rem;height: .45rem;margin-top: .6rem;} 
					.check_price{float: left;margin-top: .2rem;margin-left: 0.26rem;}
						.total_price span{color: #f96d16;font-size: 0.49rem;}
						.total_price{color: #333333;font-size: 0.37rem;} 
						.fright{color: #999;font-size: 0.37rem;float: left;}
					.btn_checkout,.btn_del{float: right;width:3.36rem;background:rgb(249, 109, 22);height: 100%;text-align: center;display: block;line-height: 1.6rem;
								color: #fff;font-size: 0.47rem;}		
								.btn_del{background: #ff3b30;}
				
				.toedit{line-height:1.6rem ;}			
				.toedit span{float: left;margin-left: 0.31rem;color: #f96d16;;}			
				.toedit p{float: left;color: #999;position: relative;left:2.93rem;}
</style>
