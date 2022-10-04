<template>
  <div class="layout-header">
    <div class="left-panel">
      <nuxt-link :to="localePath('/')">
        <span>ABMatrix UI</span>
      </nuxt-link>
      <ul>
        <li>
          <nuxt-link :to="localePath('/')">
            {{ $t('layoutHeader.component') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/icons')">
            {{ $t('layoutHeader.icon') }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="right-panel">
      <theme-switch></theme-switch>
      <language-switch></language-switch>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutHeader',
})
</script>

<style lang="scss" scoped>
.layout-header {
  @include flexRsb;
  height: 80px;
  width: 100%;
  z-index: 100;
  padding: 0 20px;
  position: fixed;
  background: $secondary;
  color: $onSecondary;
  border-bottom: 1px $border solid;
  .left-panel {
    @include flexR;
    span {
      font-size: 24px;
      margin-right: 20px;
    }
    ul li {
      font-size: 16px;
      display: inline;
      margin-right: 16px;
    }
  }
  .right-panel {
    @include flexR;
    justify-content: flex-end;
    gap: 20px;
  }
}
</style>
