<template>
  <button class="h-[80px] p-[16px] w-full item">
    <div class="flex items-center justify-between w-full h-full">
      <div class="w-[190px] h-full flex items-center">
        <i size="18" class="text-[18px] w-[18px] h-[18px] material-icons">shopping_cart</i>
        <h6 class="text-[14px] font-[600] ml-[8px]">Sale</h6>
      </div>
      <div class="w-[300px] h-full flex items-center">
        <div class="flex">
          <div class="w-[48px] h-[48px] rounded-[10px] overflow-hidden border-[1px] border-[#e5e8eb]">
            <img class="w-[46px] h-[46px]" src="https://img.seadn.io/files/a6bac471e81716badc7822194afbfdce.png?fit=max&auto=format&h=96&w=96" />  
          </div>
          <div class="flex flex-col justify-center items-start pl-[8px]">
            <div class="text-[#707a83] text-[14px] font-[400]">
              <a href="/">Sappy Seals</a>
            </div>
            <div class="text-[#04111d] text-[14px] font-[600]">
              <a href="/">Sappy Seals #300</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[75px] flex flex-col justify-items-end items-end">
        <div class="flex items-center">
          <img class="w-[16px] h-[16px]" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
          <span class="text-[#04111D] font-[600] pl-[2px]">0.0279</span>
        </div>
        <div class="text-[#707a83] text-[12px] font-[500]">
          $33.92
        </div>
      </div>
      <div class="w-[75px] h-full flex items-center justify-center">
        1
      </div>
      <div class="w-[125px] h-full flex items-center justify-center">
        <a href="/" class="text-[#2081e2] font-[400]">5B1F4</a>
      </div>
      <div class="w-[125px] h-full flex items-center justify-center">
        <a href="/" class="text-[#2081e2] font-[400]">5B1F4</a>
      </div>
      <div class="w-[160px] h-full flex items-center justify-center">
        <a href="/" class="text-[#2081e2] font-[400] flex items-center">
          a minute ago
          <i class="text-[#2081E2] text-[24px] material-icons ml-[2px]">open_in_new</i>
        </a>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .item {
    transition: all 0.2s ease 0s;
  }

  .item:hover {
    box-shadow: 0px 0px 8px 0px rgb(4 17 29 / 25%);
    background-color: rgb(251, 253, 255);
  }
</style>