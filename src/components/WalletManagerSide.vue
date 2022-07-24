<template>
  <div
    class="transition-transform duration-[300ms]  fixed right-0 bottom-0 w-[420px] h-[calc((100%-0px)-72px)] bg-[#ffffff] z-[90] box-border border-[1px] border-[#e5e8eb]"
    :class="toggleClass">
    <div class="p-[20px] border-b-[1px] border-[#e5e8eb]">
      <div class="flex justify-between">
        <div class="flex justify-between items-center">
          <div class="flex items-center mr-[8px] text-[#353840]">
            <div v-if="walletAddress != ''" class="w-[26px] h-[26px]">
              <img class="w-[26px] h-[26px]" :src="profileImgUrl" />
            </div>
            <i v-if="walletAddress == ''" class="material-icons text-[30px]">account_circle</i>
          </div>
          <div class="flex items-center text-[#04111D] font-[600]">
            My Wallet
          </div>
        </div>
        <div v-if="walletAddress != ''" class="text-[#707A83] text-[14px] font-[600] flex items-center ">
          {{ shortWalletAddress }}
        </div>
      </div>
    </div>
    <div class="p-[20px]">
      <div v-if="walletAddress == ''">
          <div>Connect with one of our available <span class="text-[#2082E2] font-[600]">wallet</span> providers or create a new one.</div>
          <div @click="handleConnectWalletBtnClickEvent" class="mt-[24px]">
            <button class="w-full box-border rounded-[10px] border-2 p-[16px]">
              <div class="flex">
                <div class="flex items-center mr-[16px]">
                  <img class="w-[24px] h-[24px]" src="https://opensea.io/static/images/logos/metamask-fox.svg" />
                </div>
                <div class="flex items-center text-[#04111D] font-[700] text-[14px]">
                  MetaMask
                </div>
              </div>
            </button>
          </div>
      </div>

      <div v-if="walletAddress != ''" class="p-[16px] rounded-[10px] border-[1px] flex items-center justify-between">
        <div class="flex items-center">
          <div>
            <img class="w-[24px] h-[24px]" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
          </div>
          <div class="ml-[15px] flex flex-col">
            <div class="text-[#04111D] text-[14px] font-[600]">ETH</div>
            <div class="text-[#707A83] text-[14px]">Ethereum</div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex flex-col">
            <div class="text-[#04111D] text-[14px] font-[600] text-right">0.0002</div>
            <div class="text-[#707A83] text-[14px] text-right">{{ "$" + ethBalance }} USD</div>
          </div>
          <div class="flex items-center ml-[10px]">
            <i class="material-icons">more_vert</i>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {CONNECT_WALLET, SET_BALANCE} from '../store/mutation-types';

export default {
  data() {
    return  {
      timer: 0,
    }
  },
  methods: {
    ...mapActions({
      'connectWallet': `wallet/${CONNECT_WALLET}`,
      'setBalance': `wallet/${SET_BALANCE}`,
    }),
    handleConnectWalletBtnClickEvent() {
      this.connectWallet();
    }
  },
  computed: {
    ...mapGetters({
      'walletOpened': 'wallet/walletOpened',
      'provider': 'wallet/provider',
      'walletAddress': 'wallet/walletAddress',
      'profileImgUrl': 'wallet/profileImgUrl',
      'ethBalance': 'wallet/ethBalance',
    }),
    toggleClass() {
      return {
        'translate-x-full': !this.walletOpened,
      }
    },
    shortWalletAddress() {
      let len = this.walletAddress.length;
      return this.walletAddress.slice(0, 7) + '...' + this.walletAddress.slice(len - 4, len);
    }
  },
}
</script>

<style>

</style>