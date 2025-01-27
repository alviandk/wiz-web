<script lang="ts" setup>
type Props = {
  id: string
}
const props = defineProps<Props>()

const field = useField<string | number>(props.id)
</script>

<template>
  <PrimeRadioButton
    v-model="field.value.value"
    :input-id="props.id"
    :pt="{
      box: ({ props }) => ({
        class: `bg-white border-[1px] w-5 h-5 ${props.modelValue === props.value ? 'border-[#40AE87]' : ''}`,
      }),
      icon: { class: 'bg-[#40AE87]' },
    }"
  />
</template>
