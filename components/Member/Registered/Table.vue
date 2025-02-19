<script setup lang="ts">
import Column from 'primevue/column'
import { orderTransactionData } from '~/utilities/dummy'

const { t } = useI18n()

type Props = {
  tableOnly?: any
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <div v-if="!props.tableOnly" class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-3 bg-[#F5F7F9] rounded-full w-fit py-1 px-4">
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
      <div class="">
        <ElementsInputText
          id="search"
          :placeholder="$t('text.searchData')"
          container-class="w-[240px]"
          icon-position="left"
        >
          <template #icon> <i class="pi pi-search"></i> </template>
        </ElementsInputText>
      </div>
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
        <!-- <Column field="orderer" :header="$t('label.orderer')" sortable style="min-width: 10rem">
            <template #sorticon>
              <IconSortable />
            </template>
          </Column> -->
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

    <div v-if="!props.tableOnly" class="px-8 -mx-[32px]">
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
</template>
