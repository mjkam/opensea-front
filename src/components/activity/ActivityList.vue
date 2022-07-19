<template>
  <div>
    <div class="p-[16px] h-[89px] flex items-center justify-between text-[#04111D] font-[600] border-b-[1px]">
      <div class="w-[190px] h-full flex items-center">
      </div>
      <div class="w-[300px] h-full flex items-center">
        <span>Item</span>
      </div>
      <div class="w-[75px] h-full flex items-center justify-center">
        <span>Price</span>
      </div>
      <div class="w-[75px] h-full flex items-center justify-center">
        <span>Quantity</span>
      </div>
      <div class="w-[125px] h-full flex items-center justify-center">
        <span>From</span>
      </div>
      <div class="w-[125px] h-full flex items-center justify-center">
        <span>To</span>
      </div>
      <div class="w-[160px] h-full flex items-center justify-center">
        <span>Time</span>
      </div>
    </div>
    <div>
      <ActivityItem />
      <ActivityItem />
      <ActivityItem />
      <ActivityItem />
      <ActivityItem />
    </div>
  </div>
</template>

<script>
import ActivityItem from './ActivityItem.vue';
export default {
    components: { ActivityItem }
}
</script>

<style>

</style>