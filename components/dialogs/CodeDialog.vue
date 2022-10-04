<template>
  <basic-dialog name="code-dialog" :title="title" @before-open="beforeOpen">
    <template #content>
      <div :key="title" v-highlight>
        <pre class="language-javascript">
        <code>{{ code }}</code>
        </pre>
      </div>
    </template>
  </basic-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CodeDialog',
  data() {
    return {
      title: '',
      code: '',
    }
  },
  methods: {
    beforeOpen(e: any) {
      const params = e.ref.params
      const { title, code } = params
      this.title = title
      this.code = code
    },
  },
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  @include flexRsa;
}
</style>
