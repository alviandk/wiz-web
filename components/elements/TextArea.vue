<script lang="ts" setup>
type Props = {
  id: string
  label?: string

  errorMessage?: string
  isRequired?: boolean
  classLabel?: string
  classErrorMessage?: string
  containerClass?: string
}
const props = defineProps<Props>()

const field = useField<string>(props.id)
</script>

<template>
  <div :class="`flex flex-col w-full ${props.containerClass}`">
    <label :for="props.id" :class="`font-bold text-sm text-[#333333] ${props.classLabel}`">
      {{ props.label }} <span v-if="props.isRequired" class="text-red-500">*</span>
    </label>
    <PrimeTextarea
      v-bind="$attrs"
      :id="props.id"
      v-model="field.value.value"
      rows="4"
      cols="30"
      :pt="{
        root: { class: `text-sm border-0 bg-[#F3F7FB] rounded-xl p-3 ${props.errorMessage ? 'border-red-500' : ''}` },
      }"
    />
    <span v-if="props.errorMessage" :class="`text-[#EB3821] text-sm ${props.classErrorMessage}`">
      {{ props.errorMessage }}
    </span>
  </div>
</template>
