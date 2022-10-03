<template>
  <svg class="icon" :fill="color" viewBox="0 0 30 30">
    <title>Mail</title>
    <path
      d="M3.75,3.75 L26.25,3.75 C26.9403559,3.75 27.5,4.30964406 27.5,5 L27.5,25 C27.5,25.6903559 26.9403559,26.25 26.25,26.25 L3.75,26.25 C3.05964406,26.25 2.5,25.6903559 2.5,25 L2.5,5 C2.5,4.30964406 3.05964406,3.75 3.75,3.75 Z M25,9.0475 L15.09,17.9225 L5,9.02 L5,23.75 L25,23.75 L25,9.0475 Z M5.63875,6.25 L15.07625,14.5775 L24.3775,6.25 L5.63875,6.25 Z"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NotificationIcon',
  props: {
    color: {
      type: String,
      default: '#fff',
    },
  },
})
</script>
