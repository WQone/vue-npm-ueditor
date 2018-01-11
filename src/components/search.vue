<template>
 			<div id="search">
				<div class="hearder">
					<div class="search_top">
						<div class="search_top_back">
							<router-link to="/home">
							<img src="http://wmall.wochu.cn/h5/classify/img/back.png?v=aaf1d1f8b9"/>
							</router-link>
						</div>
						<div class="search_top_ctl">
							<img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png?v=c3eb481ff8"/>
							<input />
						</div>
						<div class="search_top_btn">搜索</div>
						
					</div>
					
				</div>
				
				<div class="wrapper">

					<div class="search_content">
						<div class="hot_search">
							<p>热门搜索</p>
							<ul>
								<li>牛排</li>
								<li>豆腐</li>
								<li>火锅</li>
								<li>羊肉</li>
								<li>火锅</li>
								<li>特供蔬菜</li>
							</ul>
						</div>
						<div class="search_history">
							<p>搜索历史</p>
							<ul></ul>
							<div class="clear_history">清空搜索历史</div>
						</div>
						
						
						
					</div>

			
 				</div>

			</div>
</template>

<script>
export default {
}
</script>

<style scoped>

			#search{background: white;}
			.hearder{border-bottom: 1px solid #e5e5e5;background: white;}
			.search_top{width:9.46rem;height: 0.77rem;margin: 0.2rem 0.26rem;float: left;}
			.search_top_back{width: 1.06rem;height: 100%;float: left;}
			.search_top_back>img{height: 100%;}
			
			.search_top_ctl{width: 7.33rem;background: #f1f2f6;border-radius: 0.5rem;float: left;height: 100%;}
			.search_top_ctl>img{height: 100%;}
			.search_top_ctl>input{width: 6.17rem;background: #f1f2f6;height: 100%;font-size: 0.4rem;}
			
			.search_top_btn{width: 1.06rem;    float: right;text-align: right;color: #333;font-size: 0.4rem;line-height: .77rem;}
			
			.wrapper{padding: 0 0.26rem;}
			.search_content{padding-bottom: 0.53rem;font-size: 0.4rem;}
			.search_content p{margin-top: 0.26rem;}
			.hot_search>ul{background: #f4f5f7;color: black;}
			.hot_search>ul>li{background: #fff;width: auto;line-height: 0.7rem;margin:0.26rem;padding: 0.057rem 0.26rem; float: left;
							font-size: 0.36rem;color: #666666;}
			
			.clear_history{color: #999999;text-align: center;width: 100%;margin: 0.26rem 0 0.53rem;}
			
</style>
