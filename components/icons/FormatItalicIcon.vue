<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :fill="color"
  >
    <title>Italic</title>

    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z" />
  </svg>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'FormatItalicIcon',
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
