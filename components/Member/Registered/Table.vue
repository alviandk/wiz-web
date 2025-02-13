<script setup lang="ts">
import Column from 'primevue/column'
import { manageMemberHistoryTable } from '~/utilities/dummy'
</script>

<template>
  <div>
    <UITable :value="manageMemberHistoryTable">
      <template #default>
        <Column field="codeMember" :header="$t('label.codeMember')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
          <template #body="slotProps">
            <p class="font-semibold">{{ slotProps.data.codeMember }}</p>
          </template>
        </Column>
        <Column field="fullName" :header="$t('label.fullName')" style="min-width: 10rem" />
        <Column field="noHp" :header="$t('label.noHp')" style="text-transform: capitalize" />
        <Column
          field="gender"
          :header="$t('label.genderRequired')"
          style="min-width: 10rem; text-transform: capitalize"
          sortable
        >
          <template #body="slotProps">
            {{ slotProps.data.gender === 'L' ? $t('text.male') : $t('text.female') }}
          </template>
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="age" :header="$t('label.age')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="businessType" :header="$t('label.businessType')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="min-width: 6rem; text-align: center">
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
