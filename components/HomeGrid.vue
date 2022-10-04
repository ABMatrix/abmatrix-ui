<template>
  <div class="home-grid">
    <h2 class="title">{{ title }}</h2>
    <div class="grid">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeGrid',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.home-grid {
  .title {
    color: $primary;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    svg {
      fill: $onBackground;
    }
    @include pad {
      grid-template-columns: repeat(3, 1fr);
    }
    @include phone {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
