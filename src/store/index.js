import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as types from './mutation-types';

const savedLists = localStorage.getItem('pizza-lists');

const state = {
  lists: savedLists ? JSON.parse(savedLists) : [
    {
      title: 'Order\'s Received',
      cards: [
        { body: 'Joey', number: '15', total: '$50' },
        { body: 'Ross', number: '6', total:'$30' },
      ]
    },
    {
      title: 'Preparing',
      cards: [
        { body: 'Chandler', number: '10', total: '$45' },
        { bpdy: 'Rachel', number: '3', total: '$15'}
      ]
    },
    {
      title: 'Ready to Serve',
      cards: [
        {body: 'Monica', number:"2", total: '$10'},
        {body: 'Phebe', number: '4', total: '$20'}
      ]
    }
  ]
};

const mutations = {
  [types.MOVE_CARD_TO_LIST](state, { from, to }) {
    const targetCard = state.lists[from.listIndex].cards[from.cardIndex];
    state.lists[from.listIndex].cards.splice(from.cardIndex, 1);
    if (to.cardIndex !== null) {
      state.lists[to.listIndex].cards.splice(to.cardIndex, 0, targetCard);
    } else {
      state.lists[to.listIndex].cards.push(targetCard);
    }
  },
};

const getters = {
  listsCount: (state) => state.lists.length
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
});

store.subscribe((mutation, { lists }) => {
  localStorage.setItem('pizza-lists', JSON.stringify(lists));
});

export default store;
