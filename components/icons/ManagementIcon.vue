<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size">
    <title>Management</title>
    <path
      d="M3,3 L11,3 L11,11 L3,11 L3,3 Z M3,13 L11,13 L11,21 L3,21 L3,13 Z M13,3 L21,3 L21,11 L13,11 L13,3 Z M13,13 L21,13 L21,21 L13,21 L13,13 Z M15,5 L15,9 L19,9 L19,5 L15,5 Z M15,15 L15,19 L19,19 L19,15 L15,15 Z M5,5 L5,9 L9,9 L9,5 L5,5 Z M5,15 L5,19 L9,19 L9,15 L5,15 Z"
      fill-rule="nonzero"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ManagementIcon',
  props: {
    size: {
      type: Number,
      default: 18,
    },
  },
})
</script>
