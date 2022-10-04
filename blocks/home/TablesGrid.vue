<template>
  <div class="home-tables-grid">
    <h2 class="title">Tables</h2>
    <div class="grid">
      <preview-card type="tables" name="TableExample" :ratio="2">
        <table-example> </table-example>
      </preview-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeTablesGrid',
})
</script>

<style lang="scss" scoped>
.home-tables-grid {
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
