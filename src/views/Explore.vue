<template>
  <div>
    <div class="flex justify-center mt-[40px] border-b-[1px]">
      <div class="my-[26px] text-[#04111D] text-[40px] font-[600]">
        Explore Collections
      </div>
    </div>
    <div class="card-grid">
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      
    </div>
  </div>
  
</template>

<script>
import CollectionCard from '../components/CollectionCard.vue';
export default {
    components: { CollectionCard }
}
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
}
</style>