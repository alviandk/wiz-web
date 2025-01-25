<template>
  <div :class="`flex flex-col w-full ${props.containerClass}`">
    <label :for="props.id" :class="`font-bold text-sm text-[#353F45] ${props.classLabel}`">
      {{ props.label }} <span v-if="props.isRequired" class="text-red-500">*</span>
    </label>
    <span :class="`${props.iconPosition === 'left' ? 'p-input-icon-left' : 'p-input-icon-right'}`">
      <slot name="icon" />
      <Dropdown
        :id="props.id"
        v-bind="$attrs"
        v-model="field.value.value"
        :pt="{
          root: {
            class: `w-full h-[48px] border-0 bg-[#F3F7FB] rounded-xl ${props.errorMessage ? 'border-red-500' : ''} ${props.rootClass}`,
          },
          input: { class: 'text-sm' },
          wrapper: { class: 'text-sm' },
          item: ({ context }) => ({
            class: `text-[#353F45] hover:text-[#FF234B] hover:bg-[#FDF0F1] focus:bg-white ${context.selected ? 'bg-[#FDF0F1] text-[#FF234B]' : ''} ${
              props.itemClass
            }`,
          }),
        }"
        empty-message=" "
      />
    </span>
    <span v-if="props.errorMessage" :class="`text-[#EB3821] text-sm ${props.classErrorMessage}`">
      {{ props.errorMessage }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import Dropdown from 'primevue/dropdown'

type Props = {
  id: string
  label?: string
  iconPosition?: 'left' | 'right'
  errorMessage?: string
  isRequired?: boolean
  classLabel?: string
  class?: string
  classErrorMessage?: string
  itemClass?: string
  rootClass?: string
  containerClass?: string
}
const props = defineProps<Props>()
const field = useField<string>(props.id)
</script>

<style scoped>
.p-dropdown.p-disabled {
  background-color: #edeef1 !important;
  border-radius: 8px;
}
</style>
