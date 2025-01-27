<script setup lang="ts">
import Column from 'primevue/column'
import { productCategoryTable } from '~/utilities/dummy'
import { useProductCategoryStore } from '~/stores/product'
import { useProductCategory } from './product-category-setup'

const { t } = useI18n()
const {
  isModalCategoryAdd,
  isModalCategoryEdit,
  isModalConfirmationDelete,
  onToggleModalCategoryAdd,
  onToggleModalCategoryEdit,
  onToggleModalConfirmationDelete,
  onChangeEditCategory,
} = useProductCategory()
const { isEditableCategory } = storeToRefs(useProductCategoryStore())
</script>

<template>
  <div>
    <div class="flex justify-end items-center gap-3 mb-4">
      <div>
        <ElementsInputText
          id="search"
          :placeholder="$t('text.searchData')"
          container-class="w-[240px]"
          icon-position="left"
        >
          <template #icon> <i class="pi pi-search"></i> </template>
        </ElementsInputText>
      </div>
      <div>
        <ElementsButton @click="onToggleModalCategoryAdd">
          <i class="pi pi-plus mr-3"></i>
          {{ $t('text.addCategory') }}
        </ElementsButton>
      </div>
    </div>
    <UITable :value="productCategoryTable">
      <template #default>
        <Column field="initial" :header="$t('label.icon')" style="min-width: 6rem">
          <template #body="slotProps">
            <div class="initial-rounded-wrapper rounded-full w-10 h-10 text-base font-semibold text-white">
              {{ slotProps.data.initial }}
            </div>
          </template>
        </Column>
        <Column field="categoryCode" :header="$t('label.code')" style="min-width: 8rem" sortable>
          <template #sorticon>
            <IconSortable />
          </template>
          <template #body="slotProps">
            <p class="font-semibold">{{ slotProps.data.categoryCode }}</p>
          </template>
        </Column>
        <Column field="categoryName" :header="$t('label.categoryName')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="total" :header="$t('label.totalProduct')" sortable style="min-width: 8rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="min-width: 6rem">
          <template #body>
            <ElementsButton
              class="!text-[12px] !rounded-full !h-fit !w-fit py-0 px-5"
              @click="onToggleModalCategoryEdit"
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
      root-class="max-w-[500px]"
      container-class="p-6"
      :visible="isModalCategoryAdd"
      @update:visible="onToggleModalCategoryAdd"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ t('text.addCategory') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>

          <ElementsInputText
            id="categoryCode"
            :label="$t('label.categoryCode')"
            :placeholder="$t('placeholder.input', { label: $t('label.categoryCode') })"
          />
          <ElementsInputText
            id="categoryName"
            :label="$t('label.categoryName')"
            :placeholder="$t('placeholder.input', { label: $t('label.categoryName') })"
          />

          <div class="flex gap-4 items-center mt-5">
            <ElementsButton
              class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent"
              @click="slotProps.closeCallback"
            >
              <p class="w-full font-semibold">{{ $t('text.cancel') }}</p>
            </ElementsButton>
            <ElementsButton disabled>
              <p class="w-full font-semibold">{{ $t('text.save') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>

    <UIDialog
      root-class="max-w-[500px]"
      container-class="p-6"
      :visible="isModalCategoryEdit"
      @update:visible="onToggleModalCategoryEdit"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ t('text.editCategoryData', { code: '20230323123' }) }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>

          <div class="flex flex-col gap-3 mb-2">
            <p class="w-[40%] text-sm font-bold">{{ $t('label.categoryCode') }}</p>
            <p v-if="!isEditableCategory" class="w-full text-sm font-normal text-[#333333]">20230323123</p>
            <ElementsInputText
              v-else
              id="categoryCode"
              :placeholder="$t('placeholder.input', { label: $t('label.categoryCode') })"
            />
          </div>
          <div class="flex flex-col gap-3 mb-2">
            <p class="w-[40%] text-sm font-bold">{{ $t('label.categoryName') }}</p>
            <p v-if="!isEditableCategory" class="w-full text-sm font-normal text-[#333333]">20230323123</p>
            <ElementsInputText
              v-else
              id="categoryName"
              :placeholder="$t('placeholder.input', { label: $t('label.categoryName') })"
            />
          </div>
          <div class="flex gap-3 items-center justify-end mt-6">
            <ElementsButton
              class="rounded-xl !border !border-[#FF234B] bg-transparent !w-fit !px-2.5"
              @click="onToggleModalConfirmationDelete"
            >
              <IconTrash />
            </ElementsButton>
            <div>
              <ElementsButton
                v-if="isEditableCategory"
                class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]"
                @click="isEditableCategory = false"
              >
                {{ $t('text.cancel') }}
              </ElementsButton>
              <ElementsButton
                v-else
                class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]"
                @click="onToggleModalCategoryEdit"
              >
                {{ $t('text.cancel') }}
              </ElementsButton>
            </div>

            <ElementsButton v-if="isEditableCategory" class="!w-[120px]">
              {{ $t('text.save') }}
            </ElementsButton>
            <ElementsButton v-else class="!w-fit !bg-[#FDF0F1] !text-[#FF234B]" @click="onChangeEditCategory">
              <IconEdit class="mr-3" />
              {{ $t('text.editProduct') }}
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>

    <UIModalConfirmation
      :visible="isModalConfirmationDelete"
      :title="$t('text.deleteCategory')"
      :description="$t('text.deleteCategoryInformation', { catName: 'Agribisnis/Peternakan/Pertanian' })"
      :text-confirm="$t('text.delete')"
      :on-cancel="onToggleModalConfirmationDelete"
      :on-submit="() => {}"
    />
  </div>
</template>

<style scoped>
.initial-rounded-wrapper {
  background: radial-gradient(92.79% 162.5% at 50% 118.75%, #ffcd4b 0%, #ff234b 81.94%);
  padding: 8px 9px;
}
</style>
