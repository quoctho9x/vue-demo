import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
  // storage: window.sessionStorage,
  // reducer: (state) => ({count: state.count, flavor: state.flavor}),
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    change(state, flavor) {
      console.log('change: ', state, flavor);
      state.flavor = flavor
    }
  },
  actions: {
    increment (context){
      console.log('day la actions',context);
      context.state.count++;
      // context.commit('increment')
    }
  },
  modules: {
  },

  plugins: [vuexPersist.plugin]
})
