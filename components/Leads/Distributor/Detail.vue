<script setup lang="ts">
import { useLeads } from '../leads-setup'

const { t } = useI18n()

const homeRoute = ref({
  label: t('menu.leadsData'),
  route: '/leads',
})
const itemsBreadcrumb = ref([{ label: t('menu.detailUmkm') }])

const { isModalDelete, onToggleModalDelete } = useLeads()
</script>
<template>
  <div>
    <ElementsBreadcrumb :home="homeRoute" :items="itemsBreadcrumb" />
    <UICard>
      <div class="flex gap-3">
        <div class="w-full">
          <p class="text-base font-semibold pb-3">{{ $t('label.identityInformation') }}</p>
          <div class="border rounded-xl p-4">
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.status') }}</p>
              <p class="text-sm font-semibold capitalize text-[#F78431]">Verifikasi Bank DKI</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.fullNameOwner') }}</p>
              <p class="text-sm font-semibold capitalize">Rezky Kurniawan</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.phoneNumberOwner') }}</p>
              <p class="text-sm font-semibold">6281331631888</p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <p class="text-base font-semibold pb-3">{{ $t('label.businessType') }}</p>
          <div class="border rounded-xl p-4">
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessName') }}</p>
              <p class="text-sm font-semibold capitalize">Warung Sunda Budi</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessAddress') }}</p>
              <p class="text-sm font-semibold">Jalan ABC No. 129, Kebayoran Lama, Jakarta Selatan, DKI Jakarta</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.averagesBuy') }}</p>
              <p class="text-sm font-semibold">Rp9.378.383</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.averagesBuyMonth') }}</p>
              <p class="text-sm font-semibold">Rp28.135.149</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.saldoPlafonRecommendation') }}</p>
              <p class="text-sm font-semibold">-</p>
            </div>
            <div class="w-full flex gap-3 mb-4">
              <div class="w-[50%]">
                <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.topOrCash') }}</p>
                <p class="text-sm font-semibold uppercase">TOP</p>
              </div>
              <div class="w-[50%]">
                <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.day') }}</p>
                <p class="text-sm font-semibold capitalize">7 hari</p>
              </div>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.umkmHaveBankAccount') }}</p>
              <p class="text-sm font-semibold capitalize">Punya</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.branchDKI') }}</p>
              <p class="text-sm font-semibold capitalize">-</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-3 items-center justify-end mt-6">
        <ElementsButton
          class="rounded-xl !border !border-[#FF234B] bg-transparent !w-fit !px-2.5"
          @click="onToggleModalDelete"
        >
          <IconTrash />
        </ElementsButton>
        <ElementsButton class="!w-fit !bg-[#FDF0F1] !text-[#FF234B]" @click="navigateTo('/leads/edit/1')">
          <IconEdit class="mr-3" />
          {{ $t('text.editData') }}
        </ElementsButton>
      </div>
    </UICard>

    <!-- Popup Delete -->
    <UIModalConfirmation
      :visible="isModalDelete"
      :title="$t('text.deleteDataLeads')"
      :description="$t('text.deleteDataLeadsInfo', { x: 'Warung Sunda Budi' })"
      :text-confirm="$t('text.delete')"
      :on-cancel="onToggleModalDelete"
      :on-submit="() => {}"
    />
  </div>
</template>
