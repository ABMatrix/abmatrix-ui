<template>
  <div id="dot-Loading" class="dot-loading">
    <div
      v-for="i in dotAmount"
      :id="`child${i - 1}`"
      :key="i"
      class="loading-child"
      :class="i"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DotLoading',
  props: {
    dotAmount: {
      type: Number,
      default: 5,
    },
  },
  mounted() {
    for (let index = 0; index < this.dotAmount; index++) {
      const element = document.getElementById(`child${index}`)
      element?.style.setProperty(
        'animation-delay',
        `${(1.5 * (index + 1)) / this.dotAmount}s`
      )
    }
  },
})
</script>

<style scoped lang="scss">
.dot-loading {
  padding: 20px;
  @include flexR;
  .loading-child {
    width: 10px;
    height: 10px;
    background-color: $background;
    margin-inline: 5px;
    border-radius: 50%;
    display: inline-block;
    animation: loading-bounce 1.5s ease-in-out 0s infinite both;
  }
}
@keyframes loading-bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
