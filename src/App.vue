<template>
  <div>
    <Header @click="closeWalletMenu" />
    <WalletManagerSide />
    <ScreenBlock @click="closeWalletMenu" />
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Header from './components/header/Header.vue';
import ScreenBlock from './components/ScreenBlock.vue';
import WalletManagerSide from './components/WalletManagerSide.vue';

import {CLOSE_WALLET_MENU} from './store/mutation-types';

export default {
  methods: {
    ...mapMutations({
      'closeWalletMenu': `wallet/${CLOSE_WALLET_MENU}`,
    }),
  },
  components: { Header, ScreenBlock, WalletManagerSide }
}
</script>

<style>

</style>