<template>
  <div>
    <Header />
    <WalletManagerSide />
    <ScreenBlock />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ScreenBlock from './components/ScreenBlock.vue';
import WalletManagerSide from './components/WalletManagerSide.vue';

export default {
    components: { Header, ScreenBlock, WalletManagerSide }
}
</script>

<style>

</style>