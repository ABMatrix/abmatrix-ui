<template>
  <svg
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :style="{ transform: `rotateZ(${rotate}deg)`, transition: '0.3s' }"
  >
    <title>More</title>
    <path
      d="M4.5,10.5 C3.675,10.5 3,11.175 3,12 C3,12.825 3.675,13.5 4.5,13.5 C5.325,13.5 6,12.825 6,12 C6,11.175 5.325,10.5 4.5,10.5 Z M19.5,10.5 C18.675,10.5 18,11.175 18,12 C18,12.825 18.675,13.5 19.5,13.5 C20.325,13.5 21,12.825 21,12 C21,11.175 20.325,10.5 19.5,10.5 Z M12,10.5 C11.175,10.5 10.5,11.175 10.5,12 C10.5,12.825 11.175,13.5 12,13.5 C12.825,13.5 13.5,12.825 13.5,12 C13.5,11.175 12.825,10.5 12,10.5 Z"
      fill-rule="nonzero"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MoreMenuIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    },
    rotate: {
      type: Number,
      default: 0,
    },
  },
})
</script>
