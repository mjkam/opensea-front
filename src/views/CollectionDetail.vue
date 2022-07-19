<template>
  <div class="w-[1280px] m-auto">
    <div class="flex">
      <div class="w-[550px]">
        
        <div class="m-[20px] text-[#707A83] border-[1px] rounded-[10px] overflow-hidden">
          <div class="flex justify-between items-center p-[12px]">
            <img class="w-[16px] h-[16px]" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
            <div class="flex items-center">
              <span class="text-[12px]">65</span>
              <i class="material-icons text-[20px]">favorite_border</i>
            </div>
          </div>
          <div>
            <img src="https://img.seadn.io/files/831c7a7f6eebbb661433b04fd0266151.jpg?fit=max&w=600" />
          </div>
        </div>

        <div class="m-[20px] border-[1px] rounded-[10px]">

          <div class="p-[20px] flex items-center text-[#04111D] border-b-[1px]">
            <i class="material-icons mr-[10px]">subject</i>
            <span>Description</span>
          </div>

          <div class="p-[30px] bg-[#fbfdff]">
            <div>By NFTWorldsVault</div>
            <div>NFT Worlds are generative worlds with geography, resource & feature data stored on chain. NFT Worlds can be played, explored and built in. You can sync changes you make to your world so they reflect on your NFT. Feel free to use NFT Worlds in any way you want. Learn more at nftworlds.com</div>
          </div>

          <div class="p-[20px] flex items-center justify-between border-b-[1px]">
            <div class="flex items-center">
              <i class="material-icons">label</i>
              <span class="font-[600]">Properties</span>
            </div>
            <i class="material-icons">expand_less</i>
          </div>

          <div class="bg-[#fbfdff] p-[5px] flex flex-wrap border-b-[1px]">
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
          </div>

          <div class="p-[20px] flex items-center justify-between border-b-[1px]">
            <div class="flex items-center">
              <i class="material-icons">ballot</i>
              <span class="font-[600]">Details</span>
            </div>
            <i class="material-icons">expand_more</i>
          </div>

          <div class="bg-[#fbfdff] p-[20px]">
            <div class="flex justify-between items-center mt-[8px]">
              <span class="text-[#353840] text-[15px]">Contract Address</span>
              <span class="text-[#2081E2] font-[500] text-[14px]">0xbcc..ssdf</span>
            </div>
            <div class="flex justify-between items-center mt-[8px]">
              <span class="text-[#353840] text-[15px]">Token ID</span>
              <span class="text-[#2081E2] font-[500] text-[14px]">994</span>
            </div>
            <div class="flex justify-between items-center mt-[8px]">
              <span class="text-[#353840] text-[15px]">Token Standard</span>
              <span class="text-[#707A83] font-[500] text-[14px]">ERC-721</span>
            </div>
            <div class="flex justify-between items-center mt-[8px]">
              <span class="text-[#353840] text-[15px]">Blockchain</span>
              <span class="text-[#707A83] font-[500] text-[14px]">ethereum</span>
            </div>
            <div class="flex justify-between items-center mt-[8px]">
              <span class="text-[#353840] text-[15px]">Creator Fees</span>
              <span class="text-[#707A83] font-[500] text-[14px]">9.5%</span>
            </div>
          </div>

        </div>
      </div>

      <div class="w-[750px]">
        <div class="mt-[20px] flex flex-col">
          <span class="mt-[15px] text-[#2081E2]">NFT Worlds</span>
          <span class="my-[30px] text-[30px] text-[#353840] font-[600]">World #953</span>
          <span class="text-[#707A83] text-[15px]">Owned by <span class="text-[#2081E2]">Chris01020</span></span>

          <span class="mt-[30px]">Current Price</span>
          <div class="flex items-center">
            <img class="w-[24px] h-[24px]" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
            <span class="text-[#353840] text-[30px] font-[600]">3.98</span>
            <span class="text-[15px] text-[#707A83]">($5,380.92)</span>
          </div>
          <div class="flex">
            <div class="w-[206px] h-[60px]">
              <button class="w-full h-full flex items-center justify-center text-white border-[#2081e2] bg-[#2081e2] border-[2px] rounded-[12px]">
                <div class="flex">
                  <i class="text-[22px] material-icons mr-[12px]">account_balance_wallet</i>
                  <span class="font-[600]">Buy now</span>  
                </div>
              </button>
            </div>

            <div class="w-[206px] h-[60px] ml-[10px]">
              <button class="w-full h-full flex items-center justify-center text-[#2081E2] bg-white border-[#E5E8EB] border-[2px] rounded-[12px]">
                <div class="flex">
                  <i class="text-[22px] material-icons mr-[12px]">local_offer</i>
                  <span class="font-[600]">Make offer</span>  
                </div>
              </button>
            </div>
          </div>

          <ListingList />
          <OfferList />

        </div>

        <!-- <div class="m-[20px] flex flex-col ">
          <span class="py-[15px] text-[#2081E2]">NFT Worlds</span>
          <span class="text-[30px] text-[#353840] font-[600]">World #953</span>
        </div>

        <div class="m-[20px] flex">
          <div class="py-[8px] pr-[20px]">
            Owned by <span class="text-[#2081E2]">Chris01020</span>
          </div>
        </div>

        <div class="m-[20px]">
          
        </div> -->

        
        
        
        
      </div>
    </div>

    <div class="m-[20px] border-[1px] rounded-[10px]">
      <div class="flex justify-between items-center p-[20px]">
        <div class="flex items-center">
          <i class="material-icons">swap_vert</i>
          <span>Item Activity</span>
        </div>
        <i class="material-icons">expand_more</i>
      </div>

      <div>
        <div class="flex border-y-[1px]">
          <div class="w-[270px] pl-[16px] flex items-center">Event</div>
          <div class="w-[240px] p-[4px] flex items-center">Price</div>
          <div class="w-[240px] p-[4px] flex items-center">From</div>
          <div class="w-[240px] p-[4px] flex items-center">To</div>
          <div class="w-[240px] p-[4px] flex items-center">Date</div>
        </div>
        <div class="max-h-[330px] overflow-auto">
          <div class="flex">
            <div class="w-[270px] pl-[16px] py-[16px] pr-[4px] flex items-center">
              <i class="material-icons mr-[8px] text-[#353840] text-[24px]">shopping_cart</i>
              <span class="text-[#353840] text-[15px]">Sale</span>
            </div>
            <div class="w-[240px] py-[16px] px-[4px] flex items-center">
              <img class="w-[16px] h-[16px]" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
              <span class="ml-[2px]">3.251</span>
            </div>
            <div class="w-[240px] py-[16px] px-[4px] flex items-center">
              <span class="text-[#2081E2] text-[15px]">76B3F9</span>
            </div>
            <div class="w-[240px] py-[16px] px-[4px] flex items-center">
              <span class="text-[#2081E2] text-[15px]">76B3F9</span>
            </div>
            <div class="w-[240px] py-[16px] px-[4px] flex items-center text-[#2081E2] text-[15px]">
              4 days ago
              <i class="material-icons text-[24px] ml-[5px]">open_in_new</i>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import ListingList from '../components/collection/ListingList.vue';
import OfferList from '../components/collection/OfferList.vue';
import PropertyItem from '../components/collection/PropertyItem.vue';
export default {
    components: { ListingList, OfferList, PropertyItem }
}
</script>

<style scoped>
.test {
  display: grid;
  grid-template-columns: minmax(auto, auto) minmax(auto, auto) minmax(auto, auto) minmax(auto, auto) minmax(auto, 160px) minmax(auto, auto);
  max-height: 100px;
  overflow-y: auto;

}
</style>