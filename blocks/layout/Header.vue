<template>
  <div class="header">
    <nuxt-logo></nuxt-logo>
    <div class="right-panel">
      <language-switch></language-switch>
      <div>Launch App</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutHeader',
})
</script>

<style lang="scss" scoped>
.header {
  @include flexRsb;
  height: 60px;
  width: 100%;
  z-index: 100;
  padding: 0 20px;
  position: fixed;
  color: $onSecondary;
  .right-panel {
    @include flexR;
    @include flexRGap(10px);
    justify-content: flex-end;
  }
}
</style>
