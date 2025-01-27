<script setup lang="ts">
import { useSidebar } from '~/composable/layout'

const { onBack } = useSidebar()
</script>

<template>
  <div>
    <UICard>
      <form @submit.prevent="">
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.fullName') }}</p>
          <ElementsInputText id="fullName" :placeholder="$t('placeholder.input', { label: $t('label.fullName') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.gender') }}</p>
          <ElementsInputText id="gender" :placeholder="$t('placeholder.input', { label: $t('label.gender') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.phoneNumber') }}</p>
          <ElementsInputText
            id="phoneNumber"
            :placeholder="$t('placeholder.input', { label: $t('label.phoneNumber') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.businessType') }}</p>
          <ElementsInputSelect
            id="businessType"
            :placeholder="$t('placeholder.select', { label: $t('label.businessType') })"
            :options="[
              { name: 'A', code: 'a' },
              { name: 'B', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.businessName') }}</p>
          <ElementsInputText
            id="businessName"
            :placeholder="$t('placeholder.input', { label: $t('label.businessName') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.businessAddress') }}</p>
          <ElementsTextArea
            id="businessAddress"
            :placeholder="$t('placeholder.write', { label: $t('label.businessAddress') })"
          />
        </div>

        <div class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]" @click="onBack">
            {{ $t('text.cancel') }}
          </ElementsButton>
          <ElementsButton class="!w-[120px]">
            {{ $t('text.save') }}
          </ElementsButton>
        </div>
      </form>
    </UICard>
  </div>
</template>
