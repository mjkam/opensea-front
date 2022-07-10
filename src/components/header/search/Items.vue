<template>
  <div>
    <div v-if="collections.length != 0">
      <DescriptionItem :isStatement="false">COLLECTIONS</DescriptionItem>
      <CollectionItem 
        v-for="(d, idx) in collections" :key="idx"
        :imgUrl="d.imgUrl"
        :name="d.name"
        :count="d.count"
        />
    </div>
    
    <div v-if="accounts.length != 0">
      <DescriptionItem :isStatement="false">ACCOUNTS</DescriptionItem>
      <AccountItem
        v-for="(d, idx) in accounts" :key="idx"
        :imgUrl="d.imgUrl"
        :name="d.name"
      />
    </div>
  </div>
</template>

<script>
import AccountItem from './item/AccountItem.vue'
import CollectionItem from './item/CollectionItem.vue'
import DescriptionItem from './item/DescriptionItem.vue'

export default {
  props: ['collections', 'accounts', 'searchTxt'],
  components: { AccountItem, CollectionItem, DescriptionItem },
}
</script>

<style>

</style>