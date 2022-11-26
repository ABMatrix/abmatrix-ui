<template>
  <div class="drawer-grid">
    <preview-card type="drawer" name="Drawer" :ratio="2">
      <Drawer placement="bottom">
        <template #default="{ open }">
          <primary-button @click="open">{{
            $t('homeButtonsGrid.button')
          }}</primary-button>
        </template>
      </Drawer>
    </preview-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DrawerGrid',
  data() {
    return {
      parameters: [
        {
          title: '方向',
          properties: [
            { id: 'left', label: 'Left' },
            { id: 'right', label: 'Right' },
            { id: 'top', label: 'Top' },
            { id: 'bottom', label: 'Bottom' },
          ],
        },
      ],
    }
  },
})
</script>

<style scoped lang="scss">
.menu-drawer-grid {
}
</style>
