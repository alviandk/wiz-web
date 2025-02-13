<script lang="ts" setup>
import Dropdown from 'primevue/dropdown'
import InputIcon from 'primevue/inputicon'

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

<template>
  <div :class="`flex flex-col  gap-1.5 w-full ${props.containerClass}`">
    <label :for="props.id" :class="`font-bold text-sm text-[#353F45] ${props.classLabel}`">
      {{ props.label }} <span v-if="props.isRequired" class="text-red-500">*</span>
    </label>
    <div class="relative" :icon-position="`${props.iconPosition === 'left' ? 'left' : 'right'}`">
      <InputIcon class="absolute left-3.5 top-3.5">
        <slot name="icon" />
      </InputIcon>
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
    </div>
    <span v-if="props.errorMessage" :class="`text-[#EB3821] text-sm ${props.classErrorMessage}`">
      {{ props.errorMessage }}
    </span>
  </div>
</template>

<style scoped>
.p-dropdown.p-disabled {
  background-color: #edeef1 !important;
  border-radius: 8px;
}
</style>
