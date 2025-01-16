<template>
  <Button
    :pt="{
      root: `${props.class} w-full bg-[#FF234B] rounded-xl min-h-[32px] text-sm font-semibold h-12 text-white disabled:bg-[#DDE0E5] disabled:!text-[#B3B7B9] disabled:border-none justify-center border-transparent px-4`,
    }"
    :link="props.attrButton?.link"
  >
    <i v-if="props.isLoading" class="pi pi-spin pi-spinner" />
    <slot v-else />
  </Button>
</template>

<script lang="ts" setup>
import Button, { type ButtonProps } from 'primevue/button'

type Props = {
  class?: string
  attrButton?: ButtonProps
  isLoading?: boolean
}
const props = defineProps<Props>()
</script>
