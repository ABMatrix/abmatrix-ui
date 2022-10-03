<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size">
    <title>Delete</title>
    <path
      d="M17,6 L22,6 L22,8 L20,8 L20,21 C20,21.5522847 19.5522847,22 19,22 L5,22 C4.44771525,22 4,21.5522847 4,21 L4,8 L2,8 L2,6 L7,6 L7,3 C7,2.44771525 7.44771525,2 8,2 L16,2 C16.5522847,2 17,2.44771525 17,3 L17,6 Z M18,8 L6,8 L6,20 L18,20 L18,8 Z M9,11 L11,11 L11,17 L9,17 L9,11 Z M13,11 L15,11 L15,17 L13,17 L13,11 Z M9,4 L9,6 L15,6 L15,4 L9,4 Z"
      fill-rule="nonzero"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DeleteIcon',
  props: {
    size: {
      type: Number,
      default: 18,
    },
  },
})
</script>
