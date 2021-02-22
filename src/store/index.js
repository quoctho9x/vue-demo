import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import auth from './modules/auth';

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
  reducer: (state) => ({auth: state.auth}),
});

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [vuexPersist.plugin]
})
