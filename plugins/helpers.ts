import { Plugin } from '@nuxt/types'
import * as helperPlugin from '~/utils/helpers'

export type HelpersType = typeof helperPlugin

const helpersPlugin: Plugin = (_, inject) => {
  inject('helpers', {
    ...helperPlugin,
  } as HelpersType)
}

export default helpersPlugin
