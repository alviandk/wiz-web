<template>
  <div class="flex gap-2 justify-between items-center mt-4">
    <div class="flex gap-1 items-center">
      <select class="bg-[#F3F7FB] px-3 rounded-lg py-1 h-10 text-sm" @change="onChangePerPage">
        <option v-for="pageSize in props.pageSizes" :key="pageSize" :value="pageSize">
          {{ pageSize }}
        </option>
      </select>

      <p class="text-[#313336] text-sm font-semibold px-2">
        {{ $t('text.totalData', { x: props.totalData }) }}
      </p>
    </div>
    <div class="flex items-center mr-1 border rounded-xl">
      <button class="border-r w-10 h-10" :disabled="isPrevious" @click="() => onChangePage(props.page - 1)">
        <i :class="`pi pi-chevron-left text-md ${isPrevious ? 'text-[#C0C4CB]' : 'text-[#313336]'}`" />
      </button>
      <div class="flex">
        <button
          v-for="item in generatePageNumber(props.page, props.totalPage)"
          :key="item.value"
          :class="`min-w-[32px] text-sm w-10 h-10 ${item.value === props.page ? 'border border-[#28BCDC] bg-[#F1FDFF] text-[#28BCDC]' : 'border-r bg-[#FAFDFF] text-[#969BA2]'} ${item.value === -1 ? 'cursor-default' : ''}`"
          @click="onChangePage(item.value)"
        >
          {{ item.text }}
        </button>
      </div>
      <button class="w-10 h-10" :disabled="isNext" @click="() => onChangePage(props.page + 1)">
        <i :class="`pi pi-chevron-right text-md ${isNext ? 'text-[#C0C4CB]' : 'text-[#313336]'}`" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  itemCount: number
  perPage: number
  totalData: number
  onGoToPage: (page: number) => void
  onPageSizeChange: (perPage: number) => void
  totalPage: number
  page: number
  pageSizes?: number[]
}

const props = withDefaults(defineProps<Props>(), {
  pageSizes: () => [5, 10, 15, 20],
})

const isPrevious = computed(() => props.page === 1)
const isNext = computed(() => props.totalPage === props.page || props.totalData === 0)

function onChangePage(page: number) {
  if (page !== -1) {
    props.onGoToPage(page)
  }
}

function onChangePerPage(e: Event) {
  const target = e.target as HTMLInputElement
  props.onPageSizeChange(Number(target.value))
}
</script>
