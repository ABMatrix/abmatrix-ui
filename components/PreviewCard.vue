<template>
  <div class="preview-card">
    <span class="title">{{ name }}</span>
    <slot />
    <div class="actions" @click.stop="copyIcon">
      <VTooltip :show="show">
        <copy-icon></copy-icon>
        <template #popper> {{ tooltip }} </template>
      </VTooltip>
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
  data() {
    return {
      tooltip: 'copy',
      show: true,
    }
  },
  methods: {
    copyIcon() {
      copy((icons as any)[this.name])
      this.tooltip = 'copied'
      setTimeout(() => {
        this.tooltip = 'copy'
      }, 3000)
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
  .title {
    position: absolute;
    top: 20px;
  }
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
