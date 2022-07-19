<template>
  <div>
    <div class="h-[320px]">
      <img class="w-full h-[320px] object-cover" src="https://lh3.googleusercontent.com/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA=h600" />
    </div>
    <div>
      <div class="flex px-[32px] mt-[-150px]">
        <div class="border-box border-[6px] border-white rounded-[16px] overflow-hidden profile-shadow">
          <img class="w-[168px] h-[168px]" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s168" />
        </div>
      </div>

      <div class="px-[32px]">

        <div class="text-[30px] text-[#04111D] font-[600] my-[20px]">
          CryptoPunks
        </div>

        <div class="w-2/3"> 
          CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
        </div>

        <div class="flex justify-items-start gap-[48px] mt-[20px]">
          <div class="flex flex-col">
            <span class="text-[#04111D] font-[600] text-[20px]">10.0K</span>
            <span class="text-[#707A83] mt-[-4px]">items</span>
          </div>
          <div class="flex flex-col">
            <span class="text-[#04111D] font-[600] text-[20px]">3.6K</span>
            <span class="text-[#707A83] mt-[-4px]">owner</span>
          </div>
          <div class="flex flex-col">
            <div class="text-[#04111D] font-[600] text-[20px] flex items-center">
              <img class="w-[16px] h-[16px]" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
              <span>968.8K</span>
            </div>
            
            <span class="text-[#707A83] mt-[-4px]">total volume</span>
          </div>
        </div>

        <div class="mt-[30px] flex gap-[48px] justify-items-start">
          <div class="text-[#04111D] font-[600] pb-[10px] border-b-[#04111d] border-b-[2px]">
            <a href="/">Items</a>
          </div>
          <div class="text-[#707A83] font-[600]">Activity</div>
        </div>

        <div class="custom-grid">
          <CollectionItemCard />
        </div>
        <div>
          <ActivityList />
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import CollectionItemCard from '../components/collection/CollectionItemCard.vue';
import ActivityList from '../components/activity/ActivityList.vue';
export default {
    components: { CollectionItemCard, ActivityList }
}
</script>

<style scoped>


  .item {
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 15px;
    transition: box-shadow 0.25s ease-in-out 0s;
  }
  .custom-grid {
    display: grid;
    grid-gap: 20px;

    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-template-rows: 1fr;
    grid-gap: 20px;
  }

  .profile-shadow {
    box-shadow: rgb(0 0 0 / 8%) 0px 5px 20px 0px;
  }
</style>