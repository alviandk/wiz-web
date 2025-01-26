<script setup lang="ts">
import Column from 'primevue/column'
import { userData } from '~/utilities/dummy'

const { t } = useI18n()
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
        <ElementsButton @click="navigateTo('/user/add')">
          <i class="pi pi-plus mr-3"></i>
          {{ $t('text.addUser') }}
        </ElementsButton>
      </div>
    </div>
    <UITable :value="userData">
      <template #default>
        <Column field="fullName" :header="$t('label.fullName')" sortable style="width: 20%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="username" :header="$t('label.username')" sortable style="width: 20%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="role" :header="$t('label.role')" sortable style="width: 20%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="phoneNumber" :header="$t('label.noHp')" style="width: 20%" />
        <Column field="email" :header="$t('label.email')" sortable style="width: 20%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="status" :header="$t('label.status')" sortable style="width: 20%">
          <template #sorticon>
            <IconSortable />
          </template>
          <template #body="slotProps">
            <p :class="slotProps.data.status === 'active' ? 'text-[#19C29A]' : 'text-[#C2C2C2]'">
              {{ slotProps.data.status === 'active' ? t('text.active') : t('text.nonActive') }}
            </p>
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="width: 20%; text-align: center">
          <template #body>
            <ElementsButton
              class="!text-[12px] !rounded-full !h-fit !w-fit py-0 px-5"
              @click="navigateTo('/user/edit/1')"
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
