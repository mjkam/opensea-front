<template>
  <a class="flex flex-col rounded-[10px] h-[400px] pb-[22px] border-[1px]" href="/">
      <div class="h-[200px]">
        <img class="w-full h-full rounded-t-[10px] object-cover" :src="collection.imgUrl"/>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-[#04111D] font-[600] mt-[30px]">Nouns</div>
        <div class="text-[14px] font-[500] "><span class="text-[#707A83] mr-[4px]">by</span><span class="text-[#2081e2]">OBC380</span></div>
        <div class="text-center text-[#353840] font-[400] mt-[20px]">
          <p>One Noun, every day, forever</p>
          <p>nouns.wtf</p>
        </div>
      </div>
    </a>
</template>

<script>
export default {
   props: ['collection']
}
</script>