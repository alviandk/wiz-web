<script setup lang="ts">
import Column from 'primevue/column'
import SelectButton from 'primevue/selectbutton'
import { orderTransactionData } from '~/utilities/dummy'
import { useOrderTransaction } from './order-transaction-setup'

const { t } = useI18n()
const { isModalFilter, onToggleModalFilter } = useOrderTransaction()

const selectedGender = ref(null)
const selectedOrderTransactionData = ref()
</script>

<template>
  <div>
    <div class="flex justify-between items-center gap-3 mb-4">
      <div>
        <ElementsInputSelect
          id="allStatus"
          :placeholder="$t('label.allStatus')"
          :options="[
            { name: 'Menunggu Konfirmasi', code: 'waitingConfirmation' },
            { name: 'Pesanan Diproses', code: 'orderProcessed' },
            { name: 'Pesanan Diterima', code: 'orderReceived' },
            { name: 'Dalam Pengiriman', code: 'inDelivery' },
            { name: 'Dibatalkan Distributor', code: 'canceledDistributor' },
            { name: 'Dibatalkan Sistem', code: 'canceledSystem' },
            { name: 'Selesai', code: 'done' },
          ]"
          option-label="name"
          option-value="code"
        />
      </div>
      <div class="flex items-center gap-3">
        <div>
          <ElementsButton class="!bg-[#FFECF0] !text-[#FF3263]" @click="onToggleModalFilter">
            <img src="/images/icon-filter.svg" class="w-6 h-6 mr-2" />
            {{ $t('text.filter') }}
          </ElementsButton>
        </div>
        <div>
          <ElementsInputText
            id="search"
            :placeholder="$t('text.searchData')"
            container-class="w-[250px]"
            icon-position="left"
          >
            <template #icon> <i class="pi pi-search"></i> </template>
          </ElementsInputText>
        </div>
      </div>
    </div>
    <UITable v-model:selection="selectedOrderTransactionData" :value="orderTransactionData">
      <template #default>
        <Column selection-mode="multiple" header-style="width: 3rem"></Column>
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
        <Column field="totalOrder" :header="$t('label.totalOrder')" sortable style="min-width: 8rem">
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

    <UIDialog
      :visible="isModalFilter"
      root-class="max-w-[500px]"
      container-class="p-6"
      @update:visible="onToggleModalFilter"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between w-full">
            <p class="text-xl font-semibold">{{ $t('text.filter') }}</p>
            <button class="text-[#FF234B] text-sm font-semibold">{{ $t('text.resetFilter') }}</button>
          </div>
          <form @submit.prevent="">
            <div class="">
              <p class="text-sm font-semibold py-3">{{ $t('label.genderRequired') }}</p>
              <SelectButton
                v-model="selectedGender"
                :options="[
                  { name: t('text.waitingConfirmation'), value: 'L' },
                  { name: t('text.orderProcessed'), value: 'P' },
                  { name: t('text.inDelivery'), value: 'P' },
                  { name: t('text.orderReceived'), value: 'P' },
                  { name: t('text.canceledDistributor'), value: 'P' },
                  { name: t('text.canceledSystem'), value: 'P' },
                  { name: t('text.done'), value: 'P' },
                ]"
                option-label="name"
                :pt="{
                  root: { class: 'flex flex-wrap items-center gap-3' },
                  button: { class: 'rounded-xl !border !border-r py-[5px] px-3' },
                  label: { class: 'text-sm text-[#68788D] font-medium' },
                }"
              />
            </div>
            <div class="">
              <p class="text-sm font-semibold py-3">{{ $t('label.totalOrder') }}</p>
              <div class="flex items-center gap-2">
                <div>
                  <ElementsInputText
                    id="start"
                    :label="$t('text.start')"
                    :placeholder="$t('placeholder.input', { label: $t('text.start') })"
                    is-only-number
                  />
                </div>
                <div>
                  <ElementsInputText
                    id="until"
                    :label="$t('text.until')"
                    :placeholder="$t('placeholder.input', { label: $t('text.until') })"
                    is-only-number
                  />
                </div>
              </div>
            </div>
            <div class="mt-4">
              <p class="text-sm font-semibold pt-3">{{ $t('label.purchaseDates') }}</p>
              <div class="flex items-center gap-2">
                <div>
                  <p class="text-sm font-semibold py-3">{{ $t('text.startDate') }}</p>
                  <ElementsDatepicker
                    id="startDate"
                    placeholder="dd/mm/yyyy"
                    root-class="h-10"
                    container-class="w-[227px]"
                    :max-date="new Date()"
                  />
                </div>
                <div>
                  <p class="text-sm font-semibold py-3">{{ $t('text.endDate') }}</p>
                  <ElementsDatepicker
                    id="endDate"
                    placeholder="dd/mm/yyyy"
                    root-class="h-10"
                    container-class="w-[227px]"
                    :max-date="new Date()"
                  />
                  <!-- :disabled="!props.startDate"
                :min-date="props.startDate" -->
                </div>
              </div>
            </div>
            <div class="mt-4">
              <p class="text-sm font-semibold pt-3">{{ $t('label.completionDates') }}</p>
              <div class="flex items-center gap-2">
                <div>
                  <p class="text-sm font-semibold py-3">{{ $t('text.startDate') }}</p>
                  <ElementsDatepicker
                    id="startDate"
                    placeholder="dd/mm/yyyy"
                    root-class="h-10"
                    container-class="w-[227px]"
                    :max-date="new Date()"
                  />
                </div>
                <div>
                  <p class="text-sm font-semibold py-3">{{ $t('text.endDate') }}</p>
                  <ElementsDatepicker
                    id="endDate"
                    placeholder="dd/mm/yyyy"
                    root-class="h-10"
                    container-class="w-[227px]"
                    :max-date="new Date()"
                  />
                  <!-- :disabled="!props.startDate"
                :min-date="props.startDate" -->
                </div>
              </div>
            </div>
          </form>
          <div class="flex items-center justify-center gap-4 mt-4">
            <ElementsButton
              class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent"
              @click="slotProps.closeCallback"
            >
              <p class="w-full font-semibold">{{ $t('text.cancel') }}</p>
            </ElementsButton>
            <ElementsButton>
              <p class="w-full font-semibold">{{ $t('text.apply') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>
