<template>
  <div class="home-tabs-grid">
    <h2 class="title">Tabs</h2>
    <div class="grid">
      <preview-card type="tabs" name="PathBar" :ratio="2">
        <path-bar
          :tabs="tabs"
          :active-tab="activeTab"
          @select="change"
        ></path-bar>
      </preview-card>
      <preview-card type="tabs" name="SwitchButton" :ratio="2">
        <switch-button
          :tabs="tabs"
          :active-tab="activeTab"
          @select="change"
        ></switch-button>
      </preview-card>
      <preview-card type="tabs" name="TabBar" :ratio="2">
        <tab-bar
          :tabs="tabs"
          :active-tab="activeTab"
          @select="change"
        ></tab-bar>
      </preview-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeTabsGrid',
  data() {
    return {
      activeTab: 'test1',
    }
  },
  computed: {
    tabs() {
      return [
        {
          key: 'test1',
          name: 'test1',
        },
        {
          key: 'test2',
          name: 'test2',
        },
        {
          key: 'test3',
          name: 'test3',
        },
      ]
    },
  },
  methods: {
    change(key: string) {
      this.activeTab = key
    },
  },
})
</script>

<style lang="scss" scoped>
.home-tabs-grid {
  .title {
    color: $primary;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    svg {
      fill: $onBackground;
    }
    @include pad {
      grid-template-columns: repeat(3, 1fr);
    }
    @include phone {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
