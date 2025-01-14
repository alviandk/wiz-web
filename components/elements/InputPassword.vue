<script lang="ts" setup>
import Password from 'primevue/password'

type Props = {
  id: string
  label?: string
  errorMessage?: string
  isRequired?: boolean
  classLabel?: string
  class?: string
  classErrorMessage?: string
}
const props = defineProps<Props>()

const field = useField<string>(props.id)
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label :for="props.id" :class="`font-bold text-sm text-[#353F45] ${props.classLabel}`">
      {{ props.label }} <span v-if="props.isRequired" class="text-red-500">*</span>
    </label>
    <Password
      :id="props.id"
      v-model="field.value.value"
      v-bind="$attrs"
      :feedback="false"
      toggle-mask
      :pt="{
        root: `min-h-[48px] ${props.class}`,
        input: {
          root: {
            class: `w-full border rounded-xl border-0 bg-[#F3F7FB] text-sm py-3 px-4 ${props.errorMessage ? 'border-red-500' : 'border-gray-300'}`,
          },
        },
      }"
    />
    <span v-if="props.errorMessage" :class="`text-[#EB3821] text-sm ${props.classErrorMessage}`">
      {{ props.errorMessage }}
    </span>
  </div>
</template>
