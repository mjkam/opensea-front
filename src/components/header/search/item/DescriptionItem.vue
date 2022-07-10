<template>
  <div 
    class="p-[16px] text-[#707A83]" 
    :class="itemClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['isStatement'],
  computed: {
    itemClass() {
      return this.isStatement ?
        ['text-[14px]', 'font-[400]'] :
        ['text-[12px]', 'font-[600]', 'border-b-[1px]']
    }
  }
}
</script>

<style>

</style>