<script setup lang="ts">
const { t } = useI18n()
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

      <div class="flex justify-between items-center mt-6">
        <p class="font-medium text-sm text-[#68788D]">Ditambahkan pada: 30 Okt 2022, 09.41</p>
        <div class="flex gap-3 items-center justify-end">
          <ElementsButton class="rounded-xl !border !border-[#FF234B] bg-transparent !w-fit !px-2.5">
            <IconTrash />
          </ElementsButton>
          <ElementsButton class="!w-fit !bg-[#FDF0F1] !text-[#FF234B]">
            <IconEdit class="mr-3" />
            {{ $t('text.editS&K') }}
          </ElementsButton>
        </div>
      </div>
    </UICard>
  </div>
</template>
