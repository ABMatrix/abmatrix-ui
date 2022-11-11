<template>
  <div class="form-batch">
    <el-form ref="form" :model="formModel" :rules="rules">
      <div v-for="(item, index) in formModel.valList" :key="index" class="list">
        <input-form-item
          class="input"
          :prop="'valList.' + index + '.name'"
          :rules="rules.name"
          :value.sync="formModel.valList[index].name"
        ></input-form-item>
        <span class="divider">——</span>
        <input-form-item
          class="input"
          :is-number="true"
          :prop="'valList.' + index + '.value'"
          :rules="rules.value"
          :value.sync="formModel.valList[index].value"
        ></input-form-item>
        <div class="action">
          <div
            v-if="formModel.valList.length > 1"
            class="icon"
            @click="memberChange(index)"
          >
            －
          </div>
          <div
            v-if="index === formModel.valList.length - 1"
            class="icon"
            @click="memberChange()"
          >
            ＋
          </div>
        </div>
      </div>
    </el-form>
    <primary-button class="button" :loading="submitting" @click="submit">{{
      $t('formBatch.submit')
    }}</primary-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
type itemType = {
  name: string | number | undefined
  value: string | number | undefined
}
export default Vue.extend({
  name: 'FormBatch',
  data() {
    return {
      submitting: false,
      formModel: {
        valList: [
          {
            name: undefined,
            value: undefined,
          },
        ] as itemType[],
      },
    }
  },
  computed: {
    rules(): any {
      return {
        name: [
          {
            required: true,
            message: this.$t('formBatch.plzInputName'),
            trigger: 'blur',
          },
        ],
        value: [
          {
            required: true,
            message: this.$t('formBatch.plzInputvalue'),
            trigger: 'blur',
          },
          {
            type: 'number',
            min: 0,
            message: this.$t('formBatch.valueLimit'),
            trigger: 'blur',
          },
        ],
      }
    },
  },
  methods: {
    memberChange(idx: number) {
      if (idx || idx === 0) {
        this.formModel.valList.splice(idx, 1)
      } else {
        if (this.formModel.valList.length === 5) {
          return this.$message.warning(
            this.$t('formBatch.valueMax', { num: 5 }).toString()
          )
        }
        const obj = {
          name: undefined,
          value: undefined,
        }
        this.formModel.valList.push(obj)
      }
    },
    submit() {
      ;(this.$refs.form as any).validate(async (valid: boolean) => {
        if (!valid) return
        await this.$message.success(this.$t('formBatch.success').toString())
      })
    },
  },
})
</script>

<style lang="scss" scoped>
// Element 输入框
.form-batch {
  padding: 20px 0;
  height: 100%;
  @include flexC;
  .list {
    margin-top: 6px;
    @include flexR;
    align-items: center;
    span {
      white-space: nowrap;
      margin: 0 20px 22px 20px;
      color: $lightText;
    }
    .label {
      width: 300px;
      @include flexR;
      .limit {
        font-size: 12px;
        margin: 0 0 0 10px;
      }
    }
    .input {
      width: 300px;
    }
    .blank {
      width: 32px;
    }
    .action {
      width: 100px;
      @include flexR;
      .icon {
        cursor: pointer;
        position: relative;
        top: -8px;
        margin: 0 8px;
        width: 30px;
        height: 30px;
        background-color: $primary;
        color: $onPrimary;
        font-weight: bold;
        @include flexRc;
        padding: 0;
        flex-shrink: 0;
        border-radius: 50%;
      }
    }
  }
  .button {
    width: 300px;
    margin: 30px 0;
  }
}
</style>
