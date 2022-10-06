<template>
  <client-only>
    <vue-final-modal
      ref="dialog"
      v-slot="{ close, params }"
      v-model="show"
      :ssr="true"
      attach="body"
      :name="name"
      classes="dialog-container"
      overlay-class="dialog-overlay"
      :content-class="['dialog-content', { fullscreen }]"
      :click-to-close="false"
      :lock-scroll="true"
      v-on="$listeners"
    >
      <div class="container" :class="{ 'fullscreen-container': fullscreen }">
        <div class="header">
          <div class="title">{{ getTitle(params) }}</div>
          <div
            class="icon"
            @click.stop="
              () => {
                close()
              }
            "
          >
            <icon-wrapper>
              <close-icon class="close-icon" />
            </icon-wrapper>
          </div>
        </div>
        <overlay-scrollbars
          :options="{ scrollbars: { autoHide: 'scroll' } }"
          style="width: 100%; height: 100%"
          class="overlay-scrollbars"
        >
          <div class="content">
            <slot name="content" :close="close" :params="params"></slot>

            <div v-if="loading" class="spin-loading" @click.stop>
              <spinner-loader :size="40" />
            </div>
          </div>
        </overlay-scrollbars>

        <div class="footer">
          <slot name="footer" :close="close" :params="params"></slot>
        </div>
      </div>
    </vue-final-modal>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BasicDialog',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    beforeClose: {
      type: Function,
      default: () => {},
    },
    // 在移动页面全屏显示
    fullscreen: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    getTitle(params: any) {
      return params.title ?? this.title
    },
  },
})
</script>

<style lang="scss" scoped>
:deep .dialog-overlay {
  position: fixed !important;
  backdrop-filter: blur(4px);
}
:deep .dialog-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed !important;

  @include phone() {
    .fullscreen {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style lang="scss" scoped>
.dialog-content {
  overflow: auto;
  .container {
    width: 800px;
    background-color: $surface;
    border-radius: $dialogRadius;
    @include flexCc();
    @include phone {
      width: min(510px, calc(100vw - 42px));
      margin: 0;
      @include flexC();
      &.fullscreen-container {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    }
    .header {
      width: calc(100% - 28px);
      text-align: center;
      margin: 0 14px;
      padding: 30px 4px 14px 4px;
      position: relative;
      /* border-bottom: 1px solid $devider; */

      .title {
        font-size: 16px;
        font-weight: 400;
        color: $onBackground;
        line-height: 21px;
        overflow: hidden;
      }
      .icon {
        position: absolute;
        width: 24px;
        height: 24px;
        right: 0px;
        top: 15px;
        bottom: 0;
        cursor: pointer;
        @include flexCc;
      }
    }
    .overlay-scrollbars {
      max-height: calc(100vh - 60px - 89px) !important;
    }
    .content {
      padding: 0 20px;
      width: 100%;
      height: auto;
      position: relative;

      @include phone {
        height: auto;
      }

      .spin-loading {
        width: 100%;
        height: 100%;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        /* background-color: #ffff; */
        @include flexCc;

        &::after {
          opacity: 0.4;
          pointer-events: auto;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 10;
          display: none \9;
          width: 100%;
          height: 100%;
          background: #fff;
          transition: all 0.3s;
          content: '';
          pointer-events: none;
        }
      }
    }
    .footer {
      padding: 15px 20px 24px 20px;
      width: 100%;
      border-radius: $dialogRadius;
      @include flexRsa();
      @include phone {
        position: sticky;
        bottom: 0;
        background: $surface;
        z-index: 101;
      }
    }
  }
}
</style>
