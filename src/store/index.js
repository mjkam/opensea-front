import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state() {
    return {
      walletMenuOpened: false,
      collections: [
        {
          'imgUrl': "https://lh3.googleusercontent.com/vfYB4RarIqixy2-wyfP4lIdK6fsOT8uNrmKxvYCJdjdRwAMj2ZjC2zTSxL-YKky0s-4Pb6eML7ze3Ouj54HrpUlfSWx52xF_ZK2TYw=h200",
          'title': "MyTitle",
          'creator': "i'm creator"
        }
      ],
      searchResults: [],
    }
  },
  mutations: {
    toggleWalletMenu(state) {
      state.walletMenuOpened = !state.walletMenuOpened;
    }
  },
  actions: {
  },
  getters: {
    getWalletMenuOpened(state) {
      return state.walletMenuOpened;
    }
  }
});

export default store;