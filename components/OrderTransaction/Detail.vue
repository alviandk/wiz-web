<script setup lang="ts">
import Steps from 'primevue/steps'
import Divider from 'primevue/divider'
import { useOrderTransaction } from './order-transaction-setup'

const { t } = useI18n()
const { isModalIngredients, onToggleModalIngredients, isModalDesc, onToggleModalDesc } = useOrderTransaction()

const homeRoute = ref({
  label: t('menu.orderTransaction'),
  route: '/order-transaction',
})
const itemsBreadcrumb = ref([{ label: t('menu.detailOrder') }])
const items = ref([
  {
    label: t('text.order'),
    icon: '/images/icon-shopping-cart.svg',
    // icon: 'pi pi-shopping-cart',
  },
  {
    label: t('text.orderProcessed'),
    icon: '/images/icon-delivery-box.svg',
    // icon: 'pi pi-box',
  },
  {
    label: t('text.inDelivery'),
    icon: '/images/icon-delivery-truck.svg',
    // icon: 'pi pi-car',
  },
  {
    label: t('text.done'),
    icon: '/images/icon-hand-cart.svg',
  },
])
</script>
<template>
  <div>
    <ElementsBreadcrumb :home="homeRoute" :items="itemsBreadcrumb" />
    <UICard class="flex items-center justify-between gap-3 mb-4">
      <div class="">
        <p class="text-sm text-[#68788D] font-normal pb-1">{{ $t('label.transactionNumber') }}</p>
        <p class="text-lg font-semibold uppercase">SW01112028392</p>
      </div>
      <div class="flex gap-3">
        <div class="border rounded-xl p-4 w-[400px]">
          <Steps :model="items" class="custom-steps">
            <template #item="{ item, active }">
              <span
                :class="[
                  'relative mb-12 inline-flex items-center justify-center border rounded-full h-[3rem] w-[3rem] z-10 cursor-pointer',
                  { 'bg-[#FF234B] !border-[#FF234B]': active, '!bg-white text-[#333333]': !active },
                ]"
              >
                <img :src="item.icon" class="w-6 h-6" />
              </span>
              <p class="absolute bottom-[10px] text-xs text-center pt-2">{{ item.label }}</p>
              <!-- {{ item }} {{ active }}
              <span :class="['inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer', { 'bg-primary': active, 'surface-overlay text-primary': !active }]">
                    <i :class="[item.icon, 'text-xl']" />
                </span> -->
            </template>
          </Steps>
        </div>
        <div class="border rounded-xl p-4">
          <p class="text-sm font-semibold pb-4">{{ t('text.doConfirmationOrder') }}</p>
          <div class="flex items-center justify-center gap-4">
            <ElementsButton class="!w-[140px] !text-[#FF234B] !border !border-[#FF234B] !bg-transparent">
              <p class="w-full font-semibold">{{ $t('text.canceled') }}</p>
            </ElementsButton>
            <ElementsButton class="!w-[140px]">
              <p class="w-full font-semibold">{{ $t('text.confirm') }}</p>
            </ElementsButton>
          </div>
        </div>
      </div>
    </UICard>
    <UICard>
      <div class="flex gap-3">
        <div class="w-[20%]">
          <p class="text-base font-semibold mb-2">{{ t('label.orderer') }}</p>
          <div class="flex gap-2 items-center relative cursor-pointer">
            <div class="w-10 h-10 bg-[#FFECF0] text-[#FF234B] rounded-full flex items-center justify-center p-2">
              BA
            </div>
            <div>
              <p class="text-sm font-semibold">Budi Agusta</p>
              <p class="text-xs text-[#FF234B] font-semibold cursor-pointer">{{ t('text.openProfile') }}</p>
            </div>
          </div>
        </div>
        <div class="w-[40%]">
          <p class="text-base font-semibold mb-2">{{ t('label.deliveryAddress') }}</p>
          <div>
            <p class="text-base text-[#2E8CE2] font-semibold mb-1">Toko Jaya Abadi (6281331631888)</p>
            <p class="text-sm">
              Jalan ABC No. 12, RT010/011, Grogol Selatan, Kebayoran Lama, Kota Jakarta Selatan, 12220
            </p>
          </div>
        </div>
        <div class="w-[20%]">
          <p class="text-base font-semibold mb-2">{{ t('label.paymentMethod') }}</p>
          <img src="/images/logo-bank-dki.svg" />
        </div>
        <div class="w-[20%]">
          <p class="text-base font-semibold mb-2">{{ t('label.timeEstimation') }}</p>
          <div>-</div>
        </div>
      </div>
      <Divider />
      <div>
        <p class="text-base font-semibold">{{ t('label.totalOrder') + ' (2)' }}</p>
        <div class="flex gap-4 mt-4">
          <img src="/images/product.png" class="rounded-xl w-[72px] h-[72px]" />
          <div class="w-auto text-sm font-semibold">
            <p>PAKET 1: SEMBAKO UNTUK TOKO KELONTONG</p>
            <p class="text-[#FF234B]">Rp3.200.000</p>
          </div>
          <div class="w-[15%] text-sm font-normal">
            <p class="text-[#68788D]">{{ t('label.totalOrder') }}</p>
            <p class="text-[#333333] font-semibold">1</p>
          </div>
          <div class="w-[20%] text-sm font-normal">
            <p class="text-[#68788D]">{{ t('label.ingredients') }}</p>
            <p class="text-[#FF234B] font-semibold cursor-pointer" @click="onToggleModalIngredients">
              Baca Selengkapnya
            </p>
          </div>
          <div class="w-[20%] text-sm font-normal">
            <p class="text-[#68788D]">{{ t('label.productDesc') }}</p>
            <p class="text-[#FF234B] font-semibold cursor-pointer" @click="onToggleModalDesc">Baca Selengkapnya</p>
          </div>
          <div class="w-[20%] text-sm font-normal">
            <p class="text-[#68788D]">{{ t('label.subtotalPayment') }}</p>
            <p class="text-[#333333] font-semibold">Rp3.200.000</p>
          </div>
        </div>
        <div class="flex gap-4 mt-4">
          <img src="/images/product.png" class="rounded-xl w-[72px] h-[72px]" />
          <div class="w-auto text-sm font-semibold">
            <p>PAKET 1: SEMBAKO UNTUK TOKO KELONTONG</p>
            <p class="text-[#FF234B]">Rp3.200.000</p>
          </div>
          <div class="w-[15%] text-sm font-normal">
            <p class="text-[#68788D]">{{ t('label.totalOrder') }}</p>
            <p class="text-[#333333] font-semibold">1</p>
          </div>
          <div class="w-[20%] text-sm font-normal">
            <p class="text-[#68788D]">{{ t('label.ingredients') }}</p>
            <p class="text-[#FF234B] font-semibold cursor-pointer" @click="onToggleModalIngredients">
              Baca Selengkapnya
            </p>
          </div>
          <div class="w-[20%] text-sm font-normal">
            <p class="text-[#68788D]">{{ t('label.productDesc') }}</p>
            <p class="text-[#FF234B] font-semibold cursor-pointer" @click="onToggleModalDesc">Baca Selengkapnya</p>
          </div>
          <div class="w-[20%] text-sm font-normal">
            <p class="text-[#68788D]">{{ t('label.subtotalPayment') }}</p>
            <p class="text-[#333333] font-semibold">Rp3.200.000</p>
          </div>
        </div>
        <!-- <p class="mt-2 flex justify-center text-base text-[#FF234B] font-semibold cursor-pointer">
          {{ t('text.seeAllOrder') }}
        </p> -->
        <Divider />
        <div class="flex justify-between">
          <p class="w-full text-[#333333] font-semibold">{{ t('label.totalPayment') }}</p>
          <p class="w-[20%] text-[#FF234B] font-semibold">Rp6.400.000</p>
        </div>
      </div>
    </UICard>

    <!-- Popup Ingredients -->
    <UIDialog
      root-class="max-w-[500px]"
      container-class="p-6"
      :visible="isModalIngredients"
      @update:visible="onToggleModalIngredients"
    >
      <template #default="slotProps">
        <div class="flex justify-between w-full">
          <p class="text-xl font-semibold">{{ t('label.ingredients') }}</p>
          <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
        </div>

        <div class="flex flex-col gap-4 mt-4">
          <div>
            <p class="text-sm font-semibold">{{ $t('label.productName') }}</p>
            <p class="text-sm">PAKET 1: SEMBAKO UNTUK TOKO KELONTONG</p>
          </div>
          <div>
            <p class="text-sm font-semibold">{{ $t('label.ingredients') }}</p>
            <ul class="text-sm text-[#333333] pl-4" style="list-style-type: disc">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit,</li>
              <li>Sed do eiusmod tempor incididunt</li>
              <li>Ut enim ad minim veniam</li>
              <li>Quis nostrud exercitation</li>
            </ul>
          </div>
        </div>
      </template>
    </UIDialog>

    <!-- Popup Product Description -->
    <UIDialog
      root-class="max-w-[500px]"
      container-class="p-6"
      :visible="isModalDesc"
      @update:visible="onToggleModalDesc"
    >
      <template #default="slotProps">
        <div class="flex justify-between w-full">
          <p class="text-xl font-semibold">{{ t('label.productDesc') }}</p>
          <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
        </div>

        <div class="flex flex-col gap-4 mt-4">
          <div>
            <p class="text-sm font-semibold">{{ $t('label.productName') }}</p>
            <p class="text-sm">PAKET 1: SEMBAKO UNTUK TOKO KELONTONG</p>
          </div>
          <div>
            <p class="text-sm font-semibold">{{ $t('label.productDesc') }}</p>
            <div class="text-sm text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. <br /><br />

              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum. <br /><br />

              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </div>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>

<style>
.custom-steps .p-steps-item:before {
  /* border-color: #ff234b; */
  margin-top: 0;
}
.p-steps .p-steps-item:first-child::before {
  width: calc(50% + 1rem);
  transform: translateX(100%);
}
.p-steps .p-steps-item:last-child::before {
  width: 50%;
}
.p-steps .p-steps-item:before {
  top: 30%;
}
</style>
