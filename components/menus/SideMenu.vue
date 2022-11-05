<template>
  <div class="menu-wrapper">
    <div
      v-for="(item, index) of menuData"
      :key="item.id"
      class="menu-group"
      :class="{ [`menu-group-${mode}`]: mode }"
    >
      <div
        class="menu-item"
        :class="{
          selected: localeSelectedKey === item.id,
          'menu-group-item': item.children && item.children.length > 0,
        }"
        :style="childItemStyle"
        @click="onSelect(item)"
      >
        <span>{{ item.label }}</span>
        <span
          v-if="
            ['inline'].includes(mode) &&
            item.children &&
            item.children.length > 0
          "
          class="expand-icon"
          :class="{ expand: expandKey === item.id }"
        >
        </span>
      </div>

      <div
        v-if="item.children && item.children.length > 0"
        class="menu-children"
        :class="{
          'menu-children-expand': mode === 'inline' && expandKey === item.id,
        }"
      >
        <MenusSideMenu
          :menu-data="item.children"
          :selected-key.sync="localeSelectedKey"
          :level="parentLaval ? `${parentLaval}-${index}` : `${index}`"
          :mode="mode"
          @onSelect="onSelect"
        ></MenusSideMenu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type Mode = 'inline' | 'side'

export type MenuWrapper = {
  mode?: Mode
}

export type MenuData = {
  id: string
  label: string
  children?: MenuData[]
}

const exampleData = [
  {
    id: 'title',
    label: 'Title',
    children: [
      {
        id: 'a',
        label: 'a',
      },
      {
        id: 'b',
        label: 'b',
      },
      {
        id: 'c',
        label: 'C',
      },
    ],
  },
  {
    id: 'title2',
    label: 'Title2',
    children: [
      {
        id: 'a2',
        label: 'a',
      },
      {
        id: 'b2',
        label: 'b',
      },
      {
        id: 'c2',
        label: 'C',
      },
    ],
  },
  { id: 'title3', label: 'Label' },
]

export default Vue.extend({
  name: 'SideMenu',
  props: {
    mode: {
      type: String,
      default: 'side',
    } as PropOptions<Mode>,
    menuData: {
      type: Array,
      default() {
        return exampleData
      },
    } as PropOptions<MenuData[]>,
    selectedKey: {
      type: String,
      default: 'a',
    },
  },
  data() {
    return {
      localeSelectedKey: undefined as undefined | string,
      expandKey: undefined as undefined | string,
    }
  },
  computed: {
    parentLaval(): string {
      return this.$attrs.level
    },
    childItemStyle() {
      let style = {}
      const levles = this.parentLaval?.split('-')

      if (this.mode === 'inline' && levles) {
        style = {
          paddingLeft: `${15 * levles.length}px`,
        }
      }

      return style
    },
  },
  watch: {
    selectedKey: {
      immediate: true,
      handler() {
        this.localeSelectedKey = this.selectedKey
      },
    },
    localeSelectedKey() {
      if (this.localeSelectedKey !== this.selectedKey) {
        this.$emit('update:selectedKey', this.localeSelectedKey)
      }
    },
  },
  methods: {
    onSelect(info: any) {
      if (info.children && info.children.length > 0) {
        if (this.expandKey === info.id) {
          this.expandKey = undefined
        } else {
          this.expandKey = info.id
        }
      } else {
        this.localeSelectedKey = info.id
        this.$emit('onSelect', info)
        this.$emit('update:selectedKey', info.id)
      }
    },
  },
})
</script>

<style scoped lang="scss">
@keyframes children {
  from {
    max-height: 0px;
    opacity: 0.5;
  }
  to {
    max-height: 3000px;
    opacity: initial;
  }
}

.menu-wrapper {
  width: 100%;

  .menu-group {
    width: 100%;
    position: relative;
    .menu-item {
      height: 40px;
      line-height: 40px;
      font-weight: 400;
      cursor: pointer;
      transition: 0.2s;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      color: $onBackground;
      padding: 0 10px;

      &.selected {
        background-color: lighten($primary, 10) !important;
        color: $onPrimary;
      }

      .expand-icon {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-right: 20px;
        &::before {
          content: '';
          width: 10px;
          height: 2px;
          background-color: black;
          display: block;
          transform: rotateZ(45deg);
          transition: all 0.3s linear;
          position: absolute;
          top: 0;
          left: -2px;
          border-radius: 2px;
        }
        &::after {
          content: '';
          width: 10px;
          height: 2px;
          background-color: black;
          display: block;
          transform: rotateZ(-45deg);
          transition: all 0.3s linear;
          position: absolute;
          top: 0;
          right: -2px;
          border-radius: 2px;
        }

        &.expand {
          &::before {
            transform: rotateZ(-45deg);
          }
          &::after {
            transform: rotateZ(45deg);
          }
        }
      }
    }

    &.menu-group-side {
      .menu-item {
        /* &:hover {
          color: $primary;
        } */

        &.menu-group-item {
          color: $onBackground;
          font-weight: 500;

          /* &:hover {
            color: #12121275;
          } */
        }
      }

      .menu-children {
        border-top: 1px solid rgba(151, 150, 150, 0.645);
        padding-top: 5px;
        padding-bottom: 10px;
        .menu-item {
          padding-left: 10px;
        }
      }
    }

    &.menu-group-inline {
      .menu-children {
        overflow: hidden;
        height: 0px;
        transition: all 0.3s linear;

        &.menu-children-expand {
          height: initial !important;
          /* animation: children 0.5s; */
        }

        .menu-item {
          background-color: rgb(244 242 242);
        }
      }
    }
  }
}
</style>
