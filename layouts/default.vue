<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <Nuxt />
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
})
</script>
