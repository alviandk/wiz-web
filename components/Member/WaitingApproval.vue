<script setup lang="ts">
import Column from 'primevue/column'
import SelectButton from 'primevue/selectbutton'
import Checkbox from 'primevue/checkbox'
import { manageMemberHistoryTable } from '~/utilities/dummy'
import { useMember } from './member-setup'

const { t } = useI18n()
const { isModalFilter, onToggleModalFilter } = useMember()

const selectedGender = ref(null)
const selectedStatus = ref(null)
const selectedBusinessType = ref(null)
const businessTypes = ref([
  { name: t('text.fashionGarmenTextil'), key: 'fashionGarmenTextil' },
  { name: t('text.culinary'), key: 'culinary' },
  { name: t('text.course'), key: 'course' },
  { name: t('text.otomotif'), key: 'otomotif' },
  { name: t('text.Agriculture'), key: 'Agriculture' },
])
</script>

<template>
  <div>
    <div class="flex justify-end items-center gap-3 mb-4">
      <div>
        <ElementsButton class="!bg-[#FFECF0] !text-[#FF3263]" @click="onToggleModalFilter">
          <img src="/images/icon-filter.svg" class="w-6 h-6 mr-2" />
          {{ $t('text.filter') }}
        </ElementsButton>
      </div>
      <div>
        <ElementsInputText
          id="search"
          :placeholder="$t('text.searchData')"
          container-class="w-[250px]"
          icon-position="left"
        >
          <template #icon> <i class="pi pi-search"></i> </template>
        </ElementsInputText>
      </div>
    </div>
    <UITable :value="manageMemberHistoryTable">
      <template #default>
        <Column field="codeMember" :header="$t('label.codeMember')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="fullName" :header="$t('label.fullName')" style="min-width: 10rem" />
        <Column field="noHp" :header="$t('label.noHp')" style="text-transform: capitalize" />
        <Column
          field="gender"
          :header="$t('label.genderRequired')"
          style="min-width: 8rem; text-transform: capitalize"
          sortable
        >
          <template #body="slotProps">
            {{ slotProps.data.gender === 'L' ? $t('text.male') : $t('text.female') }}
          </template>
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="submissionDate" :header="$t('label.submissionDate')" sortable style="min-width: 8rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="businessType" :header="$t('label.businessType')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="status" :header="$t('label.status')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
          <template #body="slotProps">
            <p
              class="rounded-full px-2 p-1.5 w-fit text-xs font-medium"
              :class="
                slotProps.data.status_approval === 'bank_confirmation'
                  ? 'text-[#F78431] bg-[#FFF6E0]'
                  : 'text-[#2E8CE2] bg-[#DEEDFF]'
              "
            >
              {{
                slotProps.data.status_approval === 'bank_confirmation'
                  ? t('text.bankConfirmation')
                  : t('text.waitingApproval')
              }}
            </p>
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="min-width: 6rem; text-align: center">
          <template #body>
            <ElementsButton class="!text-[12px] !rounded-full !h-fit !w-fit py-0 px-5" @click="navigateTo('/member/1')">
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

    <UIDialog
      :visible="isModalFilter"
      root-class="max-w-[500px]"
      container-class="p-6"
      @update:visible="onToggleModalFilter"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ $t('text.filter') }}</p>
            <button class="text-[#FF234B] text-sm font-semibold">{{ $t('text.resetFilter') }}</button>
          </div>
          <form @submit.prevent="">
            <div class="">
              <p class="text-sm font-semibold py-3">{{ $t('label.genderRequired') }}</p>
              <SelectButton
                v-model="selectedGender"
                :options="[
                  { name: t('text.male'), value: 'L' },
                  { name: t('text.female'), value: 'P' },
                ]"
                option-label="name"
                :pt="{
                  root: { class: 'flex items-center gap-2' },
                  button: { class: 'rounded-xl !border !border-r py-[5px] px-3' },
                  label: { class: 'text-sm text-[#68788D] font-medium' },
                }"
              />
            </div>
            <div class="">
              <p class="text-sm font-semibold py-3">{{ $t('label.status') }}</p>
              <SelectButton
                v-model="selectedStatus"
                :options="[
                  { name: t('text.waitingApproval'), value: 'waiting_approval' },
                  { name: t('text.bankConfirmation'), value: 'bank_confirmation' },
                ]"
                option-label="name"
                :pt="{
                  root: { class: 'flex items-center gap-2' },
                  button: { class: 'text-sm text-[#68788D] font-medium rounded-xl !border !border-r py-[5px] px-3' },
                  label: { class: 'text-sm text-[#68788D] font-medium' },
                }"
              />
            </div>
            <div class="">
              <p class="text-sm font-semibold py-3">{{ $t('label.businessType') }}</p>
              <div
                v-for="business of businessTypes"
                :key="business.key"
                class="checkbox-wrapper flex gap-2 align-items-center mb-2"
              >
                <Checkbox
                  v-model="selectedBusinessType"
                  :input-id="business.key"
                  name="business"
                  :value="business.name"
                />
                <label :for="business.key" class="text-sm !text-[#111827] font-normal">{{ business.name }}</label>
              </div>
            </div>
            <div class="">
              <p class="text-sm font-semibold pt-3">{{ $t('label.submissionDate') }}</p>
              <div class="flex items-center gap-2">
                <div>
                  <p class="text-sm font-semibold py-3">{{ $t('text.startDate') }}</p>
                  <ElementsDatepicker
                    id="startDate"
                    placeholder="dd/mm/yyyy"
                    root-class="h-10"
                    container-class="w-[227px]"
                    :max-date="new Date()"
                  />
                </div>
                <div>
                  <p class="text-sm font-semibold py-3">{{ $t('text.endDate') }}</p>
                  <ElementsDatepicker
                    id="endDate"
                    placeholder="dd/mm/yyyy"
                    root-class="h-10"
                    container-class="w-[227px]"
                    :max-date="new Date()"
                  />
                  <!-- :disabled="!props.startDate"
                :min-date="props.startDate" -->
                </div>
              </div>
            </div>
          </form>
          <div class="flex items-center justify-center gap-4 mt-4">
            <ElementsButton
              class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent"
              @click="slotProps.closeCallback"
            >
              <p class="w-full font-semibold">{{ $t('text.cancel') }}</p>
            </ElementsButton>
            <ElementsButton>
              <p class="w-full font-semibold">{{ $t('text.apply') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>

<style>
.checkbox-wrapper .p-checkbox.p-highlight .p-checkbox-box {
  background-color: #ff234b;
  border-color: #ff234b;
}
</style>
