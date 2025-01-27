<script setup lang="ts">
import Column from 'primevue/column'
import { manageMemberHistoryTable } from '~/utilities/dummy'
</script>

<template>
  <div>
    <UITable :value="manageMemberHistoryTable">
      <template #default>
        <Column field="codeMember" :header="$t('label.codeMember')" sortable style="width: 20%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="fullName" :header="$t('label.fullName')" style="width: 20%" />
        <Column field="noHp" :header="$t('label.noHp')" style="text-transform: capitalize" />
        <Column
          field="gender"
          :header="$t('label.genderRequired')"
          style="width: 20%; text-transform: capitalize"
          sortable
        >
          <template #body="slotProps">
            {{ slotProps.data.gender === 'L' ? $t('text.male') : $t('text.female') }}
          </template>
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="age" :header="$t('label.age')" sortable style="width: 20%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="businessType" :header="$t('label.businessType')" sortable style="width: 20%">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="width: 20%; text-align: center">
          <template #body>
            <ElementsButton
              class="!text-[12px] !rounded-full !h-fit !w-fit py-0 px-5"
              @click="navigateTo('/member/registered/1')"
            >
              {{ $t('text.detail') }}
            </ElementsButton>
          </template>
        </Column>
      </template>
    </UITable>
  </div>
</template>
