<template>
  <div class="flex justify-center">
    <div class="w-[772px]">
      <div class="text-[#04111D] text-[40px] font-[600] mt-[45px] mb-[10px]">
        Create New Item
      </div>
      <div class="flex my-[12px]">
        <span class="text-[#EB5757] text-[12px]"> * </span>
        <div class="text-[#707A83] text-[12px]">
          Required fields
        </div>
      </div>
      <div class="text-[#353840] font-[600] mb-[4px]">
        Image, Video, Audio, or 3D Model <span class="text-[#EB5757] text-[12px]"> * </span>
      </div>
      <div class="text-[#707A83] text-[12px] mb-[8px]">
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
      </div>
      <div class="w-[350px] h-[257px] rounded-[10px] border-[3px] border-dashed border-[#cccccc] flex items-center justify-center">
        <i class="text-[84px] text-[#CCCCCC] material-icons">image</i>
      </div>

      <div class="mt-[15px]">
        <div class="text-[#353840] font-[600]">
          Name <span class="text-[#eb5757] text-[12px]"> * </span>
        </div>
        <div class="w-full h-[52px] border-[2px] border-[#e5e8eb] focus-within:border-[#8a939b] rounded-[10px] px-[12px] text-[15px]">
          <input class="w-full h-full focus:outline-none" placeholder="Item name" />
        </div>
        <div class="flex items-center text-[#eb5757]">
          <i class="text-[24px] material-icons">close</i>
          <div class="text-[12px] ">This field is required.</div>
        </div>
      </div>
      
      <div class="mt-[30px]">
        <div class="text-[#353840] font-[600]">
          Description
        </div>
        <div class="text-[#707A83] text-[12px] py-[5px]">
          The description will be included on the item's detail page underneath its image. Markdown syntax is supported.
        </div>
        <textarea class="w-full h-auto p-[12px] border-[2px] border-[#e5e8eb] rounded-[10px]" rows="4" placeholder="Provide a detailed description of your item."></textarea>  
      </div>
      
      <div class="my-[30px]">
        <div class="text-[#353840] font-[600]">
          Collection
        </div>
        <div class="text-[#707A83] text-[12px] flex py-[5px]">
          <div>This is the collection where your item will appear. </div>
          <div class="ml-[5px]">
            <i class="material-icons-outlined text-[#707A83] text-[20px]">info</i>
          </div>
        </div>
        <div class="relative">
          <div class="w-full h-[52px] border-[2px] border-[#e5e8eb] focus-within:border-[#8a939b] rounded-[10px] px-[12px] text-[15px]">
            <input class="w-full h-full focus:outline-none" placeholder="Item name" />
          </div>
        </div>
      </div>
      

      <hr class="py-[20px]"/>

      <button class="py-[17px] px-[24px] bg-[#2081e2] font-[600] text-white flex items-center justify-center rounded-[12px]">
        Create
      </button>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>