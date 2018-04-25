import Vue from 'vue'
import Router from 'vue-router'
import Ueditor from '@/views'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ueditor',
      component: Ueditor
    }
  ]
})
