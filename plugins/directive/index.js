import Vue from 'vue'
import vClickOutside from 'v-click-outside'
import throttle from './throttle'

Vue.directive('ClickOutside', vClickOutside.directive)
Vue.directive('throttle', throttle)
