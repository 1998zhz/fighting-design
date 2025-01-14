import { isNumber, isString, isBoolean } from '../../_utils'
import type { PropType } from 'vue'
import type { labelType } from '../../radio-group/src/interface'

export const Props = {
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<labelType>,
    default: (): string => ''
  },
  name: {
    type: String,
    default: (): string => 'f-radio'
  },
  label: {
    type: [String, Number, Boolean] as PropType<labelType>,
    default: (): string => ''
  }
} as const

export const Emits = {
  'update:modelValue': (val: labelType): boolean => {
    return isString(val) || isNumber(val) || isBoolean(val)
  },
  change: (val: labelType): boolean => {
    return isString(val) || isNumber(val) || isBoolean(val)
  }
} as const
