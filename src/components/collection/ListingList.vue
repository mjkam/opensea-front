<template>
  <div class="rounded-[10px] border-[1px]">
    <div class="flex items-center justify-between p-[20px] border-b-[1px]">
      <div class="flex items-center">
        <i class="material-icons text-[24px] mr-[10px] text-[#04111D]">local_offer</i>
        <span class="">Listings</span>
      </div>
      <i class="material-icons">expand_less</i>
    </div>
    <div class="test">
      <ul class="contents">
        <div class="sticky top-0 py-[4px] pr-[8px] pl-[16px] border-b-[1px]">Price</div>
        <div class="sticky top-0 py-[4px] px-[8px] border-b-[1px]">USD Price</div>
        <div class="sticky top-0 py-[4px] px-[8px] border-b-[1px]">From</div>
        <div class="sticky top-0 py-[4px] pr-[16px] pl-[4px] border-b-[1px]"></div>
      </ul>
      <ListingItem />
    </div>
  </div>
</template>

<script>
import ListingItem from './ListingItem.vue';
export default {
  components: { ListingItem }
}
</script>

<style scoped>
.test {
  display: grid;
  grid-template-columns: minmax(auto, auto) minmax(auto, auto) minmax(auto, 160px) minmax(auto, auto);
  max-height: 300px;
  overflow-y: auto;

}
</style>