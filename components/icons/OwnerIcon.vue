<template>
  <svg :class="{ active }" :width="size" :height="size" viewBox="0 0 18 18">
    <title>Owner</title>
    <path
      d="M3,16.5 C3,13.1862915 5.6862915,10.5 9,10.5 C12.3137085,10.5 15,13.1862915 15,16.5 L13.5,16.5 C13.5,14.0147186 11.4852814,12 9,12 C6.51471863,12 4.5,14.0147186 4.5,16.5 L3,16.5 L3,16.5 Z M9,9.75 C6.51375,9.75 4.5,7.73625 4.5,5.25 C4.5,2.76375 6.51375,0.75 9,0.75 C11.48625,0.75 13.5,2.76375 13.5,5.25 C13.5,7.73625 11.48625,9.75 9,9.75 Z M9,8.25 C10.6575,8.25 12,6.9075 12,5.25 C12,3.5925 10.6575,2.25 9,2.25 C7.3425,2.25 6,3.5925 6,5.25 C6,6.9075 7.3425,8.25 9,8.25 Z"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'OwnerIcon',
  props: {
    size: {
      type: Number,
      default: 18,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
