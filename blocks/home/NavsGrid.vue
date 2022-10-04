<template>
  <div class="home-navs-grid">
    <h2 class="title">Tabs</h2>
    <div class="grid">
      <preview-card type="navs" name="NavBar" :ratio="4">
        <nav-bar></nav-bar>
      </preview-card>
      <preview-card type="navs" name="NabBarDot" :ratio="4">
        <nav-bar-dot></nav-bar-dot>
      </preview-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeTabsGrid',
})
</script>

<style lang="scss" scoped>
.home-navs-grid {
  .title {
    color: $primary;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    svg {
      fill: $onBackground;
    }
    @include pad {
      grid-template-columns: repeat(3, 1fr);
    }
    @include phone {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
