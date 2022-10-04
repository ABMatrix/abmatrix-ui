<template>
  <div class="switch-button" :class="{ active: value }">
    <div
      v-for="item in tabs"
      :key="item.key"
      class="option"
      :class="{ active: item.key === activeTab }"
      @click="$emit('select', item.key)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SwitchButton',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    activeTab: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: false,
    }
  },
  methods: {
    changOption(): void {
      this.$emit('select', this.value)
    },
  },
})
</script>

<style lang="scss" scoped>
.switch-button {
  width: 160px;
  height: 24px;
  border-radius: 4px;
  background: $surface;
  box-sizing: border-box;
  position: relative;
  border: 1px solid $primary;
  cursor: pointer;
  @include flexRsa;
  .option {
    width: 50%;
    z-index: 20;
    line-height: 22px;
    font-size: 12px;
    font-weight: 400;
    transition: color;
    text-align: center;
    color: $primary;
    &.active {
      color: $surface;
      background-color: $primary;
    }
  }
}
</style>
