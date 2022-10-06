<template>
  <div class="preview-card" :style="{ aspectRatio: ratio }">
    <span class="title">{{ name }}</span>
    <slot />
    <div class="actions">
      <div @click="previewCode">
        <icon-wrapper>
          <code-icon :size="16"></code-icon>
        </icon-wrapper>
      </div>
      <div @click="copyComponent">
        <icon-wrapper>
          <copy-icon :size="16"></copy-icon>
        </icon-wrapper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import copy from 'copy-to-clipboard'
import { $vfm } from 'vue-final-modal-types'
import icons from '../tools/icons.json'
import buttons from '../tools/buttons.json'
import tabs from '../tools/tabs.json'
import navs from '../tools/navs.json'
import tables from '../tools/tables.json'

export default Vue.extend({
  name: 'PreviewCard',
  props: {
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'icons',
    },
    ratio: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      tooltip: 'copy',
      show: false,
    }
  },
  methods: {
    previewCode() {
      const code = this.getCode()
      $vfm.show('code-dialog', { title: this.name, code })
    },
    copyComponent() {
      const code = this.getCode()
      copy(code)
      this.$message.success(this.$t('copied').toString())
      this.tooltip = 'copied'
      setTimeout(() => {
        this.tooltip = 'copy'
      }, 3000)
    },
    getCode() {
      switch (this.type) {
        case 'icons':
          return (icons as any)[this.name]
        case 'buttons':
          return (buttons as any)[this.name]
        case 'tabs':
          return (tabs as any)[this.name]
        case 'navs':
          return (navs as any)[this.name]
        case 'tables':
          return (tables as any)[this.name]
        default:
          break
      }
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
    :deep svg {
      fill: $onSecondary;
    }
  }
  &:hover .actions {
    display: flex;
    gap: 10px;
  }
}
</style>
