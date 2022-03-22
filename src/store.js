import { createStore } from 'vuex';

export default createStore({
  state: {
    tab: 'skills',
  },

  mutations: {
    changeTab(state, tab) {
      state.tab = tab;
    },
  },
});
