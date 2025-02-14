<script setup lang="ts">
import Divider from 'primevue/divider'
import { useSidebar } from '~/composable/layout'

const { onBack } = useSidebar()
</script>

<template>
  <div>
    <UICard>
      <form @submit.prevent="">
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.nib') }} ({{ $t('text.optional') }})</p>
          <ElementsInputText id="nib" :placeholder="$t('placeholder.input', { label: 'NIB' })" />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.fullNameDistributor') }}</p>
          <ElementsInputText
            id="fullNameDistributor"
            :placeholder="$t('placeholder.input', { label: $t('label.fullNameDistributor') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.phoneDistributor') }}</p>
          <ElementsInputText
            id="phoneDistributor"
            :placeholder="$t('placeholder.input', { label: $t('label.phoneDistributor') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.email') }}</p>
          <ElementsInputText id="email" :placeholder="$t('placeholder.input', { label: $t('label.email') })" />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.nikDistributor') }}</p>
          <ElementsInputText
            id="nikDistributor"
            :placeholder="$t('placeholder.input', { label: $t('label.nikDistributor') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.npwpBusiness') }}</p>
          <ElementsInputText
            id="npwpBusiness"
            :placeholder="$t('placeholder.input', { label: $t('label.npwpBusiness') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.distributorName') }}</p>
          <ElementsInputText
            id="distributorName"
            :placeholder="$t('placeholder.input', { label: $t('label.distributorName') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.distributorCode') }}</p>
          <ElementsInputText
            id="distributorCode"
            :placeholder="$t('placeholder.input', { label: $t('label.distributorCode') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.businessType') }} ({{ $t('text.optional') }})</p>
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
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.description') }} ({{ $t('text.optional') }})</p>
          <ElementsTextArea
            id="description"
            :placeholder="$t('placeholder.write', { label: $t('label.description') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.address') }}</p>
          <ElementsTextArea id="address" :placeholder="$t('placeholder.write', { label: $t('label.address') })" />
        </div>

        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.province') }}</p>
          <ElementsInputSelect
            id="province"
            :placeholder="$t('placeholder.select', { label: $t('label.province') })"
            :options="[
              { name: 'A', code: 'a' },
              { name: 'B', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.regencyOrCity') }}</p>
          <ElementsInputSelect
            id="regencyOrCity"
            :placeholder="$t('placeholder.select', { label: $t('label.regencyOrCity') })"
            :options="[
              { name: 'A', code: 'a' },
              { name: 'B', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.district') }}</p>
          <ElementsInputSelect
            id="district"
            :placeholder="$t('placeholder.select', { label: $t('label.district') })"
            :options="[
              { name: 'A', code: 'a' },
              { name: 'B', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.subDistrict') }}</p>
          <ElementsInputSelect
            id="subDistrict"
            :placeholder="$t('placeholder.select', { label: $t('label.subDistrict') })"
            :options="[
              { name: 'A', code: 'a' },
              { name: 'B', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.zipCode') }}</p>
          <ElementsInputText id="zipCode" :placeholder="$t('placeholder.input', { label: $t('label.zipCode') })" />
        </div>

        <Divider />
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.namePIC') }}</p>
          <ElementsInputText id="namePIC" :placeholder="$t('placeholder.input', { label: $t('label.namePIC') })" />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.jobPositionPIC') }}</p>
          <ElementsInputText
            id="jobPositionPIC"
            :placeholder="$t('placeholder.input', { label: $t('label.jobPositionPIC') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.emailPIC') }}</p>
          <ElementsInputText id="emailPIC" :placeholder="$t('placeholder.input', { label: $t('label.emailPIC') })" />
        </div>

        <div class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton class="!w-[120px] blue-outline-button" @click="onBack">
            {{ $t('text.cancel') }}
          </ElementsButton>
          <ElementsButton class="!w-[120px] blue-dark-button" disabled>
            {{ $t('text.save') }}
          </ElementsButton>
        </div>
      </form>
    </UICard>
  </div>
</template>
