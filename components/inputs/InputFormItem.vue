<template>
  <el-form-item :label="label" :prop="prop" :rules="rules">
    <el-input-number
      v-if="isNumber"
      v-model="inputValue"
      :prop="prop"
      :disabled="disabled"
      :controls="false"
      :placeholder="placeholder"
    ></el-input-number>
    <el-input
      v-else
      v-model="inputValue"
      :prop="prop"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="inputValue = $event.target.value.trim()"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'InputFormItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String, undefined],
      default: undefined,
    },
    rules: {
      type: Array,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isNumber: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update:value', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
// Element 输入框
:deep .el-form-item__label {
  height: 20px;
  line-height: 20px;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: $onSurface;
  margin-bottom: 10px;
}
:deep .el-input-number {
  width: 100%;
  .el-input__inner {
    text-align: left;
  }
}
:deep .el-input__inner {
  width: 100%;
  height: 40px !important;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: $surface;
}
</style>
