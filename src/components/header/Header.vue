<template>
  <div class="sticky top-0 h-[72px] z-[120] flex justify-between shadow-header bg-white">
    <Logo :class="'ml-[16px] mr-[24px]'"/>
    <Search />
    <Menu />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Loading from "../Loading.vue";
import LoadingItem from "./search/item/LoadingItem.vue";
import DescriptionItem from "./search/item/DescriptionItem.vue";
import CollectionItem from "./search/item/CollectionItem.vue";
import AccountItem from "./search/item/AccountItem.vue";
import SearchResult from "./search/Items.vue";
import Items from "./search/Items.vue";
import Logo from "./Logo.vue";
import Search from "./search/Search.vue";
import Menu from "./Menu.vue";
import { ethers } from "ethers";

import {SET_PROVIDER, SET_PROFILE} from '../../store/mutation-types';

export default {
  created() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    this.setProvider({provider});
  },
  mounted() {
    if(this.$cookies.isKey('logged_out')) {
      return;
    }
    this.setProfile();
  },
  computed: {
    ...mapGetters({
      'provider': 'wallet/provider',
    }),
  },
  methods: {
    ...mapMutations({
      "setProvider": `wallet/${SET_PROVIDER}`,
    }),
    ...mapActions({
      'setProfile': `wallet/${SET_PROFILE}`,
    }),
  },
  components: { Loading, LoadingItem, DescriptionItem, CollectionItem, AccountItem, SearchResult, Items, Logo, Search, Menu }
}
</script>

<style>

</style>