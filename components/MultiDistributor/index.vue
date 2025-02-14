<script setup lang="ts">
import Column from 'primevue/column'
import { multiDistributorData } from '~/utilities/dummy'
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
        <ElementsButton class="blue-dark-button" @click="navigateTo('/multi-distributor/add/1')">
          <i class="pi pi-plus mr-3"></i>
          {{ $t('text.addDistributor') }}
        </ElementsButton>
      </div>
    </div>
    <UITable :value="multiDistributorData">
      <template #default>
        <Column field="distributorName" :header="$t('label.distributorName')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="distributorCode" :header="$t('label.distributorCode')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="phone" :header="$t('label.noHp')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="email" :header="$t('label.email')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="distributorAddress" :header="$t('label.distributorAddress')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="total_umkm" :header="$t('label.umkmTotal')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="min-width: 6rem; text-align: center">
          <template #body>
            <ElementsButton
              class="blue-dark-button !rounded-lg !text-[12px] !h-fit !w-fit py-0 px-5"
              @click="navigateTo('/multi-distributor/edit/1')"
            >
              {{ $t('text.detail') }}
            </ElementsButton>
          </template>
        </Column>
      </template>
    </UITable>
  </div>
</template>
