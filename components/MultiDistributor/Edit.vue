<script setup lang="ts">
import Divider from 'primevue/divider'
import { useMultiDistributorStore } from '~/stores/multi-distributor'
import { useMultiDistributor } from './multi-distributor-setup'

const { t } = useI18n()
const {
  onChangeEdit,
  onToggleModalConfirmationDelete,
  isModalConfirmationDelete,
  // onSubmitDelete,
  isModalResetPass,
  onToggleModalResetPass,
} = useMultiDistributor()
const { isEditable } = storeToRefs(useMultiDistributorStore())
</script>

<template>
  <div>
    <UICard>
      <form @submit.prevent="">
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.nib') }} ({{ $t('text.optional') }})</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">8120113103111</p>
          <ElementsInputText v-else id="nib" :placeholder="$t('placeholder.input', { label: $t('label.nib') })" />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.fullNameDistributor') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Herman Hermana</p>
          <ElementsInputText
            v-else
            id="fullNameDistributor"
            :placeholder="$t('placeholder.input', { label: $t('label.fullNameDistributor') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.phoneDistributor') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">6281234567890</p>
          <ElementsInputText
            v-else
            id="phoneDistributor"
            :placeholder="$t('placeholder.input', { label: $t('label.phoneDistributor') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.email') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">pdc@gmail.com</p>
          <ElementsInputText v-else id="email" :placeholder="$t('placeholder.input', { label: $t('label.email') })" />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.nikDistributor') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">3617282728177771</p>
          <ElementsInputText
            v-else
            id="nikDistributor"
            :placeholder="$t('placeholder.input', { label: $t('label.nikDistributor') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.npwpBusiness') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">081776613123321</p>
          <ElementsInputText
            v-else
            id="npwpBusiness"
            :placeholder="$t('placeholder.input', { label: $t('label.npwpBusiness') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.distributorName') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">PDC</p>
          <ElementsInputText
            v-else
            id="distributorName"
            :placeholder="$t('placeholder.input', { label: $t('label.distributorName') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.distributorCode') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">PDC001</p>
          <ElementsInputText
            v-else
            id="distributorCode"
            :placeholder="$t('placeholder.input', { label: $t('label.distributorCode') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.businessType') }} ({{ $t('text.optional') }})</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Retail</p>
          <ElementsInputSelect
            v-else
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
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">-</p>
          <ElementsTextArea
            v-else
            id="description"
            :placeholder="$t('placeholder.write', { label: $t('label.description') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.address') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">JL. ABCD</p>
          <ElementsTextArea
            v-else
            id="address"
            :placeholder="$t('placeholder.write', { label: $t('label.address') })"
          />
        </div>

        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.province') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">DKI Jakarta</p>
          <ElementsInputSelect
            v-else
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
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Kota Jakarta Pusat</p>
          <ElementsInputSelect
            v-else
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
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Kecamatan Gambir</p>
          <ElementsInputSelect
            v-else
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
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Kelurahan Gambir</p>
          <ElementsInputSelect
            v-else
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
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">10110</p>
          <ElementsInputText
            v-else
            id="zipCode"
            :placeholder="$t('placeholder.input', { label: $t('label.zipCode') })"
          />
        </div>

        <Divider />
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.namePIC') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Tanisim Hudan</p>
          <ElementsInputText
            v-else
            id="namePIC"
            :placeholder="$t('placeholder.input', { label: $t('label.namePIC') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.jobPositionPIC') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">PIC</p>
          <ElementsInputText
            v-else
            id="jobPositionPIC"
            :placeholder="$t('placeholder.input', { label: $t('label.jobPositionPIC') })"
          />
        </div>
        <div class="flex flex-wrap items-center md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.emailPIC') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">tanisim@gmail.com</p>
          <ElementsInputText
            v-else
            id="emailPIC"
            :placeholder="$t('placeholder.input', { label: $t('label.emailPIC') })"
          />
        </div>

        <div class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton
            class="rounded-xl blue-outline-button !w-fit !px-2.5"
            @click="onToggleModalConfirmationDelete"
          >
            <IconTrashBlue />
          </ElementsButton>
          <ElementsButton v-if="isEditable" class="!w-[120px] blue-outline-button" @click="isEditable = false">
            {{ $t('text.cancel') }}
          </ElementsButton>
          <ElementsButton v-if="isEditable" class="!w-[120px]" disabled>
            {{ $t('text.save') }}
          </ElementsButton>

          <ElementsButton v-if="!isEditable" class="!w-fit blue-light-button" @click="onChangeEdit">
            <IconEditBlue class="mr-3" />
            {{ $t('text.editDistributor') }}
          </ElementsButton>
        </div>
      </form>
    </UICard>

    <UIDialog
      root-class="max-w-[460px]"
      container-class="p-6"
      :visible="isModalConfirmationDelete"
      @update:visible="onToggleModalConfirmationDelete"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ t('text.cantDeleteDistributor') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>
          <p class="pb-10 text-base font-normal">{{ $t('text.deleteDistributorInformation', { x: 'PIC' }) }}</p>

          <div class="flex gap-4 items-center justify-center">
            <ElementsButton class="blue-dark-button" @click="slotProps.closeCallback">
              <p class="w-full font-semibold">{{ $t('text.understand') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>

    <UIDialog
      root-class="max-w-[500px]"
      container-class="p-6"
      :visible="isModalResetPass"
      @update:visible="onToggleModalResetPass"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ t('text.resetPassword') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>

          <ElementsInputText
            id="username"
            :label="$t('label.username')"
            :placeholder="$t('placeholder.input', { label: $t('label.username') })"
          />
          <ElementsInputPassword
            id="newPassword"
            :label="$t('label.newPassword')"
            :placeholder="$t('placeholder.input', { label: $t('label.newPassword') })"
          />

          <div class="flex gap-4 items-center mt-5">
            <ElementsButton
              class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent"
              @click="slotProps.closeCallback"
            >
              <p class="w-full font-semibold">{{ $t('text.cancel') }}</p>
            </ElementsButton>
            <ElementsButton>
              <p class="w-full font-semibold">{{ $t('text.save') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>
