<script lang="ts" setup>
import Checkbox from 'primevue/checkbox'

type Props = {
  id: string
  label?: string
  disabled?: boolean
}
const props = defineProps<Props>()

const field = useField<number[] | boolean>(props.id)
</script>

<template>
  <div class="border rounded-xl py-3 px-4 h-[48px] flex gap-2 w-fit">
    <Checkbox
      :id="props.id"
      v-model="field.value.value"
      :input-id="props.id"
      :pt="{
        input: ({ props }) => {
          return {
            class: `border-[#DDE0E5] border-[2px] ${Array.isArray(field.value.value) ? field.value.value.includes(props.modelValue) : props.modelValue ? 'bg-[#40AE87]' : ''}`,
          }
        },
      }"
      :disabled="disabled"
    />
    <p>{{ props.label }}</p>
  </div>
</template>
