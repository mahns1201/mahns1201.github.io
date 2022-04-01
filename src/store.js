import { createStore } from 'vuex';

export default createStore({
  state: {
    tab: 'history',
  },

  mutations: {
    changeTab(state, tab) {
      state.tab = tab;
    },
  },
});
