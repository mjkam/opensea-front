<template>
  <!-- <div 
    class="fixed inset-0 z-[80] transition-opacity duration-[300ms] bg-[#00000026]" 
    :class="{'opacity-[1]' : walletMenuOpened , 'opacity-0' : !walletMenuOpened}">
  </div> -->
  <div 
    class="fixed inset-0 z-[80] transition-opacity duration-[300ms] bg-[#00000026]" 
    @click="toggleWalletMenu"
    :class="screenClass">
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  methods: {
  },
  computed: {
    ...mapGetters({
      'walletOpened': 'wallet/walletOpened',
    }),
    screenClass() {
      return {
        'opacity-[1]' : this.walletOpened , 
        'opacity-0' : !this.walletOpened ,
        'h-[0px]' : !this.walletOpened,
      }
    }
  }
}
</script>

<style>

</style>