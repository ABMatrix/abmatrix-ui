<template>
  <div class="home-buttons-grid">
    <home-grid title="Buttons">
      <preview-card type="buttons" name="PrimaryButton">
        <primary-button>{{ $t('homeButtonsGrid.button') }}</primary-button>
      </preview-card>
      <preview-card type="buttons" name="PlainButton">
        <plain-button>
          {{ $t('homeButtonsGrid.button') }}
        </plain-button>
      </preview-card>
      <preview-card type="buttons" name="TextButton">
        <text-button>
          {{ $t('homeButtonsGrid.button') }}
        </text-button>
      </preview-card>
    </home-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeButtonsGrid',
})
</script>

<style lang="scss" scoped></style>
