<template>
  <div class="flex">
    <MenuElement :href="'/explore-collections'">Explore</MenuElement>
    
    <div @mouseover="openStatsMenu" @mouseleave="closeStatsMenu" class="relative">
      <MenuElement :href="'/activity'">Stats</MenuElement>
      <MenuDropDown v-if="statsMenuOpen" :menus="statsMenu" />
    </div>

    <div class="relative">
      <MenuElement>Resources</MenuElement>
    </div>

    <MenuElement :href="'/asset/create'">Create</MenuElement>

    <div class="relative" @mouseover="openProfileMenu" @mouseleave="closeProfileMenu">
      <MenuElement :href="'/explore-collections'">
      <div v-if="profileImgUrl" class="w-[32px] h-[32px] rounded-full overflow-hidden">
        <img class="w-[32px] h-[32px]" :src="profileImgUrl" />
        
      </div>
      <i v-if="!profileImgUrl" class="material-icons-outlined text-[32px]">account_circle</i>
      </MenuElement>
      <MenuDropDown v-if="profileMenuOpen" :menus="profileMenu" :class="'left-[-150px]'"/>
    </div>
    
    <button @click.stop="handleWalletMenuBtnEvent" class="flex items-center justify-center px-[10px] text-[#04111DBF] hover:text-[#04111d]">
      <i class="material-icons-outlined text-[32px]">account_balance_wallet</i>
    </button>
  </div>
</template>

<script>
import MenuItem from './MenuElement.vue';
import MenuElement from './MenuElement.vue';
import MenuDropdownItem from './MenuDropdownItem.vue';
import MenuDropDown from './MenuDropDown.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

import {TOGGLE_WALLET_MENU, CLOSE_WALLET_MENU, SET_BALANCE} from '../../store/mutation-types';



export default {
  data() {
    return {
      statsMenuOpen: false,
      profileMenuOpen: false,
      statsMenu: [
        {
          'name': 'Stats',
          'href': '/person'
        }
      ],
      profileMenu: [
        {
          'name': 'Profile',
          'href': '/a',
          'icon': 'person'
        },
        {
          'name': 'Favorites',
          'href': '/b',
          'icon': 'favorite_border'
        },
        {
          'name': 'My Collections',
          'href': '/c',
          'icon': 'grid_on'
        },
        {
          'name': 'Log Out',
          'icon': 'logout'
        },
        {
          'name': 'Settings',
          'href': '/e',
          'icon': 'settings'
        },
      ],
      timer: 0,
    }
  },
  computed: {
    ...mapGetters({
      'walletOpened': 'wallet/walletOpened',
      'profileImgUrl': 'wallet/profileImgUrl',
      'ethBalance': `wallet/ethBalance`
    }),
  },
  methods: {
    ...mapMutations({
      'toggleWalletMenu': `wallet/${TOGGLE_WALLET_MENU}`,
      'closeWalletMenu': `wallet/${CLOSE_WALLET_MENU}`,
      
    }),
    ...mapActions({
      'setBalance': `wallet/${SET_BALANCE}`,
    }),
    openStatsMenu() {
      this.statsMenuOpen = true;
    },
    closeStatsMenu() {
      this.statsMenuOpen = false;
    },
    openProfileMenu() {
      this.profileMenuOpen = true;
    },
    closeProfileMenu() {
      this.profileMenuOpen = false;
    },
    handleWalletMenuBtnEvent() {
      this.toggleWalletMenu();
      if(this.walletOpened) {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          if(!this.walletOpened) {
            clearInterval(this.timer);
          }
          this.setBalance();
        }, 2000);  
      }
    }
  },
  components: { MenuItem, MenuElement, MenuDropdownItem, MenuDropDown }
}
</script>

<style>

</style>