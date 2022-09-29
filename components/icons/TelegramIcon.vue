<template>
  <svg :width="size" :height="size" viewBox="0 0 30 30">
    <title>Telegram</title>
    <g transform="translate(3.000000, 5.400000)">
      <path
        d="M8.90981022,18.6 C8.20362242,18.6 8.32329851,18.3362455 8.07999011,17.6763726 L6,10.9413866 L22,1.6"
      ></path>
      <path
        d="M9,18.6 C9.54572417,18.6 9.78596144,18.3311522 10.092437,18.0100285 L13,14.9620199 L9.37073653,12.6"
      ></path>
      <path
        d="M9.40148969,12.7990451 L18.2945689,19.3272634 C19.3099204,19.8838716 20.0431743,19.596622 20.2952616,18.390969 L23.9165154,1.44125731 C24.2886443,-0.0367360707 23.3523201,-0.704665835 22.3819841,-0.268324829 L1.12062249,7.87902679 C-0.329879743,8.45750167 -0.322877311,9.26259559 0.856531051,9.62140905 L6.31342047,11.3111123 L18.941793,3.39634339 C19.536999,3.03852387 20.0851888,3.2303549 19.6360333,3.6269382"
      ></path>
    </g>
    <rect opacity="0" x="0" y="0" width="30" height="30"></rect>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TelegramIcon',
  props: {
    color: {
      type: String,
      default: '#8D8D8D',
    },
    size: {
      type: [String, Number],
      default: 18,
    },
  },
})
</script>
<style lang="scss" scoped>
svg {
  fill: #8d8d8d;
}
svg:hover {
  fill: white;
}
</style>
