<template>
  <div class="icons-list">
    <preview-card name="TwitterIcon">
      <twitter-icon :size="size"
    /></preview-card>
    <preview-card name="DiscordIcon">
      <discord-icon :size="size"
    /></preview-card>
    <preview-card name="MediumIcon"> <medium-icon :size="size" /></preview-card>
    <preview-card name="PreviewIcon">
      <telegram-icon :size="size"
    /></preview-card>
    <preview-card name="GithubIcon"> <github-icon :size="size" /></preview-card>
    <preview-card name="FacebookIcon">
      <facebook-icon :size="size"
    /></preview-card>
    <preview-card name="OpenseaIcon">
      <opensea-icon :size="size"
    /></preview-card>
    <preview-card name="AddIcon"> <add-icon :size="size" /></preview-card>
    <preview-card name="BackIcon"> <back-icon :size="size" /></preview-card>
    <preview-card name="ArrawForwardIcon">
      <arrow-forward-icon :size="size"
    /></preview-card>
    <preview-card name="CloseIcon"> <close-icon :size="size" /></preview-card>
    <preview-card> <add-link-icon :size="size" /></preview-card>
    <preview-card> <align-left-icon :size="size" /></preview-card>
    <preview-card> <align-right-icon :size="size" /></preview-card>
    <preview-card> <align-center-icon :size="size" /></preview-card>
    <preview-card> <bold-icon :size="size" /></preview-card>
    <preview-card> <campaign-icon :size="size" /></preview-card>
    <preview-card> <clear-icon :size="size" /></preview-card>
    <preview-card> <code-icon :size="size" /></preview-card>
    <preview-card> <compass-icon :size="size" /></preview-card>
    <preview-card> <content-icon :size="size" /></preview-card>
    <preview-card> <delete-icon :size="size" /></preview-card>
    <preview-card> <copy-icon :size="size" /></preview-card>
    <preview-card> <drag-handle-icon :size="size" /></preview-card>
    <preview-card> <edit-icon :size="size" /></preview-card>
    <preview-card> <emoji-icon :size="size" /></preview-card>
    <preview-card> <event-icon :size="size" /></preview-card>
    <preview-card> <exit-icon :size="size" /></preview-card>
    <preview-card> <favorite-icon :size="size" /></preview-card>
    <preview-card> <file-icon :size="size" /></preview-card>
    <preview-card> <font-size-icon :size="size" /></preview-card>
    <preview-card> <format-bold-icon :size="size" /></preview-card>
    <preview-card> <forwarding-icon :size="size" /></preview-card>
    <preview-card> <highlight-icon :size="size" /></preview-card>
    <preview-card> <home-icon :size="size" /></preview-card>
    <preview-card> <image-error :size="size" /></preview-card>
    <preview-card> <image-icon :size="size" /></preview-card>
    <preview-card> <info-icon :size="size" /></preview-card>
    <preview-card> <italicl-icon :size="size" /></preview-card>
    <preview-card> <like-icon :size="size" /></preview-card>
    <preview-card> <link-icon :size="size" /></preview-card>
    <preview-card> <live-icon :size="size" /></preview-card>
    <preview-card> <lock-icon :size="size" /></preview-card>
    <preview-card> <main-menu-icon :size="size" /></preview-card>
    <preview-card> <management-icon :size="size" /></preview-card>
    <preview-card> <member-icon :size="size" /></preview-card>
    <preview-card> <order-list-icon :size="size" /></preview-card>
    <preview-card> <owner-icon :size="size" /></preview-card>
    <preview-card> <pen-icon :size="size" /></preview-card>
    <preview-card> <price-icon :size="size" /></preview-card>
    <preview-card> <quote-icon :size="size" /></preview-card>
    <preview-card> <redo-icon :size="size" /></preview-card>
    <preview-card> <relations-icon :size="size" /></preview-card>
    <preview-card> <reload-icon :size="size" /></preview-card>
    <preview-card> <setting-icon :size="size" /></preview-card>
    <preview-card> <share-icon :size="size" /></preview-card>
    <preview-card> <source-icon :size="size" /></preview-card>
    <preview-card> <tag-icon :size="size" /></preview-card>
    <preview-card> <thumb-icon :size="size" /></preview-card>
    <preview-card> <time-icon :size="size" /></preview-card>
    <preview-card> <underline-icon :size="size" /></preview-card>
    <preview-card> <undo-icon :size="size" /></preview-card>
    <preview-card> <unorder-list-icon :size="size" /></preview-card>
    <preview-card> <view-icon :size="size" /></preview-card>
    <preview-card> <me-icon :size="size" /></preview-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IconsList',
  data() {
    return {
      size: 100,
    }
  },
})
</script>
TwitterIcon

<style lang="scss" scoped>
.icons-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  svg {
    fill: $onBackground;
  }
  @include pad {
    grid-template-columns: repeat(6, 1fr);
  }
  @include phone {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
