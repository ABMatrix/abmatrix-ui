<template>
  <div class="svg2vue-page">
    <Svg2vueInput :svg.sync="svg" />
    <primary-button class="button" :disabled="!svg" @click="generateCode"
      >Generate</primary-button
    >
    <overlay-scrollbars
      :options="{ scrollbars: { autoHide: 'scroll' } }"
      style="width: 100%; height: 100%"
      class="overlay-scrollbars"
    >
      <div v-highlight class="code">
        <pre class="language-javascript block">
        <code>{{ code }}</code>
        </pre>
      </div>
    </overlay-scrollbars>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { generate } from 'icon2vue'

export default Vue.extend({
  name: 'Svg2vuePage',
  data() {
    return {
      code: '' as string | undefined,
      svg: '',
    }
  },
  methods: {
    async generateCode() {
      this.code = await generate(this.svg, 'Icon')
    },
  },
})
</script>

<style lang="scss" scoped>
.svg2vue-page {
  padding: 100px 20px 20px 20px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 100px minmax(500px, 1fr);
  gap: 20px;
  .button {
    height: 40px;
  }
  ::v-deep .block {
    margin: 0;
    border-radius: 10px;
  }
}
</style>
