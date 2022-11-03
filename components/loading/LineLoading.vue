<template>
  <div class="line-loading" :class="{ active: hasStop }"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LineLoading',
  props: {
    hasStop: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped lang="scss">
.line-loading {
  width: 200px;
  height: 3px;
  margin: 20px 10px;
  position: relative;
  overflow: hidden;
  background-color: $background;
  border-radius: 20px;
}
.line-loading.active:before {
  content: '';
  position: absolute;
  left: -50%;
  height: 3px;
  width: 40%;
  background-color: $primary;
  animation: lineMoveStop 1.6s linear infinite;
  border-radius: 20px;
}
.line-loading:before {
  content: '';
  position: absolute;
  left: -50%;
  height: 3px;
  width: 40%;
  background-color: $primary;
  animation: lineMove 1.6s linear infinite;
  border-radius: 20px;
}
@keyframes lineMoveStop {
  0% {
    left: -40%;
  }
  50% {
    left: 40%;
    width: 40%;
  }
  65% {
    left: 40%;
    width: 40%;
  }
  100% {
    left: 100%;
    width: 100%;
  }
}
@keyframes lineMove {
  0% {
    left: -40%;
  }
  50% {
    left: 20%;
    width: 80%;
  }
  100% {
    left: 100%;
    width: 100%;
  }
}
</style>
