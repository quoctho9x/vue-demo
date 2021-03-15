/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue'
import router from '@/router'
// import store from '@/store';
import * as types from './mutation-types';

export const increment = ({ commit }) => {
  commit(types.UPDATE_COUNT);
};

export const change = ({ commit }, flavor) => {
  commit(types.UPDATE_FLAVOR, flavor);
};

// export const check = ({ commit }) => {
//   commit(types.CHECK);
// };
//
// export const register = ({ commit }) => {
//   /*
//    * Normally you would use a proxy to register the user:
//    *
//    * new Proxy()
//    *  .register(payload)
//    *  .then((response) => {
//    *    commit(types.REGISTER, response);
//    *  })
//    *  .catch(() => {
//    *    console.log('Request failed...');
//    *  });
//    */
//   commit(types.LOGIN, 'RandomGeneratedToken');
//   Vue.router.push({
//     name: 'home.index',
//   });
// };
//
export const login = ({ commit }) => {
  /*
   * Normally you would use a proxy to log the user in:
   *
   * new Proxy()
   *  .login(payload)
   *  .then((response) => {
   *    commit(types.LOGIN, response);
   *    store.dispatch('account/find');
   *    Vue.router.push({
   *      name: 'home.index',
   *    });
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  // commit(types.LOGIN, 'RandomGeneratedToken');
  // store.dispatch('account/find');
  if(commit){
    console.log('Vue:',Vue);
    router.push({ path: '/' })
  }

};

// export const logout = ({ commit }) => {
//   commit(types.LOGOUT);
//   Vue.router.push({
//     name: 'login.index',
//   });
// };

export default {
  increment,
  change,
  // check,
  // register,
  login,
  // logout,
};