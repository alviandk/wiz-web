<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'
import InputSwitch from 'primevue/inputswitch'
import Divider from 'primevue/divider'
import { useSidebar } from '~/composable/layout'
import { useProductStore } from '~/stores/product'
import { useProductMaster } from './product-master-setup'

const { t } = useI18n()
const { onBack } = useSidebar()
const {
  onToggleModalBack,
  isModalBack,
  onChangeEditProduct,
  onToggleModalConfirmationDelete,
  isModalConfirmationDelete,
} = useProductMaster()
const { isEditableProduct } = storeToRefs(useProductStore())
const selectedHalal = ref(null)
const selectStatusActive = ref(true)
</script>

<template>
  <div>
    <UICard>
      <form @submit.prevent="">
        <div class="flex gap-4">
          <div class="w-full">
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.productCode') }}</p>
              <p v-if="!isEditableProduct" class="w-full text-sm font-normal text-[#333333] py-3">20230323020</p>
              <ElementsInputText
                v-else
                id="productCode"
                :placeholder="$t('placeholder.input', { label: $t('label.productCode') })"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.productName') }}</p>
              <p v-if="!isEditableProduct" class="w-full text-sm font-normal text-[#333333] py-3">
                PAKET 1: SEMBAKO UNTUK TOKO KELONTONG
              </p>
              <ElementsInputText
                v-else
                id="productName"
                :placeholder="$t('placeholder.input', { label: $t('label.productName') })"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.productCategory') }}</p>
              <p v-if="!isEditableProduct" class="w-full text-sm font-normal text-[#333333] py-3">
                Kuliner, Toko Kelontong
              </p>
              <ElementsInputSelect
                v-else
                id="productCategory"
                :placeholder="$t('placeholder.select', { label: $t('label.productCategory') })"
                :options="[
                  { name: 'A', code: 'a' },
                  { name: 'B', code: 'b' },
                ]"
                option-label="name"
                option-value="code"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.nameUnitLayer') }}</p>
              <p v-if="!isEditableProduct" class="w-full text-sm font-normal text-[#333333] py-3">Set</p>
              <ElementsInputSelect
                v-else
                id="nameUnitLayer"
                :placeholder="$t('placeholder.select', { label: $t('label.nameUnitLayer') })"
                :options="[
                  { name: 'A', code: 'a' },
                  { name: 'B', code: 'b' },
                ]"
                option-label="name"
                option-value="code"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.productDesc') }}</p>
              <p v-if="!isEditableProduct" class="w-full text-sm font-normal text-[#333333] py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <ElementsTextArea
                v-else
                id="productDesc"
                :placeholder="$t('placeholder.write', { label: $t('label.productDesc') })"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.ingredientsOpt') }}</p>
              <div v-if="!isEditableProduct" class="w-full text-sm font-normal text-[#333333] py-3">
                <ul class="text-sm text-[#333333] pl-4" style="list-style-type: disc">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit,</li>
                  <li>Sed do eiusmod tempor incididunt</li>
                  <li>Ut enim ad minim veniam</li>
                  <li>Quis nostrud exercitation</li>
                </ul>
              </div>
              <ElementsTextArea
                v-else
                id="ingredients"
                :placeholder="$t('placeholder.write', { label: $t('label.ingredients') })"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.halalNonHalal') }}</p>
              <div v-if="!isEditableProduct" class="w-full text-sm font-normal text-[#333333] py-3">
                <div class="flex gap-2 items-center"><img src="/images/halal.svg" />Halal</div>
              </div>
              <div v-else class="flex flex-col w-full">
                <SelectButton
                  v-model="selectedHalal"
                  :options="[
                    { name: t('text.halal'), value: 'halal', icon: '/images/halal.svg' },
                    { name: t('text.nonHalal'), value: 'non_halal', icon: '/images/non-halal.svg' },
                  ]"
                  option-label="name"
                  :pt="{
                    root: { class: 'custom-blue-button flex items-center gap-3' },
                    button: {
                      class: 'flex justify-center h-[48px] w-full bg-[#F3F7FB] rounded-xl !border-0 py-[5px] px-3',
                    },
                    label: { class: 'text-sm text-[#68788D] font-medium' },
                  }"
                >
                  <template #option="slotProps">
                    <img :src="slotProps.option.icon" class="mr-2" />
                    <p class="text-sm font-mediu">{{ slotProps.option.name }}</p>
                  </template>
                </SelectButton>
              </div>
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.productPrice') }}</p>
              <div v-if="!isEditableProduct" class="flex items-center w-full">
                <div class="w-[30%] text-sm font-normal text-[#333333] py-3">Rp. 3.200.000</div>
                <div class="w-auto text-sm font-normal text-[#333333] py-3">
                  <span class="font-semibold mr-3">Harga Spesial:</span> Rp. 3.200.000
                </div>
              </div>
              <div v-else class="flex gap-3 w-full">
                <ElementsInputText id="productPrice" :placeholder="$t('text.normalPrice')" icon-position="left">
                  <template #icon>
                    <p class="text-sm">{{ t('text.currencyIdr') }}</p>
                  </template>
                </ElementsInputText>
                <ElementsCheckbox
                  id="specialPrice"
                  :label="$t('text.specialPrice')"
                  :binary="true"
                  class="text-sm font-medium border-0 !h-fit !py-2 !px-3"
                />
                <ElementsInputText
                  id="distributorPrice"
                  :placeholder="$t('text.distributorPrice')"
                  icon-position="left"
                  :disabled="true"
                >
                  <template #icon>
                    <p class="text-sm">{{ t('text.currencyIdr') }}</p>
                  </template>
                </ElementsInputText>
              </div>
            </div>
            <Divider />
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.productStatus') }}</p>
              <div v-if="!isEditableProduct" class="w-full text-sm font-normal text-[#333333] py-3">Aktif</div>
              <div v-else class="w-full flex gap-3 items-center">
                <InputSwitch v-model="selectStatusActive" />
                <label
                  for="status"
                  class="text-sm font-medium"
                  :class="selectStatusActive ? 'text-[#19C29A]' : 'text-[#C2C2C2]'"
                >
                  <p>
                    {{ selectStatusActive ? $t('text.active') : $t('text.nonActive') }}
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div class="w-fit">
            <div v-if="!isEditableProduct" class="w-[192px] h-[192px] text-center cursor-pointer">
              <img src="/images/product.png" class="mx-auto rounded-xl" />
              <p class="text-sm font-semibold mt-2">Foto Produk</p>
            </div>
            <div v-else class="w-[192px] h-[192px] text-center cursor-pointer">
              <img src="/images/upload-image.svg" class="mx-auto" />
              <p class="text-sm font-semibold mt-2">Foto Produk</p>
              <p class="text-xs text-[#68788D] mt-1">
                Foto harus berformat .jpg, .jpeg, dan .png dengan resolusi minimal 600 x 600 pixel
              </p>
            </div>
          </div>
        </div>

        <div class="flex gap-3 items-center justify-between mt-6">
          <p class="text-sm text-[#68788D] font-medium">Ditambahkan pada: 30 Okt 2022, 09.41</p>
          <div class="flex gap-3">
            <ElementsButton v-if="!isEditableProduct" class="rounded-xl red-outline-button !w-fit !px-2.5">
              <IconTrash />
            </ElementsButton>
            <ElementsButton v-if="isEditableProduct" class="!w-[120px] red-outline-button" @click="onToggleModalBack">
              {{ $t('text.cancel') }}
            </ElementsButton>
            <ElementsButton v-if="isEditableProduct" class="!w-[120px]" disabled>
              {{ $t('text.publication') }}
            </ElementsButton>

            <ElementsButton v-if="!isEditableProduct" class="!w-fit red-light-button" @click="onChangeEditProduct">
              <IconEdit class="mr-3" />
              {{ $t('text.editProduct') }}
            </ElementsButton>
          </div>
        </div>
      </form>
    </UICard>

    <!-- Popup Cancel Save-->
    <UIDialog
      :root-class="`w-[460px]`"
      container-class="p-6"
      :visible="isModalBack"
      @update:visible="onToggleModalBack"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ $t('text.backToPrevPage') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>
          <p class="pb-10 text-base font-normal">{{ $t('text.dataCantBeSaved') }}</p>

          <div :class="`flex gap-4`">
            <ElementsButton
              class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent"
              @click="slotProps.closeCallback"
            >
              <p class="w-full font-semibold">{{ $t('text.cancel') }}</p>
            </ElementsButton>
            <ElementsButton @click="onBack">
              <p class="w-full font-semibold">{{ $t('text.yesGetBack') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>

    <!-- Popup Delete -->
    <UIDialog
      root-class="max-w-[460px]"
      container-class="p-6"
      :visible="isModalConfirmationDelete"
      @update:visible="onToggleModalConfirmationDelete"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ t('text.cantDeleteDistributor') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>
          <p class="pb-10 text-base font-normal">{{ $t('text.deleteDistributorInformation', { x: 'PIC' }) }}</p>

          <div class="flex gap-4 items-center justify-center">
            <ElementsButton class="red-dark-button" @click="slotProps.closeCallback">
              <p class="w-full font-semibold">{{ $t('text.understand') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>
