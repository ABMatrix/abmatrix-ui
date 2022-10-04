<template>
  <div class="icons-grid">
    <preview-card name="TwitterIcon">
      <twitter-icon :size="size"
    /></preview-card>
    <preview-card name="DiscordIcon">
      <discord-icon :size="size"
    /></preview-card>
    <preview-card name="MediumIcon"> <medium-icon :size="size" /></preview-card>
    <preview-card name="TelegramIcon">
      <telegram-icon :size="size"
    /></preview-card>
    <preview-card name="GithubIcon"> <github-icon :size="size" /></preview-card>
    <preview-card name="FacebookIcon">
      <facebook-icon :size="size"
    /></preview-card>
    <preview-card name="AddIcon"> <add-icon :size="size" /></preview-card>
    <preview-card name="BackIcon"> <back-icon :size="size" /></preview-card>
    <preview-card name="ArrawForwardIcon">
      <arrow-forward-icon :size="size"
    /></preview-card>
    <preview-card name="CloseIcon"> <close-icon :size="size" /></preview-card>
    <preview-card name="AddLinkIcon">
      <add-link-icon :size="size"
    /></preview-card>
    <preview-card name="AlignLeftIcon">
      <align-left-icon :size="size"
    /></preview-card>
    <preview-card name="AlignRightIcon">
      <align-right-icon :size="size"
    /></preview-card>
    <preview-card name="AlignCenterIcon">
      <align-center-icon :size="size"
    /></preview-card>
    <preview-card name="BoldIcon"> <bold-icon :size="size" /></preview-card>
    <preview-card name="CampaignIcon">
      <campaign-icon :size="size"
    /></preview-card>
    <preview-card name="ClearIcon"> <clear-icon :size="size" /></preview-card>
    <preview-card name="CodeIcon"> <code-icon :size="size" /></preview-card>
    <preview-card name="CompassIcon">
      <compass-icon :size="size"
    /></preview-card>
    <preview-card name="ContentIcon">
      <content-icon :size="size"
    /></preview-card>
    <preview-card name="DeleteIcon"> <delete-icon :size="size" /></preview-card>
    <preview-card name="CopyIcon"> <copy-icon :size="size" /></preview-card>
    <preview-card name="LightModeIcon">
      <light-mode-icon :size="size"
    /></preview-card>
    <preview-card name="DarkModeIcon">
      <dark-mode-icon :size="size"
    /></preview-card>
    <preview-card name="DragHandleIcon">
      <drag-handle-icon :size="size"
    /></preview-card>
    <preview-card name="EditIcon"> <edit-icon :size="size" /></preview-card>
    <preview-card name="EmojiIcon"> <emoji-icon :size="size" /></preview-card>
    <preview-card name="EventIcon"> <event-icon :size="size" /></preview-card>
    <preview-card name="ExitIcon"> <exit-icon :size="size" /></preview-card>
    <preview-card name="FavoriteIcon">
      <favorite-icon :size="size"
    /></preview-card>
    <preview-card name="FileIcon"> <file-icon :size="size" /></preview-card>
    <preview-card name="FontSizeIcon">
      <font-size-icon :size="size"
    /></preview-card>
    <preview-card name="FormatBoldIcon">
      <format-bold-icon :size="size"
    /></preview-card>
    <preview-card name="ForwardingIcon">
      <forwarding-icon :size="size"
    /></preview-card>
    <preview-card name="HighlightIcon">
      <highlight-icon :size="size"
    /></preview-card>
    <preview-card name="HomeIcon"> <home-icon :size="size" /></preview-card>
    <preview-card name="ImageIcon"> <image-error :size="size" /></preview-card>
    <preview-card name="ImageIcon"> <image-icon :size="size" /></preview-card>
    <preview-card name="InfoIcon"> <info-icon :size="size" /></preview-card>
    <preview-card name="ItalicIcon"> <italic-icon :size="size" /></preview-card>
    <preview-card name="LinkIcon"> <link-icon :size="size" /></preview-card>
    <preview-card name="LiveIcon"> <live-icon :size="size" /></preview-card>
    <preview-card name="LockIcon"> <lock-icon :size="size" /></preview-card>
    <preview-card name="MainMenuIcon">
      <main-menu-icon :size="size"
    /></preview-card>
    <preview-card name="ManagementIcon">
      <management-icon :size="size"
    /></preview-card>
    <preview-card name="MemberIcon"> <member-icon :size="size" /></preview-card>
    <preview-card name="OrderListIcon">
      <order-list-icon :size="size"
    /></preview-card>
    <preview-card name="OwnerIcon"> <owner-icon :size="size" /></preview-card>
    <preview-card name="PenIcon"> <pen-icon :size="size" /></preview-card>
    <preview-card name="PriceIcon"> <price-icon :size="size" /></preview-card>
    <preview-card name="QuoteIcon"> <quote-icon :size="size" /></preview-card>
    <preview-card name="RedoIcon"> <redo-icon :size="size" /></preview-card>
    <preview-card name="RelationIcon">
      <relations-icon :size="size"
    /></preview-card>
    <preview-card name="ReloadIcon"> <reload-icon :size="size" /></preview-card>
    <preview-card name="SettingIcon">
      <setting-icon :size="size"
    /></preview-card>
    <preview-card name="ShareIcon"> <share-icon :size="size" /></preview-card>
    <preview-card name="SourceIcon"> <source-icon :size="size" /></preview-card>
    <preview-card name="TagIcon"> <tag-icon :size="size" /></preview-card>
    <preview-card name="ThumbIcon"> <thumb-icon :size="size" /></preview-card>
    <preview-card name="TimeIcon"> <time-icon :size="size" /></preview-card>
    <preview-card name="UnderlineIcon">
      <underline-icon :size="size"
    /></preview-card>
    <preview-card name="UndoIcon"> <undo-icon :size="size" /></preview-card>
    <preview-card name="UnorderListIcon">
      <unorder-list-icon :size="size"
    /></preview-card>
    <preview-card name="ViewIcon"> <view-icon :size="size" /></preview-card>
    <preview-card name="MeIcon"> <me-icon :size="size" /></preview-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IconsGrid',
  computed: {
    size() {
      return this.$breakpoints.lLg ? 100 : this.$breakpoints.lMd ? 80 : 60
    },
  },
})
</script>
TwitterIcon

<style lang="scss" scoped>
.icons-grid {
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
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
