import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'Wise Wrong'
  },
  mutations: {
    init (state, data) {
      state.author = data
    }
  },
  getters: {
    getInit (state, getters) {
      return `${state.author}1111555`
    }
  }
})

export default store
