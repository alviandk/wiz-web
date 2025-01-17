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
      <div class="flex justify-end items-center gap-3 mb-6">
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
            header-class="bg-[#F7F9FC]"
            sortable
            style="width: 20%; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column field="telepon" :header="$t('label.noHp')" header-class="bg-[#F7F9FC]" style="width: 20%" />
          <Column
            field="jenis_usaha"
            :header="$t('label.businessType')"
            header-class="bg-[#F7F9FC]"
            sortable
            style="width: 20%; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column
            field="nama_usaha"
            :header="$t('label.businessName')"
            header-class="bg-[#F7F9FC]"
            sortable
            style="width: 20%; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column
            field="alamat_usaha"
            :header="$t('label.businessAddress')"
            header-class="bg-[#F7F9FC]"
            sortable
            style="width: 20%; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column
            field="action"
            :header="$t('label.action')"
            header-class="bg-[#F7F9FC]"
            style="width: 20%; text-align: center"
          >
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
