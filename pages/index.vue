<template>
  <div class="homepage">
    <div class="home-side">
      <MenusSideMenu
        :menu-data="menuList"
        :selected-key="selectedKey"
        @onSelect="onSelect"
      />
    </div>
    <div class="home-content">
      <component :is="componentName" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
  data() {
    return {
      menuList: [
        { id: 'checkbox', component: 'home-checkbox-grid', label: 'Checkbox' },
        { id: 'menus', component: 'home-menus-grid', label: 'Menu' },
        { id: 'buttons', component: 'home-buttons-grid', label: 'Buttons' },
        { id: 'tabs', component: 'home-tabs-grid', label: 'Tabs' },
        { id: 'forms', component: 'home-forms-grid', label: 'Forms' },
        { id: 'navs', component: 'home-navs-grid', label: 'Navs' },
        { id: 'tables', component: 'home-tables-grid', label: 'Tables' },
        { id: 'loading', component: 'home-loading-grid', label: 'Loading' },
        {
          id: 'menuDrawer',
          component: 'home-menu-drawer-grid',
          label: 'Menu Drawer',
        },
      ],
      selectedKey: undefined as undefined | string,
    }
  },
  computed: {
    componentName(): string {
      return (
        this.menuList.find((item) => item.id === this.selectedKey)?.component ||
        this.menuList[0].component
      )
    },
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler() {
        const query = this.$route.query

        if (query?.component) {
          this.selectedKey = query?.component as string
        } else {
          this.selectedKey = this.menuList[0].id
        }
      },
    },
  },
  methods: {
    onSelect(info: any) {
      this.$router.push({ query: { component: info.id } })
    },
  },
})
</script>

<style lang="scss" scoped>
.homepage {
  width: 100%;
  padding-top: 80px;
  @include flexRc;
  justify-content: flex-start;
  align-items: flex-start;

  .home-side {
    width: 200px;
    height: calc(100vh - 80px);
    padding: 20px 0;
    border-right: 1px solid $border;
    overflow-y: auto;
    position: sticky;
    top: 80px;
  }

  .home-content {
    width: calc(100% - 200px);
    min-height: 100%;
    padding: 20px;
  }
}
</style>
