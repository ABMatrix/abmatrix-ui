<template>
  <div class="menu-wrapper-grid">
    <h2 class="title">MenuWrapper</h2>
    <div class="grid">
      <preview-card type="menus" name="SideMenu" :ratio="2">
        <div style="height: 100%; width: 100%">
          <MenusSideMenu> </MenusSideMenu>
        </div>
      </preview-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenusGrid',
})
</script>

<style lang="scss" scoped>
.menu-wrapper-grid {
  .title {
    color: $primary;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    svg {
      fill: $onBackground;
    }
    @include phone {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
