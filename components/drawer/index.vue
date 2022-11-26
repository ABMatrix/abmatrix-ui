<template>
  <div class="drawer-index" @click.stop="open">
    <slot :open="open" :close="close" />
    <template v-if="exportBody">
      <div
        v-show="visible"
        ref="container"
        class="drawer-container"
        @click="close"
      >
        <div
          :style="bodyStyle"
          class="drawer-body"
          :class="{ [`drawer-body-${placement}`]: true }"
          @click.stop
        >
          <div class="body-content">
            <button @click="close">close</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { CSSProperties } from 'vue/types/jsx'

type PlacementType = 'left' | 'right' | 'top' | 'bottom'

export default Vue.extend({
  name: 'DrawerIndex',
  props: {
    width: {
      type: Number,
      default: 300,
    },
    placement: {
      type: String,
      default: 'left',
    } as PropOptions<PlacementType>,
  },
  data() {
    return {
      exportBody: false,
      visible: false,
      count: 1,
    }
  },
  computed: {
    bodyStyle(): CSSProperties {
      switch (this.placement) {
        case 'left':
          return {
            width: `${this.width}px`,
            height: '100%',
          }
        case 'right':
          return {
            width: `${this.width}px`,
            height: '100%',
          }
        case 'top':
          return {
            width: '100%',
            height: `${this.width}px`,
          }
        case 'bottom':
          return {
            width: '100%',
            height: `${this.width}px`,
          }
        default:
          return {}
      }
    },
  },
  methods: {
    open() {
      if (!this.exportBody) {
        this.exportBody = true

        setTimeout(() => {
          const el = this.$refs.container as Element
          document.body.insertBefore(el, null)
          this.visible = true
        }, 100)
      } else {
        this.visible = true
      }
    },
    close() {
      this.visible = false
    },
  },
})
</script>

<style scoped lang="scss">
@keyframes bodyLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes bodyRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes bodyTop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}

@keyframes bodyBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}

.drawer-index {
  display: inline-block;
}

.drawer-container {
  width: 100%;
  height: 100%;
  background-color: #00000073;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000000000;
  transition: 0.2s linear;

  .drawer-body {
    position: absolute;

    &.drawer-body-left {
      left: 0px;
      top: 0px;
      .body-content {
        animation: bodyLeft 0.2s linear;
      }
    }

    &.drawer-body-right {
      right: 0px;
      top: 0px;

      .body-content {
        animation: bodyRight 0.2s linear;
      }
    }
    &.drawer-body-top {
      left: 0px;
      top: 0px;
      .body-content {
        animation: bodyTop 0.2s linear;
      }
    }
    &.drawer-body-bottom {
      bottom: 0px;
      left: 0px;
      .body-content {
        animation: bodyBottom 0.2s linear;
      }
    }

    .body-content {
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }
}
</style>
