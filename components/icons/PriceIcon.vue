<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size">
    <title>Price</title>
    <path
      d="M3,7 L11.445,1.37 C11.7810369,1.14580046 12.2189631,1.14580046 12.555,1.37 L21,7 L21,21 C21,21.5522847 20.5522847,22 20,22 L4,22 C3.44771525,22 3,21.5522847 3,21 L3,7 Z M5,8.07 L5,20 L19,20 L19,8.07 L12,3.404 L5,8.07 Z M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
      fill-rule="nonzero"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PriceIcon',
  props: {
    size: {
      type: Number,
      default: 18,
    },
  },
})
</script>
