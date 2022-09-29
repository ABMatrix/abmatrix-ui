<template>
  <div class="info-card">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InfoCard',
})
</script>

<style lang="scss" scoped>
.info-card {
  box-shadow: $shadow;
  width: 200px;
  height: 200px;
  border-radius: 8px;
}
</style>
