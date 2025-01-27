<script lang="ts" setup>
import InputText from 'primevue/inputtext'
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
  description?: string
  containerClass?: string
  isOnlyNumber?: boolean
  maxInput?: number
}
const props = defineProps<Props>()
const field = useField<string>(props.id)

function onUpdate(value: string | undefined) {
  if (typeof value === 'string') {
    const node = document.getElementById(props.id) as HTMLInputElement
    if (props.isOnlyNumber) {
      const result = value.replace(/\D/g, '')
      node.value = result
      field.value.value = result
    } else {
      field.value.value = value
    }
  }
}
</script>

<template>
  <div :class="`flex flex-col gap-1.5 w-full ${props.containerClass}`">
    <label v-if="props.label" :for="props.id" :class="`font-bold text-sm text-[#333333] ${props.classLabel}`">
      {{ props.label }} <span v-if="props.isRequired" class="text-red-500">*</span>
    </label>
    <p v-if="props.description" class="text-[#686F73] text-sm mb-2">{{ props.description }}</p>
    <div class="relative" :icon-position="`${props.iconPosition === 'left' ? 'left' : 'right'}`">
      <InputIcon class="absolute left-3.5 top-3.5">
        <slot name="icon" />
      </InputIcon>
      <InputText
        :id="props.id"
        v-bind="$attrs"
        :model-value="field.value.value"
        :class="`h-[48px] text-sm px-4 py-3 rounded-xl w-full border-0 bg-[#F3F7FB] disabled:bg-[#D4DDE4] ${props.errorMessage ? 'border-red-500' : ''} ${iconPosition === 'left' ? 'pl-10' : 'pr-10'} ${props.class}`"
        :maxlength="maxInput"
        @update:model-value="onUpdate"
      />
    </div>
    <span v-if="props.errorMessage" :class="`text-[#EB3821] text-sm ${props.classErrorMessage}`">
      {{ props.errorMessage }}
    </span>
  </div>
</template>
