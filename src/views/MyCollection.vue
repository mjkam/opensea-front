<template>
  <div class="px-[70px] mt-[24px]">
    <div class="mt-[33px] mb-[16px] text-[#04111D] text-[40px] font-[600]">
      My Collections
    </div>
    <div class="flex mt-[18px]">
      <span class="text-[#353840]">Create, curate, and manage collections of unique NFTs to share and sell.</span>
      <i class="ml-[3px] material-icons-outlined text-[24px] text-[#707A83]">info</i>
    </div>
    <div class="flex mt-[24px] mb-[20px]">
      <a class="py-[17px] px-[24px] mr-[15px] rounded-[12px] border-[2px] border-[#2081e2] bg-[#2081e2] text-white font-[600]">Create a collection</a>
      <div class="relative">
        <button class="p-[17px] border-[2px] border-[#e5e8eb] rounded-[12px] flex items-center">
          <i class="material-icons">more_vert</i>
        </button>
        <div class="absolute rounded-[10px] bg-white z-[999] w-[330px] dropdown-shadow mt-[10px]">
          <a class="flex items-center p-[16px] hover:bg-[#fbfdff] dropdown-item rounded-[10px]">
            <div class="flex items-center mr-[16px] justify-center border-[1px] rounded-full border-[#e5e8eb] ">
              <i class="material-icons text-[22px]">code</i>
            </div>
            <span class="text-[#04111D] text-[14px] font-[600]">Import an existing smart contract</span>
          </a>
        </div>
      </div>
      
    </div>
    <div class="grid grid-cols-3 gap-[30px] py-[40px]">
      <CollectionCardV2 />
    </div>
  </div>
</template>

<script>
import CollectionCardV2 from '../components/CollectionCard.vue';
export default {
    components: { CollectionCardV2 }
}
</script>

<style scoped>
  .dropdown-item {
    transition: all 0.2s ease 0s;
  }

  .dropdown-item:hover {
    box-shadow:  0px 0px 8px 0px rgb(4 17 29 / 25%);
  }
  .dropdown-shadow {
    box-shadow:  0px 4px 16px rgb(0 0 0 / 16%);
  }
</style>