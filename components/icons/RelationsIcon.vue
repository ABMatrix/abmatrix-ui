<template>
  <svg
    focusable="false"
    class=""
    viewBox="0 0 24 24"
    :fill="color"
    :width="size"
    :height="size"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M.775 20.4v-4.15q0-.9.625-1.512.625-.613 1.5-.613h3.325q.5 0 .938.225.437.225.687.65.75 1 1.838 1.562 1.087.563 2.312.563 1.25 0 2.338-.563Q15.425 16 16.15 15q.3-.425.725-.65.425-.225.9-.225H21.1q.9 0 1.525.613.625.612.625 1.512v4.15h-7.275v-2.325q-.875.575-1.887.887-1.013.313-2.088.313-1.05 0-2.062-.325-1.013-.325-1.888-.9v2.35ZM12 16q-.925 0-1.75-.425T8.875 14.4q-.45-.675-1.125-1.037Q7.075 13 6.25 13q.625-.925 2.4-1.475t3.35-.55q1.575 0 3.363.55 1.787.55 2.387 1.475-.8 0-1.475.363-.675.362-1.15 1.037-.525.775-1.35 1.187Q12.95 16 12 16Zm-8-3.125q-1.275 0-2.162-.887Q.95 11.1.95 9.825q0-1.3.888-2.188Q2.725 6.75 4 6.75q1.3 0 2.175.887.875.888.875 2.188 0 1.275-.875 2.163-.875.887-2.175.887Zm16 0q-1.275 0-2.163-.887-.887-.888-.887-2.163 0-1.3.887-2.188.888-.887 2.163-.887 1.3 0 2.175.887.875.888.875 2.188 0 1.275-.875 2.163-.875.887-2.175.887ZM12 9.75q-1.275 0-2.162-.9-.888-.9-.888-2.175t.888-2.163q.887-.887 2.162-.887 1.3 0 2.175.887.875.888.875 2.163t-.875 2.175q-.875.9-2.175.9Z"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RelationsIcon',
  props: {
    size: {
      type: Number,
      default: 18,
    },
    color: {
      type: String,
      default: '#757575',
    },
  },
})
</script>
