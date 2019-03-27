import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberList: [1,2,3]
  },
  getters: {
    numberList: state => {
      return state.numberList;
    },
    total: state => {
      return state.numberList.reduce((sum, x) => sum + x, 0)
    }
  },
  mutations: {
    setNewNumberList(state, newList) {
      state.numberList = newList
    }
  },
  actions: {
    async getNewNumberList({commit}) {
      const newNumberList = await delay1s()
      await setNewNumberList(commit, newNumberList)
    }
  }
})

const delay1s = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('1s');
      resolve([5,6,7])
    }, 1000)
  })
}

const setNewNumberList = (commit, newNumberList) => {
  commit('setNewNumberList', newNumberList)
}