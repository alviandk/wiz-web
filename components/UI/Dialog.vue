<script lang="ts" setup>
import Dialog from 'primevue/dialog'

type Props = {
  rootClass?: string
  containerClass?: string
}
const props = defineProps<Props>()
</script>

<template>
  <Dialog
    modal
    :pt="{
      root: { class: `w-[1000px] rounded-xl relative ${props.rootClass}` },
    }"
  >
    <template #container="slotProps: any">
      <div :class="`p-14 bg-white rounded-xl relative overflow-y-auto ${props.containerClass}`">
        <slot v-bind="slotProps" />
      </div>
    </template>
  </Dialog>
</template>
