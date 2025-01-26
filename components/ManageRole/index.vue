<script setup lang="ts">
import Column from 'primevue/column'
import { roleDataTable } from '~/utilities/dummy'

// const { t } = useI18n()
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
        <ElementsButton @click="navigateTo('/role/add')">
          <i class="pi pi-plus mr-3"></i>
          {{ $t('text.addRole') }}
        </ElementsButton>
      </div>
    </div>
    <UITable :value="roleDataTable">
      <template #default>
        <Column field="id" :header="$t('label.id')" sortable style="width: 25%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="roleName" :header="$t('label.roleName')" sortable style="width: 25%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="description" :header="$t('label.description')" sortable style="width: 25%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="width: 10%">
          <template #body>
            <ElementsButton
              class="!text-[12px] !rounded-full !h-fit !w-fit py-0 px-5"
              @click="navigateTo('/role/edit/1')"
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
  </div>
</template>
