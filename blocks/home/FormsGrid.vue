<template>
  <div class="home-forms-grid">
    <h2 class="title">Forms</h2>
    <div class="grid">
      <preview-card type="forms" name="FormBatch" :ratio="2">
        <form-batch></form-batch>
      </preview-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeFormsGrid',
})
</script>

<style lang="scss" scoped>
.home-forms-grid {
  .title {
    color: $primary;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    svg {
      fill: $onBackground;
    }
    @include phone {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
