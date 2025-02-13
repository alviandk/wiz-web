<script setup lang="ts">
import { dataUMKM } from '~/utilities/dummy'
import Column from 'primevue/column'

function onGoToPage() {
  //
}
function onPerPageChange() {
  //
}
</script>

<template>
  <div>
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
          <ElementsButton @click="navigateTo('/manage-umkm/add/1')">
            <i class="pi pi-plus mr-2"></i>
            {{ $t('text.addData') }}
          </ElementsButton>
        </div>
        <div>
          <ElementsButton class="!bg-[#FDF0F1] !text-[#FF234B]">
            <IconSheets class="mr-2" />
            {{ $t('text.importCsv') }}
          </ElementsButton>
        </div>
      </div>
      <UITable :value="dataUMKM">
        <template #default>
          <Column
            field="nama"
            :header="$t('label.fullName')"
            sortable
            style="min-width: 10rem; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
            <template #body="slotProps">
              <p class="text-sm font-semibold">{{ slotProps.data.nama }}</p>
            </template>
          </Column>
          <Column field="telepon" :header="$t('label.noHp')" style="min-width: 10rem" />
          <Column
            field="jenis_usaha"
            :header="$t('label.businessType')"
            sortable
            style="min-width: 10rem; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column
            field="nama_usaha"
            :header="$t('label.businessName')"
            sortable
            style="min-width: 10rem; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column
            field="alamat_usaha"
            :header="$t('label.businessAddress')"
            sortable
            style="min-width: 10rem; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column field="action" :header="$t('label.action')" style="min-width: 6rem; text-align: center">
            <template #body>
              <ElementsButton
                class="!text-[12px] !rounded-full !h-fit !w-fit py-0 px-5"
                @click="navigateTo('/manage-umkm/edit/1')"
              >
                {{ $t('text.detail') }}
              </ElementsButton>
            </template>
          </Column>
        </template>
      </UITable>
    </div>

    <div class="px-8 -mx-[32px]">
      <UIPagination
        :item-count="5"
        :per-page="5"
        :total-data="6"
        :on-go-to-page="onGoToPage"
        :on-page-size-change="onPerPageChange"
        :total-page="10"
        :page="1"
      />
    </div>
  </div>
</template>
