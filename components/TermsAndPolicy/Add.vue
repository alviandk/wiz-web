<script setup lang="ts">
import { useSidebar } from '~/composable/layout'

const { t } = useI18n()
const { onBack } = useSidebar()
</script>

<template>
  <div>
    <UICard>
      <div class="flex flex-wrap md:flex-nowrap gap-3 mb-6 !w-full">
        <div class="flex flex-wrap gap-3 w-full md:!w-[65%]" style="width: 65%">
          <label class="font-semibold text-sm text-[#333333]">
            {{ t('label.title') }}
          </label>
          <ElementsInputText id="title" :placeholder="$t('placeholder.input', { label: $t('label.title') })" />
        </div>
        <div class="flex flex-wrap gap-3 w-full md:!w-[35%]" style="width: 35%">
          <label class="font-semibold text-sm text-[#333333]">
            {{ t('label.category') }}
          </label>
          <ElementsInputSelect
            id="category"
            :placeholder="$t('placeholder.select', { label: $t('label.category') })"
            :options="[
              { name: 'Aplikasi', code: 'a' },
              { name: 'UMKM', code: 'b' },
              { name: 'Bank DKI', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>
      </div>

      <p class="font-semibold text-sm text-[#333333] mb-2">{{ t('text.writeTermsAndPolicy') }}</p>
      <UIEditor />

      <div class="flex gap-3 items-center justify-end mt-6">
        <ElementsButton class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]" @click="onBack">
          {{ $t('text.cancel') }}
        </ElementsButton>
        <ElementsButton class="!w-[120px]" disabled>
          {{ $t('text.publication') }}
        </ElementsButton>
      </div>
    </UICard>
  </div>
</template>
