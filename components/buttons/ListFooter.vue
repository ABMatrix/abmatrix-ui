<template>
  <div class="list-footer" :class="{ compact }">
    <div v-if="loading" class="loading">
      <spinner-loader :size="spinnerSize"></spinner-loader>
    </div>
    <div v-else-if="noData" class="status">
      <!-- <img v-if="showImage" src="~/assets/img/loading.png" alt="loading" /> -->
      <div>{{ noDataTip }}</div>
    </div>
    <div v-else-if="noMore" class="status">
      {{ $t('listFooter.noMoreData') }}
    </div>
    <div v-else-if="loadMore" class="load-more" @click="$emit('loadMore')">
      {{ $t('listFooter.loadMore') }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ListFooter',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    noMore: {
      type: Boolean,
      default: false,
    },
    noData: {
      type: Boolean,
      default: false,
    },
    loadMore: {
      type: Boolean,
      default: false,
    },
    noDataTip: {
      type: String,
      default() {
        return this.$t('listFooter.noData')
      },
    },
    showImage: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    spinnerSize() {
      return this.compact ? 20 : 30
    },
  },
})
</script>

<style lang="scss" scoped>
.list-footer {
  width: 100%;
  margin: 30px 0px;

  &.compact {
    margin: 5px 0px;
  }
  .loading {
    width: 100%;
    @include flexRc();
  }
  .status {
    width: 100%;
    @include flexCc();
    color: $lightText;
    img {
      width: 145px;
      height: 145px;
    }
  }

  .load-more {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    height: 25px;
    color: $primary;
    line-height: 21px;
    cursor: pointer;
  }
}
</style>
