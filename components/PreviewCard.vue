<template>
  <div class="preview-card">
    <slot />
    <div class="actions" @click="copyIcon">
      <copy-icon></copy-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import copy from 'copy-to-clipboard'
import icons from '../tools/icons.json'

export default Vue.extend({
  name: 'PrevireCard',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    copyIcon() {
      copy((icons as any)[this.name])
    },
  },
})
</script>

<style lang="scss" scoped>
.preview-card {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: $secondary;
  border-radius: 8px;
  box-shadow: $shadow;
  padding: 10px;
  @include flexCc;
  .actions {
    position: absolute;
    bottom: 4px;
    right: 4px;
    display: none;
    cursor: pointer;
  }
  &:hover .actions {
    display: inline;
  }
}
</style>
