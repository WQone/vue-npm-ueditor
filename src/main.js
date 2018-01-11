// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex' 
import Resource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

Vue.use(Resource)
Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
  loading: 'http://wmall.wochu.cn/h5/img/wc-logo.png',
  try: 3 // default 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
	Resource, 
	VueAwesomeSwiper,
  template: '<App/>',
  components: { App }
})
