<script lang="ts" setup name="FToolbarItem">
  import { Emits, Props } from './toolbar-item'
  import { FIcon } from '../../icon'
  import type { handleClickInterface as a } from './interface'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: MouseEvent): void => {
    emit('click', evt)
  }
</script>

<template>
  <span
    class="f-toolbar-item"
    :data-key="dataKey"
    :style="{ color }"
    @click="handleClick"
  >
    <f-icon v-if="icon" :size="iconSize" :icon="icon" />
    <slot />
  </span>
</template>
