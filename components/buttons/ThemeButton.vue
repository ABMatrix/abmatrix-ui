<template>
  <div class="theme-button" @click="changeTheme">
    <dark-mode-icon v-if="$colorMode.value === 'dark'"></dark-mode-icon>
    <light-mode-icon v-else></light-mode-icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ThemeSwtich',
  methods: {
    changeTheme() {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.theme-button {
  cursor: pointer;
  @include flexCc;
  svg {
    fill: $onBackground;
  }
}
</style>
