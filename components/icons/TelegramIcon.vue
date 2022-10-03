<template>
  <div class="telegram-icon">
    <svg
      :width="size"
      :height="size"
      :fill="color"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>Telegram</title>
      <g transform="translate(3.000000, 5.000000)" fill-rule="nonzero">
        <path
          d="M9.48033073,18.7 C8.78631859,18.7 8.9039313,18.4230578 8.66481787,17.7301912 L6.62068966,10.6584559 L22.3448276,0.85"
        ></path>
        <path
          d="M9.10344828,18.7 C9.66799052,18.7 9.91651184,18.4333926 10.2335555,18.1149449 L13.2413793,15.0923364 L9.48696882,12.75"
        ></path>
        <path
          d="M9.40148969,13.463026 L18.2945689,20.1218087 C19.3099204,20.689549 20.0431743,20.3965545 20.2952616,19.1667884 L23.9165154,1.87808246 C24.2886443,0.370529208 23.3523201,-0.310759152 22.3819841,0.134308674 C15.5620934,2.79995772 10.4471754,4.79919451 7.03723007,6.13201903 C5.72242838,6.64592754 3.75022586,7.4167903 1.12062249,8.44460732 C-0.329879743,9.03465171 -0.322877311,9.8558475 0.856531051,10.2218372 L6.31342047,11.9453346 L18.941793,3.87227026 C19.536999,3.50729435 20.0851888,3.702962 19.6360333,4.10747696"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TelegramIcon',
  props: {
    size: {
      type: Number,
      default: 30,
    },
    color: {
      type: String,
      default: '#40a9ff',
    },
  },
})
</script>

<style lang="scss" scoped>
.telegram-icon {
  cursor: pointer;
  @include flexRc();
}
</style>
