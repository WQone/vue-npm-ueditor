import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/components/cart'
import Mine from '@/components/mine'
import Home from '@/components/home'
import Market from '@/components/market'
import Search from '@/components/search'
import HomeInfo from '@/components/homeInfo'
import MineOrder from '@/components/mineOrder'
import Order_All from '@/components/order_All'
import Order_notpay from '@/components/order_notpay'
import Order_notcomment from '@/components/order-notcomment'
import Order_notreceive from '@/components/order-notreceive'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
 	{
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/homeInfo/:id',
      name: 'homeInfo',
      component: HomeInfo
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
     {
      path: '/mineOrder',
      name: 'mineOrder',
      component: MineOrder,
      children:[
					{
						path:'order_All',
						component:Order_All
					},
					{
						path:'order_notpay',
						component:Order_notpay
					},
					{
						path:'order-notcomment',
						component:Order_notcomment
					},
					{
						path:'order-notreceive',
						component:Order_notreceive
					}
				]
    },
     {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
