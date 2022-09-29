<template>
  <div class="home-introduction">
    <div class="description">Nuxt landing page template</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeIntroduction',
})
</script>

<style lang="scss" scoped>
.home-introduction {
  height: 700px;
  overflow: hidden;
  @include flexRc;
  background-image: url('~/assets/images/background.png');
  background-size: cover;
  background-position: center;
  .description {
    color: $onSecondary;
    font-size: 40px;
  }
}
</style>
