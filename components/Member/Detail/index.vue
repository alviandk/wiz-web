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
        <MemberDetailStatus />
      </div>
    </UICard>
  </div>
</template>
