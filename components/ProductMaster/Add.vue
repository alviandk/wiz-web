<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'
import InputSwitch from 'primevue/inputswitch'
import Divider from 'primevue/divider'
import { useSidebar } from '~/composable/layout'
import { useProductMaster } from './product-master-setup'

const { t } = useI18n()
const { onBack } = useSidebar()
const { onToggleModalBack, isModalBack } = useProductMaster()
const selectedHalal = ref(null)
const selectStatusActive = ref(true)
</script>

<template>
  <div>
    <div class="bg-transparent !text-[#2B1713] text-md font-semibold !w-fit mb-6 cursor-pointer" @click="onBack">
      <i class="pi pi-arrow-left mr-3" />
      {{ $t('text.back') }}
    </div>
    <UICard>
      <form @submit.prevent="">
        <div class="flex gap-4">
          <div class="w-full">
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.productCode') }}</p>
              <ElementsInputText
                id="productCode"
                :placeholder="$t('placeholder.input', { label: $t('label.productCode') })"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.productName') }}</p>
              <ElementsInputText
                id="productName"
                :placeholder="$t('placeholder.input', { label: $t('label.productName') })"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.productCategory') }}</p>
              <ElementsInputSelect
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
              <ElementsInputSelect
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
              <ElementsTextArea
                id="productDesc"
                :placeholder="$t('placeholder.write', { label: $t('label.productDesc') })"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.ingredientsOpt') }}</p>
              <ElementsTextArea
                id="ingredients"
                :placeholder="$t('placeholder.write', { label: $t('label.ingredients') })"
              />
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
              <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.halalNonHalal') }}</p>
              <div class="flex flex-col w-full">
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
              <div class="flex gap-3 w-full">
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
              <div class="w-full flex gap-3 items-center">
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
            <div class="w-[192px] h-[192px] text-center cursor-pointer">
              <img src="/images/upload-image.svg" class="mx-auto" />
              <p class="text-sm font-semibold mt-2">Foto Produk</p>
              <p class="text-xs text-[#68788D] mt-1">
                Foto harus berformat .jpg, .jpeg, dan .png dengan resolusi minimal 600 x 600 pixel
              </p>
            </div>
          </div>
        </div>

        <div class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton
            class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]"
            @click="onToggleModalBack"
          >
            {{ $t('text.cancel') }}
          </ElementsButton>
          <ElementsButton class="!w-[120px]" disabled>
            {{ $t('text.publication') }}
          </ElementsButton>
        </div>
      </form>
    </UICard>

    <UIModalConfirmation
      :visible="isModalBack"
      :title="$t('text.backToPrevPage')"
      :description="$t('text.dataCantBeSaved')"
      :text-confirm="$t('text.yesGetBack')"
      :on-cancel="onToggleModalBack"
      :on-submit="onBack"
    />
  </div>
</template>
