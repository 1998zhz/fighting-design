<script lang="ts" setup>
  import { ref } from 'vue'
  // const data = [
  //   {
  //     label: 'Node 1',
  //     children: [
  //       {
  //         label: 'Node 1-1',
  //         children: [
  //           { label: 'Node 1-1-1' },
  //           { label: 'Node 1-1-2' },
  //           { label: 'Node 1-1-3' }
  //         ]
  //       },
  //       { label: 'Node 1-2' },
  //       { label: 'Node 1-3' }
  //     ]
  //   },
  //   { label: 'Node 2' }
  // ]
  const date = new Date()
  const visible = ref(false)
  const visible2 = ref(false)

  const change = (date) => {
    console.log(date)
  }
</script>

<template>
  <f-calendar
    v-model:date="date"
    border
    border-color="skyblue"
    @change-date="change"
  />
  <!-- <f-tree :data="data" /> -->
  <f-button @click="visible = true">show dialog</f-button>
  <f-dialog v-model:visible="visible" title="this is title1" modal-blur>
    <f-dialog
      v-model:visible="visible2"
      title="this is inner dialog title2"
      width="400"
      append-to-body
    >
      inner - dialog
    </f-dialog>
    <f-button @click="visible2 = true">show inner dialog</f-button>
    <template #footer>
      <f-button @click="visible = false">取消</f-button>
      <f-button type="primary">确定</f-button>
    </template>
  </f-dialog>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>
