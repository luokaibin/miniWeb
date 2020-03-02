import Vue from 'vue';
import Vuex from 'vuex';
import { menuRouter } from './router';

Vue.use(Vuex);

const state = {
  user: {
    username: '胖大人本胖',
  },
  menuRouter,
};
const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};
const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
