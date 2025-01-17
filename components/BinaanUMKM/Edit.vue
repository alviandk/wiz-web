<script setup lang="ts">
import { useSidebar } from '~/composable/layout'
import { useBinaanUmkmStore } from '~/stores/binaan-umkm'
import { useBinaanUmkm } from './binaan-umkm-setup'

const { onBack } = useSidebar()
const { onChangeEdit, isModalConfirmationDelete, onToggleModalConfirmationDelete, onSubmitDelete } = useBinaanUmkm()
const { isEditable } = storeToRefs(useBinaanUmkmStore())
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
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.fullName') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">John</p>
          <ElementsInputText
            v-else
            id="fullName"
            :placeholder="$t('placeholder.input', { label: $t('label.fullName') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.gender') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Laki-laki</p>
          <ElementsInputText v-else id="gender" :placeholder="$t('placeholder.input', { label: $t('label.gender') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.phoneNumber') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">0987654321</p>
          <ElementsInputText
            v-else
            id="phoneNumber"
            :placeholder="$t('placeholder.input', { label: $t('label.phoneNumber') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.businessType') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Toko Bangunan</p>
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
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.businessName') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Toko Jaya</p>
          <ElementsInputText
            v-else
            id="businessName"
            :placeholder="$t('placeholder.input', { label: $t('label.businessName') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.businessAddress') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Jakarta Pusat</p>
          <ElementsInputText
            v-else
            id="businessAddress"
            :placeholder="$t('placeholder.write', { label: $t('label.businessAddress') })"
          />
        </div>

        <div v-if="isEditable" class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton
            class="rounded-xl !border !border-[#FF234B] bg-transparent !w-fit !px-2.5"
            @click="onToggleModalConfirmationDelete"
          >
            <IconTrash />
          </ElementsButton>
          <ElementsButton
            class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]"
            @click="isEditable = false"
          >
            {{ $t('text.cancel') }}
          </ElementsButton>
          <ElementsButton class="!w-[120px]">
            {{ $t('text.save') }}
          </ElementsButton>
        </div>
        <div v-else class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton
            class="rounded-xl !border !border-[#FF234B] bg-transparent !w-fit !px-2.5"
            @click="onToggleModalConfirmationDelete"
          >
            <IconTrash />
          </ElementsButton>
          <ElementsButton class="!w-fit !bg-[#FDF0F1] !text-[#FF234B]" @click="onChangeEdit">
            <IconEdit class="mr-3" />
            {{ $t('text.editProduct') }}
          </ElementsButton>
        </div>
      </form>
    </UICard>

    <UIModalConfirmation
      :visible="isModalConfirmationDelete"
      :title="$t('text.deleteUmkm')"
      :description="$t('text.deleteUmkmInformation', { name: 'John' })"
      :text-confirm="$t('text.delete')"
      :on-cancel="onToggleModalConfirmationDelete"
      :on-submit="onSubmitDelete"
    />
  </div>
</template>
