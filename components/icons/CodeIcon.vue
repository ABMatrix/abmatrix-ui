<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
  >
    <title>Code</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
    />
  </svg>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CodeIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    },
  },
})
</script>
