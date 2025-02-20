<script setup lang="ts">
const { t } = useI18n()
const params = useRequestURL().searchParams.get('s')

const homeUrl = ref({ text: '', link: '' })
if (params === 'waiting') {
  homeUrl.value.text = t('menu.waitingApproval')
  homeUrl.value.link = '/member/waiting-approval'
} else if (params === 'rejected') {
  homeUrl.value.text = t('text.historyApprovalReject')
  homeUrl.value.link = '/member/history'
} else {
  homeUrl.value.text = t('menu.registeredMember')
  homeUrl.value.link = '/member/registered'
}

const homeRoute = ref({
  label: homeUrl.value.text,
  route: homeUrl.value.link,
})
const itemsBreadcrumb = ref([{ label: t('menu.detailUmkm') }])
</script>
<template>
  <div>
    <ElementsBreadcrumb :home="homeRoute" :items="itemsBreadcrumb" />
    <UICard v-if="params !== 'registered'">
      <div class="flex flex-wrap md:flex-nowrap gap-4">
        <div class="w-full">
          <p class="text-base font-semibold pb-3">{{ $t('label.identityInformation') }}</p>
          <div class="border rounded-xl p-4">
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.memberCodeWiz') }}</p>
              <p class="text-sm font-semibold capitalize">LM0019012</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.identityPhoto') }}</p>
              <p class="text-sm font-semibold text-[#FF234B] capitalize cursor-pointer">
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
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.dataLeadsOrNo') }}</p>
              <p class="text-sm font-semibold text-[#FF234B] flex items-center gap-1 cursor-pointer">
                Data Leads <i class="pi pi-chevron-right" />
              </p>
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
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.averagesBuy') }}</p>
              <p class="text-sm font-semibold">Rp9.378.383</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.averagesBuyMonth') }}</p>
              <p class="text-sm font-semibold">Rp28.135.149</p>
            </div>
            <div class="w-full mb-4">
              <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.saldoPlafonRecommendation') }}</p>
              <p class="text-sm font-semibold">Rp50.000.000</p>
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
              <p class="text-sm font-semibold capitalize">KC BALAIKOTA</p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <p class="text-base font-semibold pb-3">{{ $t('label.loanApplicationStatus') }}</p>
          <div class="border rounded-xl p-4 mb-4">
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
            <div class="status-step flex items-center mb-4">
              <div class="step-icon rounded-full mr-2 relative approved">
                <img src="/images/icon-round-red.svg" class="w-7 h-7" />
              </div>
              <div class="flex gap-1 w-full rounded-xl bg-[#FFECF0] p-3.5 justify-between items-center">
                <div class="flex flex-col gap-1">
                  <p class="text-sm font-medium text-[#FF234B]">Ditolak oleh Bank DKI</p>
                  <p class="text-xs text-[#6C6C6C]">Pengajuan: 12 Des 2022, 09.41</p>
                </div>
                <img src="/images/icon-close.svg" class="w-3 h-3" />
              </div>
            </div>

            <div class="flex items-start gap-3 bg-[#FFF6E0] rounded-xl py-2.5 px-3.5 mt-8">
              <img src="/images/icon-warning.svg" class="w-5 h-5 mt-[8px]" />
              <div>
                <p class="text-xs text-[#6C6C6C]">Alasan Penolakan</p>
                <p class="text-sm font-medium text-[#333333]">Bank DKI menolak pengajuan UMKM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UICard>

    <MemberRegisteredDetail v-else />
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
