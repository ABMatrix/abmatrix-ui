<template>
  <div class="default-layout">
    <LayoutHeader></LayoutHeader>
    <Nuxt class="nuxt-page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
})
</script>

<style lang="scss" scoped>
.default-layout {
  height: 100%;
  .nuxt-page {
    background: $background;
  }
}
</style>
