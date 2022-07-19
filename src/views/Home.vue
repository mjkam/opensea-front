<template>
  <div class="relative">
    <div class="absolute top-0 left-0 h-[586px] w-full home-background">
    </div>
    <div class="w-[1280px] m-auto flex">
      <div class="w-1/2 pt-[110px] pr-[20px] pb-[44px] pl-[30px]">
        <h1 class="text-[48px] font-[600] mr[10px] text-[#04111D] leading-tight z-[1000]">
          Discover, collect, and sell extraordinary NFTs
        </h1>
        <div class="w-[400px] mt-[20px]">
          <span class="text-[24px] text-[#353840] w-[400px]">
            OpenSea is the world's first and largest NFT marketplace
          </span>
        </div>
        <div class="mt-[40px] flex">
          <div class="mr-[10px]">
            <a class="w-[168px] flex items-center py-[17px] px-[24px] bg-[#2081E2] border-[2px] border-[#2081E2] text-white justify-center rounded-[10px] font-[600]">
              Explore
            </a>
          </div>
          <div>
            <a class="w-[168px] flex items-center py-[17px] px-[24px] border-[2px] border-[#e5e8eb] text-[#2081E2] justify-center rounded-[10px] font-[600]">
              Create
            </a>
          </div>
        </div>
        
      </div>
      <div class="w-1/2 flex flex-col items-end py-[60px]">
        <div class="flex flex-col rounded-[10px] overflow-hidden image-shadow mr-[30px]">
          <img class="w-[480px]" src="https://openseauserdata.com/files/zoonies_featured_image_4Z8jsfR.jpg" />
          <div class="flex items-center p-[16px]">
            <div class="w-[38px] h-[38px] rounded-full overflow-hidden border-[2px] border-[#e5e8eb] mr-[10px]">
              <img class="w-[38px] h-[38px]" src="https://lh3.googleusercontent.com/rycHW_oVgsLQelfu7KJKgMu9RpPm2tX17b8PaEXmMQUQvnRDq8J63iDhsfFjM3f3qI7ZBmM0UOrIBk2xF_EcKVLYm_YB--15yO4cpg=s76" />
            </div>
            <div class="flex flex-col justify-center bg-white">
              <span class="text-[14px] text-[#04111D] font-[600]">Zoonies</span>
              <span class="text-[12px]">by <span class="text-[#04111D] text-[14px] font-[600]">Zoonies</span></span>
            </div>   
          </div>
        </div>
        
      </div>
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

<style scoped>
  .home-background {
    background-image: url("https://openseauserdata.com/files/zoonies_featured_image_4Z8jsfR.jpg");
    background-position: center center;
    opacity: 0.3;
    filter: blur(8px);
    background-size: cover;
    -webkit-mask: linear-gradient(rgb(255, 255, 255), transparent);
  }

  .image-shadow {
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 10px 0px;
  }
</style>