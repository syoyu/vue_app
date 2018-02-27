import Vue from 'vue';
import Vuex from 'vuex';
import {actions} from './actions.js';
import {getters} from './getters.js';
import { state, mutations } from './mutations.js';

Vue.use(Vuex);

export default new Vuex.Store({
  actions:actions,
  getters:getters,
  state:state,
  mutations:mutations
});
