<template>
  <div class="homepage">
    <HomeMenusGrid />
    <HomeButtonsGrid />
    <HomeTabsGrid />
    <HomeNavsGrid />
    <HomeTablesGrid />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
})
</script>

<style lang="scss" scoped>
.homepage {
  padding: 100px 20px 20px 20px;
}
</style>
