import PageHeader from './src/page-header.vue'

import { install } from '../_utils'

export const FPageHeader = install(PageHeader)

export type FPageHeaderInstance = InstanceType<typeof PageHeader>

declare module 'vue' {
  export interface GlobalComponents {
    FPageHeader: typeof FPageHeader
  }
}
