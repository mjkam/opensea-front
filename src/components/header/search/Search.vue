<template>
  <div class="w-full flex items-center max-w-[768px]">
    <div class="w-full relative">
      <div :class="borderColor" class="w-full flex items-center justify-between h-[48px] pl-[8px] border-[2px] rounded-[10px]">
        <i class="material-icons text-[#707A83] mr-[8px]">search</i>
        <input @blur="onBlur" @focus="onFocus" type="text" v-model="searchKeyword" @keyup="handleSearchInputEvent"  class="w-full h-full p-[8px] bg-transparent focus:outline-none" placeholder="Search items, collections, and accounts"/>
      </div>
      <div v-if="isSearching" class="absolute z-[999] w-full shadow-search bg-white rounded-[10px]">
        <LoadingItem v-if="loading"/>
        <DescriptionItem v-if="noItems">No items found</DescriptionItem>
        <Items
          :collections="this.collections"
          :accounts="this.accounts"/>
        <DescriptionItem v-if="loading || existItems">Press Enter to search all items</DescriptionItem>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingItem from './item/LoadingItem.vue';
import DescriptionItem from './item/DescriptionItem.vue';
import { BASE_URL } from "../../../constant";
import axios from "axios";
import Items from './Items.vue';

export default {
  data() {
    return {
      isOnFocus: false,
      timer: 0,
      searchKeyword: '',
      collections: [],
      accounts: [],
      loading: false,
      noItems: false,
      existItems: false,
    }
  },
  components: { LoadingItem, DescriptionItem, Items },
  methods: {
    onFocus: function() {
      this.isOnFocus = true;
    },
    onBlur: function() {
      this.isOnFocus = false;
    },
    handleSearchInputEvent: function() {
      if(this.searchKeyword.length < 3) return;

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.accounts = [];
        this.collections = [];
        this.loading = true;
        this.noItems = false;
        this.existItems = false;
        this.getSearchResults();
      }, 300);
    },
    getSearchResults: async function() {
      let result = await axios.get(BASE_URL + "/search?keyword=" + this.searchKeyword);
      this.accounts = result.data.collections;
      this.collections = result.data.accounts;
      this.loading = false;
      this.noItems = this.collections.length == 0 && this.accounts.length == 0;
      this.existItems = true;
    },
  },
  computed: {
    isSearching() {
      return this.searchKeyword.length >= 3 && this.isOnFocus;
    },
    
    isLoading() {

    },
    borderColor() {
      return this.isOnFocus ? 'border-[#8a939b]' : 'border-[#e5e8eb]'
    }
  }
}
</script>

<style>

</style>