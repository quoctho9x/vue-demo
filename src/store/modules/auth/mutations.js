/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */


import {
  UPDATE_COUNT,
  UPDATE_FLAVOR,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [UPDATE_COUNT](state) {
    state.count++ ;
  },
  [UPDATE_FLAVOR](state, flavor) {
    console.log('UPDATE_FLAVOR:', flavor);
    state.flavor = flavor ;
  },
};