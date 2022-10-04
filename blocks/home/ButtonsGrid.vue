<template>
  <div class="home-buttons-grid">
    <home-grid title="Buttons">
      <preview-card type="buttons" name="PrimaryButton" :ratio="2">
        <primary-button>{{ $t('homeButtonsGrid.button') }}</primary-button>
      </preview-card>
      <preview-card type="buttons" name="PlainButton" :ratio="2">
        <plain-button>
          {{ $t('homeButtonsGrid.button') }}
        </plain-button>
      </preview-card>
      <preview-card type="buttons" name="TextButton" :ratio="2">
        <text-button>
          {{ $t('homeButtonsGrid.button') }}
        </text-button>
      </preview-card>
      <preview-card type="buttons" name="LangButton" :ratio="2">
        <lang-button> </lang-button>
      </preview-card>
      <preview-card type="buttons" name="ThemeButton" :ratio="2">
        <theme-button> </theme-button>
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
