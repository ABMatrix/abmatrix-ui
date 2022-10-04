<template>
  <div class="lang-button">
    <div
      v-if="locale === 'en-US'"
      class="language"
      @click="changeLang(lang[1].code)"
    >
      {{ lang[1].name }}
    </div>
    <div v-else class="language" @click="changeLang(lang[0].code)">
      {{ lang[0].name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LangButton',
  data() {
    return {
      lang: [
        { code: 'en-US', name: 'English' },
        { code: 'zh-TW', name: '繁体中文' },
      ],
    }
  },
  computed: {
    locale: {
      get() {
        return this.$i18n.locale
      },
      set(lang: string) {
        this.$i18n.setLocale(lang)
      },
    },
  },
  methods: {
    changeLang(code: string) {
      this.$i18n.setLocale(code)
    },
  },
})
</script>

<style lang="scss" scoped>
.lang-button {
  .language {
    height: 24px;
    text-align: center;
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    white-space: nowrap;
    color: $lightText;
    cursor: pointer;
  }
}
</style>
