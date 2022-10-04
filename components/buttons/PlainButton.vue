<template>
  <el-button class="plain-button" @click="$emit('click')">
    <spinner-loader
      v-if="loading"
      class="loading-icon"
      :size="20"
    ></spinner-loader>
    <slot v-else class="button-text"></slot>
  </el-button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PlainBotton',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.plain-button {
  background-color: $onPrimary;
  border: 1px solid $primary;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px !important;
  color: $primary;
  &:hover,
  &:active,
  &:focus {
    background-color: lighten($primary, 32);
    border: 1px solid $primary;
    color: $primary;
  }
}
</style>
