<template>
  <div class="nav-bar">
    <nuxt-link
      v-for="path in navList"
      :key="path.name"
      class="nav-item"
      :class="{
        active: $helpers.equalPath($route, path.name),
      }"
      :to="localePath(path.path)"
    >
      <div class="text">
        <span>{{ path.display }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar',
  computed: {
    pathName() {
      const path = this.$route.matched[0].path
      return path
    },
    navList() {
      return [
        {
          name: 'index',
          path: '/',
          display: this.$t('layoutHeader.component'),
        },
        {
          name: 'icons',
          path: '/icons',
          display: this.$t('layoutHeader.icon'),
        },
        {
          name: 'svg2vue',
          path: '/svg2vue',
          display: this.$t('layoutHeader.svg2vue'),
        },
      ]
    },
  },
  methods: {
    goPage(name: string) {
      this.$router.push(this.localePath(`/${name.toLowerCase()}`))
    },
  },
})
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 100%;
  @include flexRc;
  @include phone {
    width: 100%;
  }
  .nav-item {
    color: $onSurface;
    height: 100%;
    padding: 0 37px;
    @include flexCc;
    cursor: default;
    position: relative;
    white-space: nowrap;

    &.active {
      .text::after {
        transform: scaleX(1);
        transform-origin: bottom center;
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
      }
      .text {
        color: $primary;
      }
    }
    &:hover {
      .text {
        color: $primary;
      }
    }
    .text {
      cursor: pointer;
      height: 100%;
      text-align: center;
      position: relative;
      @include flexCc;
      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        bottom: -2px;
        background-color: $primary;
        border-radius: 1px;
        left: 0;
        transform: scaleX(0);
        @include phone {
          top: -2px;
          bottom: 0px;
        }
      }
    }
  }
}
</style>
