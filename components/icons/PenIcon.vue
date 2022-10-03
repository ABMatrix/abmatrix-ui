<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size">
    <title>Post</title>
    <path
      d="M6.94,14.036 C6.707,14.66 6.51,15.236 6.334,15.819 C7.294,15.122 8.435,14.68 9.752,14.515 C12.265,14.201 14.498,12.542 15.628,10.457 L14.172,9.002 L15.585,7.587 L16.585,6.586 C17.015,6.156 17.5,5.362 18.013,4.218 C12.42,5.085 8.995,8.51 6.939,14.036 L6.94,14.036 Z M17,9.001 L18,10 C17,13 14,16 10,16.5 C7.331,16.834 5.664,18.667 4.998,22 L3,22 C4,16 6,2 21,2 C20,4.997 19.002,6.996 18.003,7.997 L17,9.001 Z"
      fill-rule="nonzero"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PenIcon',
  props: {
    size: {
      type: Number,
      default: 18,
    },
  },
})
</script>
