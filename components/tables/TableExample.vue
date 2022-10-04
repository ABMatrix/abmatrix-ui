<template>
  <div class="clients-table">
    <div class="table header">
      <div v-for="title in header" :key="title">{{ title }}</div>
    </div>
    <div v-if="$fetchState.pending" class="loading">
      <spinner-loader></spinner-loader>
    </div>
    <div v-else-if="noData">
      <list-footer :no-data="true" :show-image="true"></list-footer>
    </div>
    <template v-else>
      <div v-for="(d, index) in tableData" :key="d.agentAddress" e-else>
        <div class="table body">
          <div>{{ `# ${getIndex(index)}` }}</div>
          <div>
            {{ d.agentAddress }}
          </div>
          <div>
            {{ d.agentRakeBackRatio }}
          </div>
          <div>{{ d.agentInvitationCode }}</div>
        </div>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="pageCount"
        :page-size="queryParameter.pageSize"
        :current-page="queryParameter.pageNo"
        @current-change="updatePage"
        @pre-click="preClick"
        @next-click="nextClick"
      >
      </el-pagination>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
type UserAgent = {
  /** @description 代理ID */
  agentID?: string
  /** @description 代理地址 */
  agentAddress?: string
  /** @description 代理返佣比例 */
  agentRakeBackRatio?: string
  /** @description 代理邀请码 */
  agentInvitationCode?: string
}

export default Vue.extend({
  name: 'AgentInvitationTable',

  data() {
    return {
      header: [
        this.$t('clientsTable.index'),
        this.$t('clientsTable.address'),
        this.$t('clientsTable.ratio'),
        this.$t('clientsTable.invitationCode'),
      ],
      tableData: [] as UserAgent[],
      queryParameter: {
        pageNo: 1,
        pageSize: 10,
      },
      pageCount: 0,
    }
  },
  async fetch() {
    this.tableData = []
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // const res = await this.$api.yapi.userAgents(this.queryParameter)
    const res = {
      totalPage: 10,
      items: [{}],
    }
    this.pageCount = res.totalPage
    this.tableData = res.items
  },
  computed: {
    noData(): boolean {
      return this.queryParameter.pageNo === 1 && this.tableData.length === 0
    },
  },
  watch: {
    queryParameter: {
      handler: '$fetch',
      deep: true,
    },
  },
  methods: {
    getIndex(index: number) {
      const { pageNo, pageSize } = this.queryParameter
      return index + (pageNo - 1) * pageSize + 1
    },
    preClick() {
      const { pageNo } = this.queryParameter
      if (pageNo <= 1) return
      Object.assign(this.queryParameter, {
        pageNo: pageNo - 1,
      })
    },
    nextClick() {
      const { pageNo } = this.queryParameter
      if (pageNo <= 1) return
      Object.assign(this.queryParameter, {
        pageNo: pageNo + 1,
      })
    },
    updatePage(page: number) {
      const { pageNo } = this.queryParameter
      if (page !== pageNo)
        Object.assign(this.queryParameter, {
          pageNo: page,
        })
    },
  },
})
</script>

<style lang="scss" scoped>
::v-deep .el-pager li:not(.disabled).active {
  background-color: $primary !important;
}
.clients-table {
  width: 100%;
  padding: 30px 39px;
  .table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    font-size: 16px;
    font-weight: 500;
    color: $lightText;
    line-height: 18px;
    gap: 10px;
  }
  .body {
    margin: 12px 0;
    .remark {
      @include flexR;
      @include flexRGap(4px);
    }
  }
  .header {
    margin-bottom: 24px;
    color: $onSurface;
  }
  .loading {
    height: 180px;
    @include flexCc;
  }
}
</style>
