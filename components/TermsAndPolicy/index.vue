<script setup lang="ts">
import { useTermsAndPolicy } from './terms-and-policy-setup'

const { t } = useI18n()

const { isModalConfirmationDelete, onToggleModalConfirmationDelete, onSubmitDelete } = useTermsAndPolicy()
</script>

<template>
  <div>
    <UICard>
      <div class="grid grid-cols-2 mb-6">
        <div>
          <label class="font-semibold text-sm text-[#333333]">
            {{ t('label.title') }}
          </label>
          <p class="text-sm font-normal mt-3">Syarat dan Ketentuan Privasi</p>
        </div>
        <div>
          <label class="font-semibold text-sm text-[#333333]">
            {{ t('label.category') }}
          </label>
          <p class="text-sm font-normal mt-3">UMKM</p>
        </div>
      </div>

      <p class="font-semibold text-sm text-[#333333] mb-2">{{ t('text.writeTermsAndPolicy') }}</p>
      <div class="border rounded-xl p-4">
        <div>
          <p class="font-semibold text-base text-[#333333] mb-3">{{ t('termsAndPolicy.general.title') }}</p>
          <p class="font-normal text-sm text-[#333333]">{{ t('termsAndPolicy.general.description') }}</p>
        </div>
        <div>
          <p class="font-semibold text-base text-[#333333] my-3">{{ t('termsAndPolicy.general.title') }}</p>
          <p class="font-normal text-sm text-[#333333]">{{ t('termsAndPolicy.general.description') }}</p>
        </div>
        <div>
          <p class="font-semibold text-base text-[#333333] my-3">{{ t('termsAndPolicy.general.title') }}</p>
          <p class="font-normal text-sm text-[#333333]">{{ t('termsAndPolicy.general.description') }}</p>
        </div>
      </div>

      <div class="flex justify-between flex-wrap md:flex-nowrap items-center mt-6">
        <p class="font-medium text-sm text-[#68788D] pb-4 md:pb-0">Ditambahkan pada: 30 Okt 2022, 09.41</p>
        <div class="flex gap-3 items-center justify-end">
          <ElementsButton
            class="rounded-xl !border !border-[#FF234B] bg-transparent !w-fit !px-2.5"
            @click="onToggleModalConfirmationDelete"
          >
            <IconTrash />
          </ElementsButton>
          <ElementsButton class="!w-fit !bg-[#FDF0F1] !text-[#FF234B]">
            <IconEdit class="mr-3" />
            {{ $t('text.editS&K') }}
          </ElementsButton>
        </div>
      </div>
    </UICard>

    <UIModalConfirmation
      :visible="isModalConfirmationDelete"
      :title="$t('text.deleteS&K')"
      :description="$t('text.deleteS&KInformation')"
      :text-confirm="$t('text.delete')"
      :on-cancel="onToggleModalConfirmationDelete"
      :on-submit="onSubmitDelete"
    />
  </div>
</template>
