<template>
  <div class="path-bar">
    <div
      v-for="(item, index) in tabs"
      :key="index"
      class="path-item"
      :class="{
        active: activeTab === item.key,
      }"
      @click="() => goPage(item)"
    >
      <div class="text">{{ item.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface TabType {
  key: string
  name: string
}

export default Vue.extend({
  name: 'PathBar',
  props: {
    tabs: {
      type: Array,
      required: true,
    } as PropOptions<TabType[]>,
    activeTab: {
      type: String,
      default: '',
    },
  },

  methods: {
    goPage(item: any) {
      this.$emit('select', item.key)
    },
  },
})
</script>

<style scoped lang="scss">
.path-bar {
  @include flexR;
  display: inline-flex;
  box-shadow: $shadow;
  border-radius: 4px !important;
  background-color: $onPrimary;
  overflow: hidden;
  .path-item {
    width: 120px;
    height: 40px;
    background: $secondary;
    color: $onSecondary;
    &.active {
      background-color: $primary;
      color: $onPrimary;
    }
    .text {
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 40px;
      line-height: 40px;
      cursor: pointer;
    }
  }
}
</style>
