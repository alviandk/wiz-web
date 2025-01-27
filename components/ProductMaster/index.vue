<script setup lang="ts">
import Column from 'primevue/column'
import { productMasterTable } from '~/utilities/dummy'

const { t } = useI18n()
const selectedProducts = ref()
</script>

<template>
  <div>
    <div class="flex justify-between items-center gap-3 mb-4">
      <div>
        <ElementsInputSelect
          id="allStatus"
          :placeholder="$t('label.allStatus')"
          :options="[
            { name: t('text.active'), code: 'active' },
            { name: t('text.nonActive'), code: 'non_active' },
          ]"
          option-label="name"
          option-value="code"
        />
      </div>
      <div class="flex items-center gap-3">
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
          <ElementsButton @click="navigateTo('/product-master/add')">
            <i class="pi pi-plus mr-3"></i>
            {{ $t('text.addProduct') }}
          </ElementsButton>
        </div>
      </div>
    </div>
    <UITable v-model:selection="selectedProducts" :value="productMasterTable">
      <template #default>
        <Column selection-mode="multiple" header-style="width: 3rem"></Column>
        <Column field="productCode" :header="$t('label.productCode')" style="min-width: 10rem" sortable>
          <template #sorticon>
            <IconSortable />
          </template>
          <template #body="slotProps">
            <p class="font-semibold">{{ slotProps.data.productCode }}</p>
          </template>
        </Column>
        <Column field="photo" :header="$t('label.photo')" style="min-width: 6rem">
          <template #body="slotProps">
            <img :src="`${slotProps.data.url}`" class="w-14 h-14 rounded-xl" />
          </template>
        </Column>
        <Column field="productName" :header="$t('label.productName')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="productDesc" :header="$t('label.productDesc')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="category" :header="$t('label.category')" style="min-width: 8rem" />
        <Column field="status" :header="$t('label.status')" sortable style="min-width: 8rem">
          <template #sorticon>
            <IconSortable />
          </template>
          <template #body="slotProps">
            <p :class="slotProps.data.status === 'active' ? 'text-[#19C29A]' : 'text-[#C2C2C2]'">
              {{ slotProps.data.status === 'active' ? t('text.active') : t('text.nonActive') }}
            </p>
          </template>
        </Column>
        <Column field="productPrice" :header="$t('label.productPrice')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="min-width: 10rem">
          <template #body>
            <ElementsButton class="!text-[12px] !rounded-full !h-fit !w-fit py-0 px-5">
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
</template>
