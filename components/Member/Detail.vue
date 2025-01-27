<script setup lang="ts">
const { t } = useI18n()

const homeRoute = ref({
  label: t('text.historyApprovalReject'),
  route: '/member',
})
const itemsBreadcrumb = ref([{ label: t('menu.detailUmkm') }])
</script>
<template>
  <div>
    <ElementsBreadcrumb :home="homeRoute" :items="itemsBreadcrumb" />
    <UICard>
      <div class="flex flex-wrap md:flex-nowrap gap-4">
        <div class="w-full">
          <p class="text-base font-semibold pb-3">{{ $t('label.personalInformation') }}</p>
          <div class="border rounded-xl p-4">
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.memberCode') }}</p>
              <p class="text-sm font-semibold text-[#FF234B] capitalize">LM0019012</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.identityNumber') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">3519839209387776</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.name') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">Budiman Agusta</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.placeBornDate') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">Jakarta Barat, 20/03/1995</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.npwp') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">8393738398190298</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.genderRequired') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">Laki-laki</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.phoneNumber') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">6281331631888</p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <p class="text-base font-semibold pb-3">{{ $t('label.businessType') }}</p>
          <div class="border rounded-xl p-4">
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessType') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">Kuliner</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessName') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">Warung Sunda Budi</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessCreated') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">September 2020</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessAddress') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">
                Jalan ABC No. 129, Kebayoran Lama, Jakarta Selatan, DKI Jakarta
              </p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.postCode') }}</p>
              <p class="text-sm font-semibold text-[#333333] capitalize">12220 - Grogol Selatan, Kebayoran Lama</p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <p class="text-base font-semibold pb-3">{{ $t('label.loanApplicationStatus') }}</p>
          <div class="border rounded-xl p-4">
            <div class="status-step flex items-center mb-4">
              <div class="step-icon rounded-full mr-2 relative approved">
                <img src="/images/icon-round-green.svg" class="w-7 h-7" />
                <div class="line"></div>
              </div>
              <div class="flex flex-col gap-1 w-full rounded-xl bg-[#F5F7F9] p-3.5">
                <p class="text-sm font-medium text-[#333333]">Menunggu Approval</p>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-xs text-[#6C6C6C]">Pengajuan: 12 Des 2022, 09.41</p>
                    <p class="text-xs text-[#6C6C6C]">Disetujui: 12 Des 2022, 12.41</p>
                  </div>
                  <img src="/images/icon-check.svg" class="w-4 h-4" />
                </div>
              </div>
            </div>
            <div class="status-step flex items-center">
              <div class="step-icon rounded-full mr-2 relative reject">
                <img src="/images/icon-round-red.svg" class="w-7 h-7" />
              </div>
              <div class="flex flex-col gap-1 w-full rounded-xl bg-[#F5F7F9] p-3.5">
                <p class="text-sm font-medium text-[#333333]">Ditolak oleh Bank DKI</p>
                <div class="flex items-center justify-between">
                  <p class="text-xs text-[#6C6C6C]">Pada: 12 Des 2022, 14.41</p>
                  <img src="/images/icon-close.svg" class="w-3 h-3" />
                </div>
              </div>
            </div>
            <!-- v-if rejectedHistory -->
            <div class="flex items-start gap-3 bg-[#FFF6E0] rounded-xl py-2.5 px-3.5 mt-8">
              <img src="/images/icon-warning.svg" class="w-5 h-5 mt-[8px]" />
              <div>
                <p class="text-xs text-[#6C6C6C]">Alasan Penolakan</p>
                <p class="text-sm font-medium text-[#333333]">Bank DKI menolak pengajuan UMKM</p>
              </div>
            </div>

            <!-- v-if="waitingApproval" -->
            <!-- <div class="mt-8">
              <div class="text-sm text-[#333333] font-semibold">
                {{ t('text.doConfirmApproval') }}
              </div>
              <div class="flex items-center justify-center gap-4 mt-4">
                <ElementsButton class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent">
                  <p class="w-full font-semibold">{{ $t('text.reject') }}</p>
                </ElementsButton>
                <ElementsButton>
                  <p class="w-full font-semibold">{{ $t('text.approve') }}</p>
                </ElementsButton>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </UICard>
  </div>
</template>

<style scoped>
.line {
  top: 27px;
  left: 11px;
  height: 70px;
  position: absolute;
  border-left: 2px solid #eeeeee;
}
</style>
