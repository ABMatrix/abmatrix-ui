<template>
  <svg :width="size" :height="size" viewBox="0 0 18 18">
    <title>Forwarding</title>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M8.25,1.5375 L8.25,3.0465 C5.10996977,3.44604273 2.82025131,6.2158863 3.01846534,9.37502153 C3.21667937,12.5341568 5.83465502,14.9960762 9,15 C12.023803,14.9999487 14.5751939,12.7500448 14.9535,9.75 L16.46325,9.75 C16.08675,13.53975 12.88875,16.5 9,16.5 C4.85775,16.5 1.5,13.14225 1.5,9 C1.5,5.11125 4.46025,1.91325 8.25,1.5375 Z M14.03025,5.03025 L9,10.0605 L7.9395,9 L12.96975,3.96975 L10.5,1.5 L16.5,1.5 L16.5,7.5 L14.03025,5.03025 Z"
      fill-rule="nonzero"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ForwardingIcon',
  props: {
    size: {
      type: Number,
      default: 18,
    },
  },
})
</script>
