<template>
  <el-button
    v-throttle:[0.5]
    type="primary"
    class="primary-button"
    :disabled="disabled"
    @click.stop="$emit('click')"
  >
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
  name: 'PrimaryBotton',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.primary-button {
  background-color: $primary;
  border-color: $primary;
  font-size: 14px;
  border-radius: 6px !important;
  font-weight: bold;
  color: $onPrimary;
  &:hover,
  &:active,
  &:focus {
    background: lighten($primary, 5);
    border-color: $primary;
  }
  margin-left: 0 !important;
  ::v-deep .loading-icon svg {
    fill: $onPrimary !important;
  }
}
</style>
