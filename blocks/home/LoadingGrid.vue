<template>
  <div class="home-loading-grid">
    <home-grid title="Loading">
      <preview-card type="loading" name="DotLoading" :ratio="2">
        <dot-loading></dot-loading>
      </preview-card>
      <preview-card
        type="loading"
        name="LineLoading"
        :ratio="2"
        class="line-table"
      >
        <line-loading :has-stop="hasStop"></line-loading>
        <primary-button @click="setDefault">Has no pause</primary-button>
        <primary-button @click="setHasStop">Has pause</primary-button>
      </preview-card>
      <preview-card
        type="loading"
        name="StatusLoading"
        :ratio="2"
        class="status-table"
      >
        <status-loading :status="statusControl"></status-loading>
        <primary-button @click="setSuccess">Success</primary-button>
        <primary-button @click="setFail">Fail</primary-button>
        <primary-button @click="setLoading">Loading</primary-button>
      </preview-card>
    </home-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HomeLoadingGrid',
  data() {
    return {
      statusControl: 'loading',
      hasStop: false,
    }
  },
  methods: {
    setSuccess() {
      this.statusControl = 'success'
    },
    setFail() {
      this.statusControl = 'fail'
    },
    setLoading() {
      this.statusControl = 'loading'
    },
    setDefault() {
      this.hasStop = false
    },
    setHasStop() {
      this.hasStop = true
    },
  },
})
</script>

<style scoped lang="scss">
.status-table {
  @include flexC;
  width: 200px;
  min-height: 320px;
  .primary-button {
    width: 100px;
    margin-bottom: 10px;
  }
}
.line-table {
  max-width: 250px;
  min-height: 300px;
  @include flexC;
  .primary-button {
    width: 150px;
    margin-bottom: 10px;
  }
}
</style>
