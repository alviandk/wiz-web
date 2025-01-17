<script setup lang="ts">
import Column from 'primevue/column'
import { manageDashboardDataTable } from '~/utilities/dummy'
</script>

<template>
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
        <ElementsButton @click="navigateTo('/dashboard/add/1')">
          <i class="pi pi-plus mr-3"></i>
          {{ $t('text.addDashboard') }}
        </ElementsButton>
      </div>
    </div>
    <UITable :value="manageDashboardDataTable">
      <template #default>
        <Column
          field="title"
          :header="$t('label.title')"
          header-class="bg-[#F7F9FC]"
          sortable
          style="width: 20%; text-transform: capitalize"
        >
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column
          field="description"
          :header="$t('label.description')"
          header-class="bg-[#F7F9FC]"
          sortable
          style="width: 20%; text-transform: capitalize"
        >
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column
          field="priority"
          :header="$t('label.priority')"
          header-class="bg-[#F7F9FC]"
          sortable
          style="width: 20%; text-transform: capitalize"
        >
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column
          field="role"
          :header="$t('label.role')"
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
              @click="navigateTo('/dashboard/edit/1')"
            >
              {{ $t('text.detail') }}
            </ElementsButton>
          </template>
        </Column>
      </template>
    </UITable>
  </div>
</template>
