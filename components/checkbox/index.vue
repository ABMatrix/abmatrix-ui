<template>
  <div class="ab-checkbox" :class="{ checked, disabled, normal: !disabled }">
    <input
      ref="checkInput"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      @change="onChenge"
    />
    <div v-if="disabled" class="checkbox-disabled" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AbCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked: false,
    }
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.checked = this.value
      },
    },
  },
  methods: {
    onChenge(e: any) {
      this.checked = e.target.checked
      this.$emit('input', e.target.checked)
    },
  },
})
</script>

<style scoped lang="scss">
@keyframes done {
  from {
    transform: rotate(30deg) scale(1) translate(-50%, -50%);
  }
  to {
    transform: rotate(45deg) scale(1.1) translate(-50%, -50%);
  }
}
.ab-checkbox {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid $border;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  overflow: hidden;

  &.normal {
    &:hover {
      border-color: $primary;
    }
  }

  &.checked {
    background-color: $primary;
    border-color: $primary;

    &::after {
      width: 4px;
      height: 8px;
      top: 8px;
      left: 5px;
      position: absolute;
      display: table;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      opacity: 1;
      transform: rotate(45deg) translate(-50%, -50%);
      transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
      animation: done 0.3s;
      content: ' ';
    }
  }

  &.disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    margin: 0;
    border: 0;
    padding: 0;
    z-index: 2;
  }
}
</style>
