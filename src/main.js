import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import plugins
import './plugins/bootstrap';
import './plugins/font-awesome';
// import { router } from './plugins/vue-router';
// import './plugins/vuex-router-sync';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
