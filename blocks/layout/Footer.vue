<template>
  <div class="layout-footer"></div>
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
  @include flexRc;
  .social-icons {
    @include flexRc;
  }
}
</style>
