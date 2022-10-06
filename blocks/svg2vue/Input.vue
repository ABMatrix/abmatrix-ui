<template>
  <div class="svg2vue-input" @drop="dropHandler" @dragover="dragOverHandler">
    <textarea
      id="svg"
      v-model="inputValue"
      name="svg"
      rows="30"
      :placeholder="$t('svg2vueInput.placeholder')"
    ></textarea>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Svg2vueInput',
  props: {
    svg: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.svg
      },
      set(value) {
        this.$emit('update:svg', value)
      },
    },
  },
  methods: {
    dragOverHandler(ev) {
      ev.preventDefault()
    },
    async dropHandler(ev) {
      ev.preventDefault()
      if (ev.dataTransfer.items) {
        const item = ev.dataTransfer.items[0]
        if (item.kind === 'file') {
          const file = item.getAsFile()
          const text = await file.text()
          this.$emit('update:svg', text)
        }
      } else {
        const item = ev.dataTransfer.files[0]
        if (item.kind === 'file') {
          const file = item.getAsFile()
          const text = await file.text()
          this.$emit('update:svg', text)
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.svg2vue-input {
  textarea {
    resize: vertical;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    background: $secondary;
    color: $onSecondary;
    line-height: 1.5;
  }
}
</style>
