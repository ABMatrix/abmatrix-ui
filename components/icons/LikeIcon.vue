<template>
  <svg :class="{ active }" :width="size" :height="size" viewBox="0 0 18 18">
    <title>like</title>
    <path
      d="M9.00075,3.39675 C10.7625,1.815 13.485,1.8675 15.18225,3.56775 C16.87875,5.26875 16.93725,7.97775 15.35925,9.74475 L8.99925,16.11375 L2.64075,9.74475 C1.06275,7.97775 1.122,5.26425 2.81775,3.56775 C4.5165,1.86975 7.23375,1.81275 9.00075,3.39675 Z"
    ></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LikeIcon',
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

<style lang="scss" scoped>
svg active {
  fill: red;
}
</style>
