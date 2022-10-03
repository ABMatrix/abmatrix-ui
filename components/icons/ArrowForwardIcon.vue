<template>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :fill="color"
    :style="{ transform: `rotateZ(${rotate}deg)`, cursor: 'pointer' }"
    class="arrow-forward-icon"
  >
    <path
      d="M8.025 22.2 6.05 20.225 14.275 12 6.05 3.775 8.025 1.8l10.2 10.2Z"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ArrowForwardIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: '#fff',
    },
    rotate: {
      type: Number,
      default: 0,
    },
  },
})
</script>

<style lang="scss" scoped>
.arrow-forward-icon {
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
}
</style>
