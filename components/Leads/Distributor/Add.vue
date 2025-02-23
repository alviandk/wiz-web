<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'
import { useSidebar } from '~/composable/layout'

const { t } = useI18n()
const { onBack } = useSidebar()
const haveOtherBankAcc = ref(null)
</script>

<template>
  <div>
    <UICard>
      <form @submit.prevent="">
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.businessName') }}</p>
          <ElementsInputText
            id="businessName"
            :placeholder="$t('placeholder.input', { label: $t('label.businessName') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.fullNameOwner') }}</p>
          <ElementsInputText
            id="fullNameOwner"
            :placeholder="$t('placeholder.input', { label: $t('label.fullNameOwner') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.businessAddress') }}</p>
          <ElementsInputText
            id="businessAddress"
            :placeholder="$t('placeholder.input', { label: $t('label.businessAddress') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.phoneNumberOwner') }}</p>
          <ElementsInputText
            id="phoneNumberOwner"
            :placeholder="$t('placeholder.input', { label: $t('label.phoneNumberOwner') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.averagesBuy') }}</p>
          <ElementsInputText
            id="averagesBuy"
            :placeholder="$t('placeholder.input', { label: $t('label.averagesBuy') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.averagesBuyMonth') }}</p>
          <ElementsInputText
            id="averagesBuyMonth"
            :placeholder="$t('placeholder.input', { label: $t('label.averagesBuyMonth') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.topOrCash') }} ({{ $t('text.optional') }})</p>
          <ElementsInputSelect
            id="topOrCash"
            :placeholder="$t('placeholder.select', { label: $t('label.topOrCash') })"
            :options="[
              { name: 'Top', code: 'top' },
              { name: 'Cash', code: 'cash' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap items-center gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.umkmHaveOtherBankAccount') }}</p>
          <div class="flex flex-col w-full">
            <SelectButton
              v-model="haveOtherBankAcc"
              :options="[
                { name: t('text.have'), value: 'punya' },
                { name: t('text.dontHave'), value: 'tidak punya' },
              ]"
              option-label="name"
              :pt="{
                root: { class: 'custom-blue-button flex items-center gap-3' },
                button: { class: 'h-[48px] w-full bg-[#F3F7FB] rounded-xl py-[5px] px-3' },
                label: { class: 'text-sm font-medium' },
              }"
            />
          </div>
        </div>

        <div class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton class="!w-[120px] red-outline-button" @click="onBack">
            {{ $t('text.cancel') }}
          </ElementsButton>
          <ElementsButton class="!w-[120px] red-dark-button" disabled>
            {{ $t('text.save') }}
          </ElementsButton>
        </div>
      </form>
    </UICard>
  </div>
</template>
