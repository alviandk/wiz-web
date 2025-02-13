<script setup lang="ts">
import Column from 'primevue/column'
import { useMemberStore } from '~/stores/member'
import { orderTransactionData } from '~/utilities/dummy'
import { useMember } from '../member-setup'

const { t } = useI18n()
const { goToMemberCompleteHistory, onBackHistory } = useMember()
const { memberSelectedHistory, isShowCompleteHistory } = storeToRefs(useMemberStore())

const homeRoute = ref({
  label: t('text.historyApprovalReject'),
  route: '/member',
})
const itemsBreadcrumb = ref([{ label: t('menu.detailUmkm') }])
</script>
<template>
  <div>
    <div v-if="!isShowCompleteHistory">
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
          <button class="text-[#FF234B] text-sm font-semibold" @click="goToMemberCompleteHistory('Rezky Kurniawan')">
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

    <div v-else>
      <div
        class="bg-transparent !text-[#2B1713] text-md font-semibold !w-fit mb-6 cursor-pointer flex items-center gap-1"
        @click="onBackHistory"
      >
        <i class="pi pi-arrow-left mr-3" />
        <p class="text-xl font-semibold">{{ memberSelectedHistory }}</p>
      </div>
      <div class="flex items-center gap-3 bg-[#F5F7F9] rounded-full w-fit py-1 px-4 mb-4">
        <p class="text-sm font-medium text-[#68788D]">{{ t('label.totalPurchases') + ': ' }}</p>
        <p class="text-base font-semibold">Rp15.930.000</p>
        <img
          v-tooltip.right="{
            value: 'Total pembelian yang ditampilkan ini adalah nilai terhadap status Selesai pada pesanan',
            pt: {
              text: 'bg-primary font-normal text-sm',
            },
          }"
          src="/images/icon-information.svg"
          class="w-4 h-4"
        />
      </div>
      <UITable :value="orderTransactionData">
        <template #default>
          <Column field="transactionNumber" :header="$t('label.transactionNumber')" style="min-width: 10rem">
            <template #body="slotProps">
              <p class="font-semibold">{{ slotProps.data.transactionNumber }}</p>
            </template>
          </Column>
          <Column field="purchaseDate" :header="$t('label.purchaseDate')" sortable style="min-width: 10rem">
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column field="completionDate" :header="$t('label.completionDate')" sortable style="min-width: 10rem">
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column field="totalOrder" :header="$t('label.totalOrder')" sortable style="min-width: 10rem">
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column field="orderer" :header="$t('label.orderer')" sortable style="min-width: 10rem">
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column field="totalPayment" :header="$t('label.totalPayment')" sortable style="min-width: 10rem">
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column field="status" :header="$t('label.status')" sortable style="min-width: 10rem">
            <template #sorticon>
              <IconSortable />
            </template>
            <template #body="slotProps">
              <p
                v-if="slotProps.data.status === 'waiting_confirmation'"
                class="rounded-full px-2 p-1.5 text-xs font-medium w-max text-[#2E8CE2] bg-[#DEEDFF]"
              >
                {{ t('text.waitingConfirmation') }}
              </p>
              <p
                v-else-if="slotProps.data.status === 'order_processed' || slotProps.data.status === 'in_delivery'"
                class="rounded-full px-2 p-1.5 text-xs font-medium w-max text-[#F78431] bg-[#FFF6E0]"
              >
                {{ slotProps.data.status === 'order_processed' ? t('text.orderProcessed') : t('text.inDelivery') }}
              </p>
              <p
                v-else-if="slotProps.data.status === 'done'"
                class="rounded-full px-2 p-1.5 text-xs font-medium w-max text-[#19C29A] bg-[#E2FAF4]"
              >
                {{ t('text.done') }}
              </p>
              <p
                v-else-if="
                  slotProps.data.status === 'canceled_distributor' || slotProps.data.status === 'canceled_system'
                "
                class="rounded-full px-2 p-1.5 text-xs font-medium w-max text-[#FF3263] bg-[#FFECF0]"
              >
                {{
                  slotProps.data.status === 'canceled_distributor'
                    ? t('text.canceledDistributor')
                    : t('text.canceledSystem')
                }}
              </p>
            </template>
          </Column>
          <Column field="action" :header="$t('label.action')" style="min-width: 10rem">
            <template #body>
              <ElementsButton
                class="!text-[12px] !rounded-full !h-fit !w-fit py-0 px-5"
                @click="navigateTo('/order-transaction/1')"
              >
                {{ $t('text.detail') }}
              </ElementsButton>
            </template>
          </Column>
        </template>
      </UITable>
      <div class="px-8 -mx-[32px]">
        <UIPagination
          :item-count="5"
          :per-page="5"
          :total-data="6"
          :on-go-to-page="() => {}"
          :on-page-size-change="() => {}"
          :total-page="10"
          :page="1"
        />
      </div>
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
