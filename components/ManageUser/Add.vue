<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'
import { useSidebar } from '~/composable/layout'

const { t } = useI18n()
const { onBack } = useSidebar()
const selectedGender = ref(null)
</script>

<template>
  <div>
    <div class="bg-transparent !text-[#2B1713] text-md font-semibold !w-fit mb-6 cursor-pointer" @click="onBack">
      <i class="pi pi-arrow-left mr-3" />
      {{ $t('text.back') }}
    </div>
    <UICard>
      <form @submit.prevent="">
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.fullName') }}</p>
          <ElementsInputText id="fullName" :placeholder="$t('placeholder.input', { label: $t('label.fullName') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.noHp') }}</p>
          <ElementsInputText id="noHp" :placeholder="$t('placeholder.input', { label: $t('label.noHp') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.addressOptional') }}</p>
          <ElementsTextArea id="address" :placeholder="$t('placeholder.write', { label: $t('label.address') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.gender') }}</p>
          <div class="flex flex-col w-full">
            <SelectButton
              v-model="selectedGender"
              :options="[
                { name: t('text.male'), value: 'L' },
                { name: t('text.female'), value: 'P' },
              ]"
              option-label="name"
              :pt="{
                root: { class: 'custom-blue-button flex items-center gap-3' },
                button: { class: 'h-[48px] w-full bg-[#F3F7FB] rounded-xl !border-0 py-[5px] px-3' },
                label: { class: 'text-sm text-[#68788D] font-medium' },
              }"
            />
          </div>
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.username') }}</p>
          <ElementsInputText id="username" :placeholder="$t('placeholder.input', { label: $t('label.username') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.email') }}</p>
          <ElementsInputText id="email" :placeholder="$t('placeholder.input', { label: $t('label.email') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.password') }}</p>
          <ElementsInputPassword
            id="password"
            :placeholder="$t('placeholder.input', { label: $t('label.password') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.role') }}</p>
          <ElementsInputSelect
            id="role"
            :placeholder="$t('placeholder.select', { label: $t('label.role') })"
            :options="[
              { name: 'A', code: 'a' },
              { name: 'B', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
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
