<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size">
    <title>Time</title>
    <path
      d="M12,22 C6.477,22 2,17.523 2,12 C2,6.477 6.477,2 12,2 C17.523,2 22,6.477 22,12 C22,17.523 17.523,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M13,12 L17,12 L17,14 L11,14 L11,7 L13,7 L13,12 Z"
      fill-rule="nonzero"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TimeIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    },
  },
})
</script>
