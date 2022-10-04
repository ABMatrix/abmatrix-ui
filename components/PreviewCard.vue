<template>
  <div class="preview-card">
    <span class="title">{{ name }}</span>
    <slot />
    <div class="actions" @click.stop="copyComponent">
      <VTooltip :show="true" :triggers="[]" :auto-hide="false">
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
import buttons from '../tools/buttons.json'

export default Vue.extend({
  name: 'PrevireCard',
  props: {
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'icons',
    },
  },
  data() {
    return {
      tooltip: 'copy',
      show: false,
    }
  },
  methods: {
    copyComponent() {
      switch (this.type) {
        case 'icons':
          copy((icons as any)[this.name])
          break
        case 'buttons':
          copy((buttons as any)[this.name])
          break
        default:
          break
      }
      this.$message.success(this.$t('copied').toString())
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
  width: 100%;
  aspect-ratio: 1;
  background: $secondary;
  border-radius: 8px;
  box-shadow: $shadow;
  padding: 10px;
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  justify-items: center;
  align-items: center;
  .title {
    color: $onSecondary;
    @include singleLine;
  }
  .actions {
    display: none;
    cursor: pointer;
    ::v-deep svg {
      fill: $onSecondary;
    }
  }
  &:hover .actions {
    display: inline;
  }
}
</style>
