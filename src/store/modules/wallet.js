import {TOGGLE_WALLET_MENU, CLOSE_WALLET_MENU, SET_PROVIDER, SET_PROFILE, SET_WALLET_ADDR, SET_BALANCE, LOG_OUT, CONNECT_WALLET} from '../mutation-types';
import { ethers } from "ethers";
import axios from 'axios';
import {BASE_URL} from '../../constant/index';

export default {
  namespaced: true,
  state: {
    walletOpened: false,
    provider: null,
    walletAddress: '',
    ethBalance: 0,
    ethPrice: 0,
    profileImgUrl: '',
    userId: null,
  },

  mutations: {
    [TOGGLE_WALLET_MENU]: state => state.walletOpened = !state.walletOpened,
    [CLOSE_WALLET_MENU]: state => state.walletOpened = false,
    [SET_PROVIDER]: (state, payload) => state.provider = payload.provider,
    [SET_PROFILE]: (state, payload) => {
      state.profileImgUrl = payload.profileImgUrl;
      state.userId = payload.userId;
    },
    [SET_WALLET_ADDR]: (state, payload) => {
      state.walletAddress = payload.account;
    },
    [SET_BALANCE]: (state, payload) => {
      state.ethBalance = payload.ethBalance;
      state.ethPrice = payload.ethPrice;
    },
    [LOG_OUT]: (state) => {
      state.walletAddress = '';
      state.ethBalance = 0;
      state.ethPrice = 0;
      state.user = {};
    },
  },
  actions: {
    [SET_PROFILE]: ({commit, state}) => {
      state.provider.listAccounts().then(function(accounts) {
        let account = accounts[0];
        if(account != null) {
          axios.get(BASE_URL + `/profile`).then(function(d) {
            commit(SET_PROFILE, d.data);
          });
          commit(SET_WALLET_ADDR, {account});
        }
      });
    },
    [SET_BALANCE]: ({commit}) => {
      axios.get(BASE_URL + '/balance').then(function(d) {
        commit(SET_BALANCE, d.data);
      });
    },
    [CONNECT_WALLET]: ({commit, state, dispatch}) => {
      state.provider.send("eth_requestAccounts", []).then(function(accounts) {
        let account = accounts[0];
        dispatch(SET_PROFILE);
      });
    }
  },
  getters: {
    walletOpened: state => state.walletOpened,
    provider: state => state.provider,
    profileImgUrl: state => state.profileImgUrl,
    walletAddress: state => state.walletAddress,
    ethBalance: state => state.ethBalance,
    ethPrice: state => state.ethPrice,
  }
};