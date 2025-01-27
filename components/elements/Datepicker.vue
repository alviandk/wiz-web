<script lang="ts" setup>
import Calendar from 'primevue/calendar'

type Props = {
  id: string
  label?: string
  iconPosition?: 'left' | 'right'
  errorMessage?: string
  isRequired?: boolean
  classLabel?: string
  classErrorMessage?: string
  inputClass?: string
  containerClass?: string
  rootClass?: string
}
const props = defineProps<Props>()

const field = useField<any>(props.id)
</script>

<template>
  <div :class="`flex flex-col gap-2 w-full min-w-[200px] ${props.containerClass}`">
    <label v-if="props.label" :for="props.id" :class="`font-bold text-sm text-[#353F45] ${props.classLabel}`">
      {{ props.label }} <span v-if="props.isRequired" class="text-red-500">*</span>
    </label>
    <Calendar
      v-model="field.value.value"
      :input-id="props.id"
      v-bind="$attrs"
      show-icon
      :pt="{
        root: { class: `h-12 ${props.rootClass}` },
        input: {
          class: `bg-[#F3F7FB] border-0 rounded-l-xl px-3 text-sm ${props.errorMessage ? 'border-red-300' : ''} ${props.inputClass} `,
        },
        dropdownButton: {
          root: `bg-[#F3F7FB] border-[#d1d5db] border-0 rounded-r-xl pl-2.5  ${props.errorMessage ? 'border-red-300' : ''}`,
        },
        panel: { class: '!min-w-[350px]' },
        weekDay: { class: 'text-sm' },
        day: { class: 'p-0' },
        dayLabel: { class: 'text-sm' },
        header: { class: 'p-0' },
      }"
    >
      <template #dropdownicon>
        <img src="/images/icon-calendar.svg" />
      </template>
    </Calendar>
    <span v-if="props.errorMessage" :class="`text-[#EB3821] text-sm ${props.classErrorMessage}`">
      {{ props.errorMessage }}
    </span>
  </div>
</template>
