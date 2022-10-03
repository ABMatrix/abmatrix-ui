<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
  >
    <title>Image</title>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm1-2h12l-3.75-5-3 4L9 13Zm-1 2V5v14Z"
    />
  </svg>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ImageIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    },
  },
})
</script>
