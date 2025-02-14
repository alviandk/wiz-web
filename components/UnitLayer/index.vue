<script setup lang="ts">
import Column from 'primevue/column'
import { unitLayerData } from '~/utilities/dummy'
import { useUnitLayer } from './unit-layer-setup'

const { isModalAdd, onToggleModalAdd } = useUnitLayer()
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
        <ElementsButton class="red-dark-button" @click="onToggleModalAdd">
          <i class="pi pi-plus mr-3"></i>
          {{ $t('text.addUnitLayer') }}
        </ElementsButton>
      </div>
    </div>
    <UITable :value="unitLayerData">
      <template #default>
        <Column field="code" :header="$t('label.codeUnitLayer')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="name" :header="$t('label.nameUnitLayer')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="desc" :header="$t('label.description')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="total" :header="$t('label.totalProduct')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="min-width: 6rem; text-align: center">
          <template #body>
            <ElementsButton class="red-dark-button !rounded-full !text-[12px] !h-fit !w-fit py-0 px-5">
              {{ $t('text.detail') }}
            </ElementsButton>
          </template>
        </Column>
      </template>
    </UITable>

    <!-- Dialog Add -->
    <UIDialog :visible="isModalAdd" root-class="w-[460px]" container-class="p-6" @update:visible="onToggleModalAdd">
      <template #default="slotPropss">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ $t('text.addUnitLayer') }}</p>
            <Icon
              name="mdi:close"
              class="text-[30px] text-[#798F9F] cursor-pointer"
              @click="slotPropss.closeCallback"
            />
          </div>
          <form class="flex flex-col gap-4" @submit.prevent="">
            <ElementsInputText
              id="codeUnitLayer"
              :label="$t('label.codeUnitLayer')"
              :placeholder="$t('placeholder.input', { label: $t('label.codeUnitLayer') })"
            />
            <ElementsInputText
              id="nameUnitLayer"
              :label="$t('label.nameUnitLayer')"
              :placeholder="$t('placeholder.input', { label: $t('label.nameUnitLayer') })"
            />
            <ElementsTextArea
              id="description"
              :label="`${$t('label.description')} (${$t('text.optional')})`"
              class="gap-1.5"
              :placeholder="$t('placeholder.write', { label: $t('label.description') })"
            />
          </form>

          <div class="flex gap-3 items-center mt-6">
            <ElementsButton
              class="bg-transparent !border !border-[#FF234B] !text-[#FF234B]"
              @click="slotPropss.closeCallback"
            >
              {{ $t('text.cancel') }}
            </ElementsButton>
            <ElementsButton disabled>
              {{ $t('text.save') }}
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>

    <!-- Dialog Edit -->
    <!-- Dialog Hapus -->
  </div>
</template>
