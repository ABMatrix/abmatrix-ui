<template>
  <svg
    viewBox="0 0 16 16"
    version="1.1"
    :width="size"
    :height="size"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
      <path
        d="M3.33333333,12.6666667 L4.276,12.6666667 L10.4853333,6.45733333 L9.54266667,5.51466667 L3.33333333,11.724 L3.33333333,12.6666667 Z M14,14 L2,14 L2,11.1713333 L10.9566667,2.21466667 C11.2169999,1.95441204 11.6390001,1.95441204 11.8993333,2.21466667 L13.7853333,4.10066667 C14.045588,4.3609999 14.045588,4.7830001 13.7853333,5.04333333 L6.162,12.6666667 L14,12.6666667 L14,14 Z M10.4853333,4.572 L11.428,5.51466667 L12.3706667,4.572 L11.428,3.62933333 L10.4853333,4.572 L10.4853333,4.572 Z"
        fill-rule="nonzero"
      ></path>
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'EditIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    },
  },
})
</script>
