import Vue from 'vue'
import vClickOutside from 'v-click-outside'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal)
Vue.directive('ClickOutside', vClickOutside.directive)
