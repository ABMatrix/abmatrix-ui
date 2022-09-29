<template>
  <div class="language-switch">
    <div class="button" @click.stop="switchLangs">
      <div v-if="$i18n.locale === 'zh-TW'" class="text">繁体中文</div>
      <div v-else class="text">English</div>
    </div>
    <div
      v-click-outside="onClickOutside"
      class="menu"
      :class="{ active: showLanguage }"
    >
      <nuxt-link :to="switchLocalePath('zh-TW')">
        <div class="option">繁体中文</div>
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('en-US')">
        <div class="option" style="margin-top: 9px">English</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LanguageSwitch',
  data() {
    return {
      languageList: ['繁体中文', 'English'],
      showLanguage: false,
    }
  },
  methods: {
    switchLangs() {
      this.showLanguage = !this.showLanguage
    },
    onClickOutside() {
      this.showLanguage = false
    },
  },
})
</script>

<style lang="scss" scoped>
.language-switch {
  position: relative;
  border-radius: 20px;
  border: 2px solid #ffffff;
  width: 100px;
  height: 40px;
  padding: 4px 0 6px 0;
  &:hover {
    background: #ffffff50;
  }
  .button {
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: white;
    cursor: pointer;
  }
  .menu {
    margin-top: 20px;
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 10px;
    opacity: 0;
    padding: 19px;
    transform-origin: top center;
    transform: scaleY(0);
    transition: transform 0.5s ease, opacity 0.3s ease;
    &.active {
      opacity: 1;
      transform: scaleY(1);
    }
    .option {
      height: 28px;
      font-size: 14px;
      font-weight: bold;
      white-space: nowrap;
      text-align: center;
      color: black;
      cursor: pointer;
      animation-delay: 1s;
      animation: fadeInText ease 1s;
      animation-iteration-count: 1;
    }
  }
}
</style>
