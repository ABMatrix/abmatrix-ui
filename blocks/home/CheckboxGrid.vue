<template>
  <div class="checkbox-grid">
    <HomeGrid title="Checkbox">
      <preview-card type="checkbox" name="Checkbox" :ratio="2">
        <Checkbox v-model="value" />
      </preview-card>
    </HomeGrid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CheckboxGrid',
  data() {
    return {
      value: true,
    }
  },
})
</script>

<style scoped lang="scss">
.checkbox-grids {
}
</style>
