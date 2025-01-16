<template>
  <div class="flex justify-between items-center mt-4">
    <p class="text-[#313336] text-sm px-2">
      Page {{ firstDataPagination() + 1 }} - {{ totalDataPagination() }} dari {{ props.totalData }}
    </p>
    <div class="flex gap-3 items-center mr-1">
      <button class="leading-none" :disabled="isPrevious" @click="() => onChangePage(props.page - 1)">
        <i :class="`pi pi-chevron-left text-md ${isPrevious ? 'text-[#C0C4CB]' : 'text-[#313336]'}`" />
      </button>
      <div class="flex gap-2">
        <button
          v-for="item in generatePageNumber(props.page, props.totalPage)"
          :key="item.value"
          :class="`rounded-md min-w-[32px] text-sm h-8 ${item.value === props.page ? 'border bg-[#4A91E1] text-white' : 'bg-[#FAFDFF] text-[#969BA2]'} ${item.value === -1 ? 'cursor-default' : ''}`"
          @click="onChangePage(item.value)"
        >
          {{ item.text }}
        </button>
      </div>
      <button class="leading-none" :disabled="isNext" @click="() => onChangePage(props.page + 1)">
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

function firstDataPagination() {
  return props.page * props.perPage - props.perPage
}

function totalDataPagination() {
  const total = props.page * props.perPage
  if (total >= props.totalData) {
    return props.totalData
  }
  return props.page * props.perPage
}
</script>
