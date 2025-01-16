<script lang="ts" setup>
import Toast from 'primevue/toast'
</script>

<template>
  <Toast
    position="top-center"
    :pt="{
      container: { class: 'border-none bg-white rounded-xl p-4' },
    }"
  >
    <template #container="slotProps">
      <div class="flex items-center gap-3">
        <div v-if="slotProps.message.detail.status === 'success'" class="flex items-center gap-3 w-full">
          <img src="/images/red-information.svg" class="w-[20px] h-[20px]" />
          <div class="w-full">
            <p class="text-base text-[#333333] font-semibold">{{ $t('text.success') }}</p>
            <p class="text-xs font-medium text-[#68788D]">{{ slotProps.message.summary }}</p>
          </div>
        </div>
        <div v-if="slotProps.message.detail.status === 'error'" class="flex items-center gap-3 w-full">
          <img src="/images/red-information.svg" class="w-[20px] h-[20px]" />
          <div class="w-full">
            <p class="text-base text-[#333333] font-semibold">{{ $t('text.failed') }}</p>
            <p class="text-xs font-medium text-[#68788D]">{{ slotProps.message.summary }}</p>
          </div>
        </div>
        <div class="cursor-pointer" @click="slotProps.closeCallback">
          <i class="pi pi-times p-2 text-[#798F9F]" style="font-size: 1rem" />
        </div>
      </div>
    </template>
  </Toast>
</template>
