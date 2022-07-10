<template>
  <div class="p-[4px] text-[#04111D] font-[600] text-[14px] border-b-[1px] hover:bg-[#fbfdff] hover:shadow-search-item transition-all duration-[200ms] ease-in delay-[0ms]">
    <a href="/">
      <div class="flex items-center">
        <div class="my-[8px] mx-[12px] w-[32px] h-[32px] rounded-full overflow-hidden">
          <img class="w-[32px] h-[32px]" :src="imgUrl" />
        </div>
        <div>
          {{ name }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'name']
}
</script>

<style>

</style>