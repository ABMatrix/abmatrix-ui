<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :fill="color"
  >
    <title>Quote</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"
    />
  </svg>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'QuoteIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
})
</script>
