import Vue from 'vue'
import App from 'vuex'

Vue.use(App)

	
const state = {
	
	products:[]

}

const mutations = {
	ADD_STORE(state,goodsItem){
		var product = {
			name:goodsItem.shopName,
			price:goodsItem.price,
			img:goodsItem.shopImg,
			shopId:goodsItem.shopId,
			active:goodsItem.active,
			nowActive:goodsItem.nowActive,			
			count:1
		}
		var products = state.products
		if (products.length==0){
			products.push(product)
			return
		}
		for (var i=0; i<products.length; i++){
			if (products[i].name == product.name){
				products[i].count++
				return
			}
		}
		products.push(product)
		
	},

	DOWN(state,goodsItem){
		if (goodsItem.count==1){
			return
		}
		var products = state.products
		for (var i=0; i<products.length; i++){
			if (products[i].shopId == goodsItem.shopId){
				products[i].count--
			}
		}	
	},

	ADD(state,goodsItem){
		var products = state.products
		for (var i=0; i<products.length; i++){
			if (products[i].shopId == goodsItem.shopId){
				products[i].count++
			}
		}
	}
	
}

const getters = {
	
	sum(state){
		var products = state.products
		var result = 0
		for (var i=0; i<products.length; i++){
			result += Number(products[i].count)
		}
		return result
	},
	total(state){
		var products = state.products
		var result = 0
		for (var i=0; i<products.length; i++){
			result += products[i].count*products[i].price
		}
		return result
	},
	
	products(state){
		return state.products
	}
	
}

export default new App.Store({
	state,
	mutations,
	getters
	
})