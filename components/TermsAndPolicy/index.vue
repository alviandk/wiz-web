<script setup lang="ts">
import Column from 'primevue/column'
import { termsAndPolicyData } from '~/utilities/dummy'
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
        <ElementsButton class="red-dark-button" @click="navigateTo('/terms-and-policy/add')">
          <i class="pi pi-plus mr-3"></i>
          {{ $t('text.addTermsPolicy') }}
        </ElementsButton>
      </div>
    </div>
    <UITable :value="termsAndPolicyData">
      <template #default>
        <Column field="title" :header="$t('label.title')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
          <template #body="slotProps">
            <p class="font-semibold">{{ slotProps.data.title }}</p>
          </template>
        </Column>
        <Column field="createdDate" :header="$t('label.createdDate')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
          <template #body="slotProps">
            {{ useDayjs(slotProps.data.submissionDate).format('DD MMM YYYY, HH:mm') }}
          </template>
        </Column>
        <Column field="category" :header="$t('label.category')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="min-width: 6rem; text-align: center">
          <template #body>
            <ElementsButton
              class="red-dark-button !rounded-full !text-[12px] !h-fit !w-fit py-0 px-5"
              @click="navigateTo('/terms-and-policy/edit/1')"
            >
              {{ $t('text.detail') }}
            </ElementsButton>
          </template>
        </Column>
      </template>
    </UITable>
  </div>
</template>
