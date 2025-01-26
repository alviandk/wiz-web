<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import { useSidebar } from '~/composable/layout'

const { t } = useI18n()
const { onBack } = useSidebar()
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
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.roleName') }}</p>
          <ElementsInputText id="roleName" :placeholder="$t('placeholder.input', { label: $t('label.roleName') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.roleDescription') }}</p>
          <ElementsTextArea
            id="roleDescription"
            :placeholder="$t('placeholder.input', { label: $t('label.roleDescription') })"
          />
        </div>
      </form>
    </UICard>

    <p class="text-base font-semibold mt-6 mb-3">{{ $t('label.permissions') }}</p>
    <UICard>
      <Accordion multiple :active-index="0">
        <AccordionTab
          :pt="{
            root: { class: 'border-b' },
            headerAction: {
              class: 'flex justify-between flex-row-reverse !bg-transparent !border-0 px-0',
            },
            content: {
              class: 'border-0 rounded-none px-0 pt-0',
            },
          }"
        >
          <template #header>
            <div class="flex items-center gap-4">
              <IconBlock class="w-6 h-6" />
              <p class="text-base font-semibold">{{ t('menu.dashboard') }}</p>
            </div>
          </template>
          <div class="flex items-center gap-2">
            <ElementsCheckbox
              id="create"
              :label="$t('text.create')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="read"
              :label="$t('text.read')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="update"
              :label="$t('text.update')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="delete"
              :label="$t('text.deleteEng')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="print"
              :label="$t('text.print')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
          </div>
        </AccordionTab>
        <AccordionTab
          :pt="{
            root: { class: 'border-b' },
            headerAction: {
              class: 'flex justify-between flex-row-reverse !bg-transparent !border-0 px-0',
            },
            content: {
              class: 'border-0 rounded-none px-0 pt-0',
            },
          }"
        >
          <template #header>
            <div class="flex items-center gap-4">
              <IconStore class="w-6 h-6" />
              <p class="text-base font-semibold">{{ t('menu.listMemberUmkm') }}</p>
            </div>
          </template>
          <div>
            <p class="text-base font-semibold mb-2">
              <i class="pi pi-circle-fill text-[8px] text-[#FF234B] pr-2" />
              {{ $t('menu.waitingApproval') }}
            </p>
            <div class="flex items-center gap-2">
              <ElementsCheckbox
                id="create"
                :label="$t('text.create')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="read"
                :label="$t('text.read')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="update"
                :label="$t('text.update')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="delete"
                :label="$t('text.deleteEng')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="print"
                :label="$t('text.print')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
            </div>
          </div>
          <div>
            <p class="text-base font-semibold my-2">
              <i class="pi pi-circle-fill text-[8px] text-[#FF234B] pr-2" />
              {{ $t('menu.registeredMember') }}
            </p>
            <div class="flex items-center gap-2">
              <ElementsCheckbox
                id="create"
                :label="$t('text.create')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="read"
                :label="$t('text.read')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="update"
                :label="$t('text.update')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="delete"
                :label="$t('text.deleteEng')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="print"
                :label="$t('text.print')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
            </div>
          </div>
        </AccordionTab>
        <AccordionTab
          :pt="{
            root: { class: 'border-b' },
            headerAction: {
              class: 'flex justify-between flex-row-reverse !bg-transparent !border-0 px-0',
            },
            content: {
              class: 'border-0 rounded-none px-0 pt-0',
            },
          }"
        >
          <template #header>
            <div class="flex items-center gap-4">
              <IconDocument class="w-6 h-6" />
              <p class="text-base font-semibold">{{ t('menu.orderTransaction') }}</p>
            </div>
          </template>
          <div class="flex items-center gap-2">
            <ElementsCheckbox
              id="create"
              :label="$t('text.create')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="read"
              :label="$t('text.read')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="update"
              :label="$t('text.update')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="delete"
              :label="$t('text.deleteEng')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="print"
              :label="$t('text.print')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
          </div>
        </AccordionTab>
        <AccordionTab
          :pt="{
            root: { class: 'border-b' },
            headerAction: {
              class: 'flex justify-between flex-row-reverse !bg-transparent !border-0 px-0',
            },
            content: {
              class: 'border-0 rounded-none px-0 pt-0',
            },
          }"
        >
          <template #header>
            <div class="flex items-center gap-4">
              <IconBox class="w-6 h-6" />
              <p class="text-base font-semibold">{{ t('menu.productMaster') }}</p>
            </div>
          </template>
          <div class="flex items-center gap-2">
            <ElementsCheckbox
              id="create"
              :label="$t('text.create')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="read"
              :label="$t('text.read')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="update"
              :label="$t('text.update')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="delete"
              :label="$t('text.deleteEng')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
            <ElementsCheckbox
              id="print"
              :label="$t('text.print')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
          </div>
        </AccordionTab>
        <AccordionTab
          :pt="{
            root: { class: 'border-b' },
            headerAction: {
              class: 'flex justify-between flex-row-reverse !bg-transparent !border-0 px-0',
            },
            content: {
              class: 'border-0 rounded-none px-0 pt-0',
            },
          }"
        >
          <template #header>
            <div class="flex items-center gap-4">
              <IconGroup class="w-6 h-6" />
              <p class="text-base font-semibold">{{ t('menu.manageUserRole') }}</p>
            </div>
          </template>
          <div>
            <p class="text-base font-semibold mb-2">
              <i class="pi pi-circle-fill text-[8px] text-[#FF234B] pr-2" />
              {{ $t('menu.user') }}
            </p>
            <div class="flex items-center gap-2">
              <ElementsCheckbox
                id="create"
                :label="$t('text.create')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="read"
                :label="$t('text.read')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="update"
                :label="$t('text.update')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="delete"
                :label="$t('text.deleteEng')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="print"
                :label="$t('text.print')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
            </div>
          </div>
          <div>
            <p class="text-base font-semibold my-2">
              <i class="pi pi-circle-fill text-[8px] text-[#FF234B] pr-2" />
              {{ $t('menu.role') }}
            </p>
            <div class="flex items-center gap-2">
              <ElementsCheckbox
                id="create"
                :label="$t('text.create')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="read"
                :label="$t('text.read')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="update"
                :label="$t('text.update')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="delete"
                :label="$t('text.deleteEng')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
              <ElementsCheckbox
                id="print"
                :label="$t('text.print')"
                :binary="true"
                class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
              />
            </div>
          </div>
        </AccordionTab>
        <AccordionTab
          :pt="{
            root: { class: 'border-b' },
            headerAction: {
              class: 'flex justify-between flex-row-reverse !bg-transparent !border-0 px-0',
            },
            content: {
              class: 'border-0 rounded-none px-0 pt-0',
            },
          }"
        >
          <template #header>
            <div class="flex items-center gap-4">
              <IconDeliveryTruck class="w-6 h-6" />
              <p class="text-base font-semibold">{{ t('text.canvasser') }}</p>
            </div>
          </template>
          <div class="flex items-center gap-2">
            <ElementsCheckbox
              id="create"
              :label="$t('text.delivery')"
              :binary="true"
              class="text-sm font-medium bg-[#F5F7F9] border-0 !h-fit !py-2 !px-3"
            />
          </div>
        </AccordionTab>
      </Accordion>
    </UICard>

    <div class="flex gap-3 items-center justify-end mt-6">
      <ElementsButton class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]" @click="onBack">
        {{ $t('text.cancel') }}
      </ElementsButton>
      <ElementsButton class="!w-[120px]" disabled>
        {{ $t('text.save') }}
      </ElementsButton>
    </div>
  </div>
</template>
