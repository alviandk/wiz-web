<script setup lang="ts">
type Props = {
  pageTitle?: string
  onClick: () => void
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex items-center justify-between bg-white border-b border-b-[#E7EAF1] px-8 py-[21px]">
    <div class="flex items-center gap-5">
      <i class="pi pi-bars text-[1.2rem] cursor-pointer" @click="props.onClick"></i>
      <span class="text-xl font-semibold">{{ pageTitle }}</span>
    </div>
  </div>
</template>
