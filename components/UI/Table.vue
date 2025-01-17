<script lang="ts" setup>
import DataTable from 'primevue/datatable'

type Props = {
  isLoading?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div class="relative">
    <UISpinner
      v-if="props.isLoading"
      class="w-20 h-20 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20"
    />
    <DataTable
      v-bind="$attrs"
      :pt="{
        root: { class: 'border rounded-xl overflow-hidden' },
        bodyRow: {
          class: `min-h-[45px] h-[45px] text-[#353F45] text-xs border-b ${props.isLoading ? 'opacity-50' : ''}`,
        },
        headerRow: { class: 'text-sm text-[#68788D] font-medium h-[45px]' },
        columnHeaderContent: {
          class: 'flex flex-row justify-between',
        },
      }"
    >
      <slot />
      <template #expansion="slotProps">
        <slot name="expansion" v-bind="slotProps" />
      </template>
      <template #empty>
        <div class="h-[73px] flex justify-center items-center">
          <p class="font-bold text-sm text-[#353F45]">Data Tidak Tersedia</p>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<style>
.p-datatable .p-column-header-content {
  justify-content: space-between;
}
</style>
