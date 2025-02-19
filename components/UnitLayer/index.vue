<script setup lang="ts">
import Column from 'primevue/column'
import { unitLayerData } from '~/utilities/dummy'
import { useUnitLayer } from './unit-layer-setup'

const {
  isModalAdd,
  onToggleModalAdd,
  isModalEdit,
  onToggleModalEdit,
  onChangeEditUnit,
  isModalDelete,
  onToggleModalDelete,
} = useUnitLayer()
const { isEditableUnit } = storeToRefs(useProductStore())
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
          <template #body="slotProps">
            <p class="font-semibold">{{ slotProps.data.code }}</p>
          </template>
        </Column>
        <Column field="name" :header="$t('label.nameUnitLayer')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
          <template #body="slotProps">
            <p class="font-semibold capitalize">{{ slotProps.data.name }}</p>
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
            <ElementsButton
              class="red-dark-button !rounded-full !text-[12px] !h-fit !w-fit py-0 px-5"
              @click="onToggleModalEdit"
            >
              {{ $t('text.detail') }}
            </ElementsButton>
          </template>
        </Column>
      </template>
    </UITable>

    <!-- Popup Add -->
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

    <!-- Popup Edit -->
    <UIDialog :visible="isModalEdit" root-class="w-[460px]" container-class="p-6" @update:visible="onToggleModalEdit">
      <template #default="slotPropss">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">Ubah Data: 20230323119</p>
            <Icon
              name="mdi:close"
              class="text-[30px] text-[#798F9F] cursor-pointer"
              @click="slotPropss.closeCallback"
            />
          </div>
          <form class="flex flex-col gap-4" @submit.prevent="">
            <div class="flex flex-col gap-3 mb-2">
              <p class="w-[40%] text-sm font-bold">{{ $t('label.codeUnitLayer') }}</p>
              <p v-if="!isEditableUnit" class="w-full text-sm font-normal text-[#333333]">kg</p>
              <ElementsInputText
                v-else
                id="codeUnitLayer"
                :placeholder="$t('placeholder.input', { label: $t('label.codeUnitLayer') })"
              />
            </div>
            <div class="flex flex-col gap-3 mb-2">
              <p class="w-[40%] text-sm font-bold">{{ $t('label.nameUnitLayer') }}</p>
              <p v-if="!isEditableUnit" class="w-full text-sm font-normal text-[#333333]">Kilogram</p>
              <ElementsInputText
                v-else
                id="nameUnitLayer"
                :placeholder="$t('placeholder.input', { label: $t('label.nameUnitLayer') })"
              />
            </div>
            <div class="flex flex-col gap-3 mb-2">
              <p class="w-[40%] text-sm font-bold">{{ $t('label.description') }} ({{ $t('text.optional') }})</p>
              <p v-if="!isEditableUnit" class="w-full text-sm font-normal text-[#333333]">Gula Pasir, Tepung</p>
              <ElementsTextArea
                v-else
                id="description"
                :placeholder="$t('placeholder.write', { label: $t('label.description') })"
              />
            </div>
          </form>

          <div class="flex gap-3 items-center mt-6">
            <ElementsButton class="rounded-xl red-outline-button !w-fit !px-2.5" @click="onToggleModalDelete">
              <IconTrash />
            </ElementsButton>
            <div class="flex gap-3 w-full">
              <ElementsButton
                class="bg-transparent !border !border-[#FF234B] !text-[#FF234B]"
                @click="isEditableUnit = false"
              >
                {{ $t('text.cancel') }}
              </ElementsButton>
              <ElementsButton v-if="!isEditableUnit" class="red-light-button" @click="onChangeEditUnit">
                <IconEdit class="mr-3" />
                {{ $t('text.editUnitLayer') }}
              </ElementsButton>
              <ElementsButton v-if="isEditableUnit" class="" disabled>
                {{ $t('text.save') }}
              </ElementsButton>
            </div>
          </div>
        </div>
      </template>
    </UIDialog>

    <!-- Popup Delete -->
    <UIModalConfirmation
      :visible="isModalDelete"
      :title="$t('text.deleteUnitLayer')"
      :description="$t('text.deleteUnitLayerInfo', { name: 'Kilogram' })"
      :text-confirm="$t('text.delete')"
      :on-cancel="onToggleModalDelete"
      :on-submit="() => {}"
    />
  </div>
</template>
