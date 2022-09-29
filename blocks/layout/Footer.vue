<template>
  <div class="layout-footer">
    <div class="social-icons">
      <twitter-icon></twitter-icon>
      <discord-icon></discord-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutFooter',
})
</script>

<style lang="scss" scoped>
.layout-footer {
  height: 200px;
  width: 100%;
  background: $secondary;
  color: $onSecondary;
  @include flexRc;
  .social-icons {
    @include flexRc;
  }
}
</style>
