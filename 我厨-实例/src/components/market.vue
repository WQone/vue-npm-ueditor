<template>
  <div class="market">
 
 		<div id="classify_wrap" >
			<div class="classify_top" id="classify_top">
			
				<div class="classify_search">
					<img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" />
						<input class="search_value" />
				</div>
				
			</div>
			
			<div class="classify_middle">
				<div class="classify_nav">
					<ul>
						<li v-for="(item,index) in categorys" v-bind:class="{on:index==isShow}"  @click="changeCategory(item)"  >
							<p  v-bind:class="{activeMarket:index==isShow}"  @click="	isShow=index">{{item}}</p>
						</li>
						
					</ul>
				</div>	
				
				<div class="classify_content">
					<div class="content-item">
						<p>我厨精选</p>
						<ul>
							<li v-for="(item,index) in productList()">
								<a href="#">
									<img :src="item.productImg"/>
									<p>{{item.productName}}</p>
								</a>
							</li>
						
						</ul>
					</div>
					
					<!--<div class="content-item">
						<p>品牌专区</p>
						<ul>
							<li>
								<a href="#">
									<img src="http://img.i-kitchen.cn/upload/4d09e626-b733-4d4f-ad70-33f884de97d2.jpg" />
									<p>我厨专区</p>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="http://img.i-kitchen.cn/upload/c5a42e52-6095-4071-a540-d5a993f87237.jpg" />
									<p>荷美尔专区</p>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="http://img.i-kitchen.cn/upload/222f1492-fc7b-4df4-9df0-9933773d085a.jpg" />
									<p>烘焙DIY</p>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="http://img.i-kitchen.cn/upload/222f1492-fc7b-4df4-9df0-9933773d085a.jpg" />
									<p>烘焙DIY</p>
								</a>
							</li>
						</ul>
					</div>-->
					
					 
				
				</div>
				
			</div>
 
 
 
  </div>

		<Footnav></Footnav>
  </div>	

</template>

<script>
import Footnav from '@/components/footnav'
export default {
	name: 'market',
  components:{
		  	Footnav
	 },
	 
	data(){
		 return{
			isShow:0,
			selectedCategory:null,
			marketData:[]
		 }
 	 },
 	  	 
  created:function (){
	  		 this.$http.get("api/marketData") 
		    .then(function (data){
		    	this.marketData=data.body,
		    	console.log(this.marketData)
		    })

	},
 	 methods:{
 	 		changeCategory(val){
						this.selectedCategory = val
		 },
			productList(){ 
					return this.marketData.filter(item=>item.menu==this.selectedCategory)
		}
		
 	 },

	computed:{
		categorys(){
			var results = [];
  			var keys = {};

  			for (var i=0; i<this.marketData.length; i++){
  				var val = this.	marketData[i]["menu"]; 
  				if (!keys.hasOwnProperty(val)){
  					keys[val] = true
  					results.push(val)
  				}
  			}
  			return results
			}
		}	
}
</script>

<style scoped>
			#classify_top{width:100%;height:1.18rem;background:white;line-height: 1.19rem;
						position: fixed;top: 0;left: 0;z-index: 99;padding: 0 0.26rem;box-sizing: border-box;
						border-bottom: 0.03rem solid #e5e5e5;}
				.search_value{width: 8.31rem;background: #f1f2f6;font-size: .4rem}
			
			.classify_search{width: 9.46rem;height: 0.77rem; background: #f1f2f6;margin: 0.2rem 0;line-height: .77rem;
								border-radius: 0.51rem;}
			.classify_search img{width: 0.74rem;height: auto;}
	
		#classify_middle{font-size:0.43rem;margin-bottom: 1.15rem;position: absolute;left:0;height: 100%;width: 100%;top:1.3rem;} 
			.classify_nav{position: fixed;width:2.13rem;float: left;
    				left: 0;color: #666;font-size: 0.4rem;top: 1.18rem;margin-bottom: 1.15rem;
    				background: #fff;overflow-x: hidden;overflow-y: auto;height:86%;}
				.classify_nav ul li{width: 100%;height: 0.543rem;padding:0.346rem 0;
					border-bottom: 0.03rem solid #e6e6e6;  text-align: center;}

					.on{ background-color: #f4f5f7; color: #f96d16;}
					.activeMarket{border-left:0.14rem solid #f96d16;}
					
			.classify_content{position: absolute;width: 7.33rem;padding: 0 0.26rem .26rem .26rem;background: #f4f5f7;
    				float: right;right: 0;top: 1.43rem;bottom: 1.45rem;overflow: hidden;}		
				.content-item{width: 7.33rem;}
				.content-item>p{height: 0.67rem;color: #666;line-height:.67rem;}
				.content-item>ul{padding: 0.26rem 0.02rem .26rem .26rem;width: 100%;background: #FFFFFF;box-sizing: border-box;}
				.content-item>ul>li{width: 2.1rem;height: 2.96rem;text-align: center;float: left;margin-right: 0.24rem;}
				.content-item>ul>li img{width: 2.1rem;}
				.content-item>ul>li p{color: #666666;line-height: 0.82rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
				
				
</style>
