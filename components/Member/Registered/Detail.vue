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
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.memberCodeWiz') }}</p>
              <p class="text-sm font-semibold capitalize">LM0019012</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.identityPhoto') }}</p>
              <p class="text-sm font-semibold text-[#FF234B] capitalize">
                Lampiran Foto E-KTP UMKM <i class="pi pi-download ml-2"></i>
              </p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.identityNumber') }}</p>
              <p class="text-sm font-semibold capitalize">3519839209387776</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.fullNameOwner') }}</p>
              <p class="text-sm font-semibold capitalize">Budiman Agusta</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.placeBornDate') }}</p>
              <p class="text-sm font-semibold capitalize">Jakarta Barat, 20/03/1995</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.npwp') }}</p>
              <p class="text-sm font-semibold capitalize">8393738398190298</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.genderRequired') }}</p>
              <p class="text-sm font-semibold capitalize">Laki-laki</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.phoneNumber') }}</p>
              <p class="text-sm font-semibold capitalize">6281331631888</p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <p class="text-base font-semibold pb-3">{{ $t('label.businessType') }}</p>
          <div class="border rounded-xl p-4 mb-4">
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessType') }}</p>
              <p class="text-sm font-semibold capitalize">Kuliner</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessName') }}</p>
              <p class="text-sm font-semibold capitalize">Warung Sunda Budi</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessAddress') }}</p>
              <p class="text-sm font-semibold capitalize">
                Jalan ABC No. 129, Kebayoran Lama, Jakarta Selatan, DKI Jakarta
              </p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.businessTelp') }}</p>
              <p class="text-sm font-semibold capitalize">-</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.bankCreditStatus') }}</p>
              <p class="text-sm font-semibold capitalize">Lancar</p>
            </div>
          </div>
          <div class="border rounded-xl p-4">
            <div class="w-full mb-1">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.totalPurchases') }}</p>
              <p class="text-lg font-semibold capitalize">Rp15.930.000</p>
            </div>
            <div class="flex items-start gap-3 py-2.5">
              <img src="/images/icon-information.svg" class="w-5 h-5 mt-1.5" />
              <p class="text-xs text-[#68788D]">
                Total pembelian yang ditampilkan ini adalah nilai terhadap status Selesai pada pesanan
              </p>
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
                <p class="text-sm font-medium">Menunggu Approval</p>
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
                <img src="/images/icon-round-green.svg" class="w-7 h-7" />
              </div>
              <div class="flex flex-col gap-1 w-full rounded-xl bg-[#F5F7F9] p-3.5">
                <p class="text-sm font-medium">Disetujui</p>
                <div class="flex items-center justify-between">
                  <p class="text-xs text-[#6C6C6C]">Pada: 12 Des 2022, 14.41</p>
                  <img src="/images/icon-check.svg" class="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UICard>

    <div class="mt-6">
      <div class="flex items-center pb-3 gap-3">
        <p class="text-base font-semibold">{{ $t('label.transactionHistoryCompleted') }}</p>
        <button class="text-[#FF234B] text-sm font-semibold" @click="navigateTo('/order-transaction/LM0019011')">
          {{ $t('text.seeAll') }}
        </button>
      </div>
      <MemberRegisteredTable />

      <!-- if there's no data transaction -->
      <!-- <div class="m-auto flex justify-center items-center h-40">
        <p class="text-base font-semibold">{{ $t('text.noTransaction', { name: 'Budiman Agusta' }) }}</p>
      </div> -->
    </div>
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
