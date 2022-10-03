<template>
  <svg class="icon" :width="size" :height="size" viewBox="0 0 30 30">
    <title>Compass</title>

    <path
      d="M16.25,27.5 C9.34625,27.5 3.75,21.90375 3.75,15 C3.75,8.09625 9.34625,2.5 16.25,2.5 C23.15375,2.5 28.75,8.09625 28.75,15 C28.75,21.90375 23.15375,27.5 16.25,27.5 Z M10,14.375 L15,16.25 L16.875,21.2525 L21.25,10 L10,14.375 Z"
      fill-rule="nonzero"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CompassIcon',
  props: {
    size: {
      type: Number,
      default: 18,
    },
  },
})
</script>
