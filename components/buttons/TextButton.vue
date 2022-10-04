<template>
  <el-button
    type="text"
    :disabled="disabled"
    class="text-button"
    @click="$emit('click')"
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
  name: 'PlainBotton',
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
.text-button {
  font-size: 12px;
  font-weight: bold;
  border-radius: 6px !important;
  color: $primary;
  padding: 0;
  &:hover,
  &:active,
  &:focus {
    color: $primary;
  }
}
.is-disabled {
  color: #c0c4cc !important;
}
</style>
