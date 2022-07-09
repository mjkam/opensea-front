<template>
  <div class="text-[#707A83] font-[500] text-[12px] p-[4px] border-b-[1px] hover:bg-[#fbfdff] hover:shadow-search-item transition-all duration-[200ms] ease-in delay-[0ms]">
    <a href="/">
      <div class="flex items-center">
        <div class="flex items-center justify-center overflow-hidden rounded-[10px] mx-[12px] my-[8px]">
          <img class="w-[32px] h-[32px]" :src="imgUrl"/>
        </div>
        <div class="flex flex-col">
          <div class="text-[#04111D] text-[14px] font-[600]">{{ name }}</div>
          <div>{{ count }} items</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'name', 'count']
}
</script>

<style>

</style>