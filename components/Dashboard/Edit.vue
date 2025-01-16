<script setup lang="ts">
import Divider from 'primevue/divider'
import { useSidebar } from '~/composable/layout'
import { useDashboard } from './dashboard-setup'

const { onBack } = useSidebar()
const { onChangeEdit, isModalConfirmationDelete, onToggleModalConfirmationDelete, onSubmitDelete } = useDashboard()
const { isEditable } = storeToRefs(useDashboardStore())
</script>

<template>
  <div>
    <div class="bg-transparent !text-[#2B1713] text-md font-semibold !w-fit mb-6 cursor-pointer" @click="onBack">
      <i class="pi pi-arrow-left mr-3" />
      {{ $t('text.back') }}
    </div>
    <UICard>
      <form @submit.prevent="">
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.title') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Dashboard Pembelian</p>
          <ElementsInputText v-else id="title" :placeholder="$t('placeholder.input', { label: $t('label.title') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.description') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Lorem ipsum</p>
          <ElementsInputText v-else id="description" :placeholder="$t('text.writeDescProduct')" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.priority') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">2</p>
          <ElementsInputText
            v-else
            id="priority"
            :placeholder="$t('placeholder.input', { label: $t('label.priority') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.role') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Admin</p>
          <ElementsInputSelect
            v-else
            id="role"
            :placeholder="$t('placeholder.select', { label: $t('label.role') })"
            :options="[
              { name: 'A', code: 'a' },
              { name: 'B', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>

        <div class="border rounded-xl p-6 mt-6">
          <div class="flex flex-wrap items-end lg:flex-nowrap gap-3 mb-4">
            <div v-if="!isEditable" class="w-full">
              <p class="text-sm font-normal text-[#333333] px-4 py-3">Pembelian 1</p>
            </div>
            <ElementsInputText
              v-else
              id="name"
              :label="$t('label.name')"
              :placeholder="$t('placeholder.input', { label: $t('label.name') })"
            />

            <div v-if="!isEditable" class="w-full">
              <p v-if="!isEditable" class="text-sm font-normal text-[#333333] px-4 py-3">2</p>
            </div>
            <ElementsInputText
              v-else
              id="key"
              :label="$t('label.key')"
              :placeholder="$t('placeholder.input', { label: $t('label.key') })"
            />

            <ElementsCheckbox
              id="titleName"
              :label="$t('label.title')"
              :binary="true"
              :class="`text-sm ${!isEditable ? '!border-0' : ''}`"
              :disabled="!isEditable"
            />
            <ElementsCheckbox
              id="titleBorder"
              :label="$t('label.border')"
              :binary="true"
              :class="`text-sm ${!isEditable ? '!border-0' : ''}`"
              :disabled="!isEditable"
            />
            <ElementsButton v-if="isEditable" class="rounded-xl !bg-[#FDF0F1] p-3 h-[48px] !w-fit">
              <IconTrash class="w-[70px]" />
            </ElementsButton>
          </div>
          <Divider type="dashed" />
          <div v-if="isEditable" class="flex justify-end">
            <ElementsButton class="!w-fit text-sm font-semibold" @click="navigateTo('/dashboard/add/1')">
              <i class="pi pi-plus mr-3"></i>
              {{ $t('text.add') }}
            </ElementsButton>
          </div>
        </div>

        <div v-if="isEditable" class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton
            class="rounded-xl !border !border-[#FF234B] bg-transparent !w-fit !px-2.5"
            @click="onToggleModalConfirmationDelete"
          >
            <IconTrash />
          </ElementsButton>
          <ElementsButton
            class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]"
            @click="isEditable = false"
          >
            {{ $t('text.cancel') }}
          </ElementsButton>
          <ElementsButton class="!w-[120px]">
            {{ $t('text.save') }}
          </ElementsButton>
        </div>
        <div v-else class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton
            class="rounded-xl !border !border-[#FF234B] bg-transparent !w-fit !px-2.5"
            @click="onToggleModalConfirmationDelete"
          >
            <IconTrash />
          </ElementsButton>
          <ElementsButton class="!w-fit !bg-[#FDF0F1] !text-[#FF234B]" @click="onChangeEdit">
            <IconEdit class="mr-3" />
            {{ $t('text.editDashboard') }}
          </ElementsButton>
        </div>
      </form>
    </UICard>

    <UIModalConfirmation
      :visible="isModalConfirmationDelete"
      :title="$t('text.deleteDashboard')"
      :description="$t('text.deleteDashboardInformation')"
      :text-confirm="$t('text.delete')"
      :on-cancel="onToggleModalConfirmationDelete"
      :on-submit="onSubmitDelete"
    />
  </div>
</template>
