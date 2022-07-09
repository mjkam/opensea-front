<template>
  <div 
    class="transition-transform duration-[300ms]  fixed right-0 bottom-0 w-[420px] h-[calc((100%-0px)-72px)] bg-[#ffffff] z-[90] box-border border-[1px] border-[#e5e8eb]"
    :class="toggleClass"
  >
    <div class="p-[20px] border-b-[1px] border-[#e5e8eb]">
      <div class="flex">
        <div class="flex items-center mr-[8px] text-[#353840]">
          <i class="material-icons text-[30px]">account_circle</i>
        </div>
        <div class="flex items-center text-[#04111D] font-[600]">
          My Wallet
        </div>
      </div>
    </div>
    <div class="p-[20px]">
      <div>Connect with one of our available <span class="text-[#2082E2] font-[600]">wallet</span> providers or create a new one.</div>
      <div class="mt-[24px]">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getWalletMenuOpened"]),
    toggleClass() {
      return {
        'translate-x-full': !this.getWalletMenuOpened,
      }
    }
  },
}
</script>

<style>

</style>