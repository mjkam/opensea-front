<template>
  <div class="flex flex-col">
    <div class="flex mt-40px font-[600] justify-center border-b-[1px]">
      <h1 class="text-[#04111D] text-[40px] my-[26px]">Explore Collections</h1>
    </div>
    <div class="grid grid-cols-3 gap-[30px] py-[40px] px-[52px]">
      <CollectionCard />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CollectionCard from "../components/CollectionCard.vue";


export default {
    name: "Home",
    components: { CollectionCard },
    computed: {
      ...mapState(["collections"]),
    }
}
</script>

<style>

</style>