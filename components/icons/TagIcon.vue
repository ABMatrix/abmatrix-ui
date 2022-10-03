<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :fill="color"
  >
    <path
      d="m5.45 20.425 1-4h-3.5l.725-2.85h3.5l.775-3.15h-4l.725-2.85h4l1-4h2.875l-1 4h3.125l1-4h2.875l-1 4h3.5l-.725 2.85h-3.5l-.775 3.15h4l-.725 2.85h-4l-1 4H11.45l1-4H9.325l-1 4Zm4.6-6.85h3.125l.775-3.15h-3.125Z"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TagIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: '#757575',
    },
  },
})
</script>

<style lang="scss" scoped></style>
