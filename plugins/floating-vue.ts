import Vue from 'vue'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

Vue.use(FloatingVue, {
  themes: {
    'dapp-menu': {
      triggers: ['click'],
      autoHide: true,
      distance: 0,
      placement: 'bottom-end',
    },
    'dapp-dropdown': {
      triggers: ['click'],
      placement: 'bottom-end',
      distance: 6,
      autoHide: true,
      disposeTimeout: 10000000,
    },
    'dapp-emoji': {
      triggers: ['click'],
      autoHide: true,
      distance: 0,
      placement: 'bottom-start',
    },
    'dapp-tooltip': {
      showTriggers: ['hover', 'click'],
      hideTriggers: ['blur', 'click'],
      autoHide: false,
      distance: 4,
      placement: 'top',
    },
    'dapp-tooltip-bottom': {
      triggers: ['hover'],
      autoHide: true,
      placement: 'bottom',
    },
  },
})
