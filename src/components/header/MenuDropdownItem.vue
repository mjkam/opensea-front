<template>
  <div>
    <a v-if="icon != 'logout'" :href="href" class="item flex text-[#04111D] font-[600] p-[16px]" :class="!last ? 'border-b-[1px]' : 'rounded-b-[10px]'">
      <div v-if="icon" class="mr-[16px] flex items-center justify-center"><i class="material-icons text-[#353840]">{{ icon }}</i></div>
      <div class="text-[#04111D] font-[600]"><slot></slot></div>
    </a>
    <button @click="handleLogOutBtnClickEvent" v-if="icon == 'logout'" :href="href" class="w-full item flex text-[#04111D] font-[600] p-[16px]" :class="!last ? 'border-b-[1px]' : 'rounded-b-[10px]'">
      <div v-if="icon" class="mr-[16px] flex items-center justify-center"><i class="material-icons text-[#353840]">{{ icon }}</i></div>
      <div class="text-[#04111D] font-[600]"><slot></slot></div>
    </button>
  </div>
  
</template>

<script>
import { mapMutations } from 'vuex';
import {LOG_OUT} from '../../store/mutation-types';

export default {
  props: ['icon', 'href', 'last'],
  methods: {
    ...mapMutations({
      'logOut': `wallet/${LOG_OUT}`,
    }),
    handleLogOutBtnClickEvent: function() {
      this.$cookies.set("logged_out", true, '1000Y', "/", null, true);
      this.logOut();
    }
  }
}
</script>

<style scoped>
.item:hover {
  transition: all 0.2s ease 0s;
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  background-color: rgb(251, 253, 255);
}

</style>