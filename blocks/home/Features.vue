<template>
  <div v-scroll-reveal="slideUp" class="home-features">
    <div v-for="item in 4" :key="item">
      <info-card class="info-card"></info-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const slideUp = {
  distance: '200%',
  origin: 'bottom',
  opacity: 10,
  dealy: 1000,
  reset: true,
}
export default Vue.extend({
  name: 'HomeFeatures',
  data() {
    return {
      slideUp,
    }
  },
})
</script>

<style lang="scss" scoped>
.home-features {
  width: 100vw;
  padding: 80px;
  @include flexRc;
  @include flexRGap(40px);
  flex-wrap: wrap;
}
</style>
