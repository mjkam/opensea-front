<template>
  <div class="w-[220px] absolute shadow-search rounded-b-[10px] bg-white duration-[300ms] transition-all">
    <div class="flex flex-col">
      <MenuDropdownItem 
        v-for="(d, idx) in menus" :key="idx"
        :icon="d.icon" :href="d.href" :last="menus.length -1 == idx">
          {{ d.name }}
        </MenuDropdownItem>
        
    </div>
  </div>
</template>

<script>
import MenuDropdownItem from './MenuDropdownItem.vue';
export default {
  props: ['menus'],
  components: { MenuDropdownItem }
}
</script>

<style>

</style>