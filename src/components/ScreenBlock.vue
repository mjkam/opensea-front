<template>
  <!-- <div 
    class="fixed inset-0 z-[80] transition-opacity duration-[300ms] bg-[#00000026]" 
    :class="{'opacity-[1]' : walletMenuOpened , 'opacity-0' : !walletMenuOpened}">
  </div> -->
  <div 
    class="fixed inset-0 z-[80] transition-opacity duration-[300ms] bg-[#00000026]" 
    :class="screenClass">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['walletMenuOpened']),
    screenClass() {
      return {
        'opacity-[1]' : this.walletMenuOpened , 
        'opacity-0' : !this.walletMenuOpened ,
        'h-[0px]' : !this.walletMenuOpened,
      }
    }
  }
}
</script>

<style>

</style>