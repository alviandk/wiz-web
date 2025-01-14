<script lang="ts" setup>
import InputText from 'primevue/inputtext'

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
  textInput?: boolean
  maxInput?: number
  isUpperCase?: boolean
}
const props = defineProps<Props>()

const field = useField<string>(props.id)
// const emits = defineEmits(['update:model-value'])

function onUpdate(value: string) {
  const node = document.getElementById(props.id) as HTMLInputElement

  // value become uppercase when typing and there's no special char include space
  if (props.isUpperCase) {
    const removeSpaceAndSpecialChar = value.replace(/[^a-zA-Z0-9]/g, '')
    const result = removeSpaceAndSpecialChar.toUpperCase()
    node.value = result
    field.value.value = result
  } else {
    field.value.value = value
  }
}
</script>

<template>
  <div :class="props.containerClass" class="flex flex-col gap-1.5 w-full">
    <label v-if="props.label" :for="props.id" :class="props.classLabel" class="font-semibold text-sm text-[#333333]">
      {{ props.label }} <span v-if="props.isRequired" class="text-red-500">*</span>
    </label>
    <p v-if="props.description" class="text-[#686F73] text-sm mb-2">{{ props.description }}</p>
    <span :class="props.iconPosition === 'left' ? 'p-input-icon-left' : 'p-input-icon-right'" class="relative">
      <slot name="icon" />
      <div v-if="textInput" class="flex items-center absolute top-0 bottom-0 px-2 border-r">
        <slot name="text" />
      </div>

      <InputText
        :id="props.id"
        v-bind="$attrs"
        v-model="field.value.value"
        class="h-[48px] text-sm py-3 rounded-xl w-full border-0 bg-[#F3F7FB] disabled:bg-[#EDEEF1]"
        :class="`${textInput ? '!pl-[48px] !pr-4' : '!px-4'} ${props.errorMessage ? 'border-red-500' : ''} ${
          props.class
        }`"
        :maxlength="maxInput"
        @update="onUpdate"
      />
    </span>
    <span v-if="props.errorMessage" class="text-[#EB3821] text-sm" :class="props.classErrorMessage">
      {{ props.errorMessage }}
    </span>
  </div>
</template>
