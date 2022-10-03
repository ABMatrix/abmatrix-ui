<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size">
    <title>File</title>
    <path
      d="M21.0000247,8 L21.0000247,20.993 C21.001863,21.2582184 20.8982888,21.5133136 20.7120638,21.7021642 C20.5258387,21.8910147 20.2722185,21.99815 20.007,22 L3.993,22 C3.44497153,22 3.00055189,21.5560282 3,21.008 L3,2.992 C3,2.455 3.449,2 4.002,2 L14.997,2 L21.0000247,8 Z M19,9 L14,9 L14,4 L5,4 L5,20 L19,20 L19,9 Z M8,7 L11,7 L11,9 L8,9 L8,7 Z M8,11 L16,11 L16,13 L8,13 L8,11 Z M8,15 L16,15 L16,17 L8,17 L8,15 Z"
      fill-rule="nonzero"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FileIcon',
  props: {
    size: {
      type: Number,
      default: 30,
    },
  },
})
</script>
