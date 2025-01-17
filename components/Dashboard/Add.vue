<script setup lang="ts">
import Divider from 'primevue/divider'
import { useSidebar } from '~/composable/layout'

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
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.title') }}</p>
          <ElementsInputText id="title" :placeholder="$t('placeholder.input', { label: $t('label.title') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.description') }}</p>
          <ElementsTextArea
            id="description"
            :placeholder="$t('placeholder.write', { label: $t('label.description') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.priority') }}</p>
          <ElementsInputText id="priority" :placeholder="$t('placeholder.input', { label: $t('label.priority') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold">{{ $t('label.role') }}</p>
          <ElementsInputSelect
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
            <ElementsInputText
              id="name"
              :label="$t('label.name')"
              :placeholder="$t('placeholder.input', { label: $t('label.name') })"
            />
            <ElementsInputText
              id="key"
              :label="$t('label.key')"
              :placeholder="$t('placeholder.input', { label: $t('label.key') })"
            />
            <ElementsCheckbox id="titleName" :label="$t('label.title')" :binary="true" class="text-sm" />
            <ElementsCheckbox id="titleBorder" :label="$t('label.border')" :binary="true" class="text-sm" />
            <ElementsButton class="rounded-xl !bg-[#FDF0F1] p-3 h-[48px] !w-fit">
              <IconTrash class="w-[70px]" />
            </ElementsButton>
          </div>
          <Divider type="dashed" />
          <div class="flex justify-end">
            <ElementsButton class="!w-fit" @click="navigateTo('/dashboard/add/1')">
              <i class="pi pi-plus mr-3"></i>
              {{ $t('text.add') }}
            </ElementsButton>
          </div>
        </div>
        <div class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]" @click="onBack">
            {{ $t('text.cancel') }}
          </ElementsButton>
          <ElementsButton class="!w-[120px]">
            {{ $t('text.save') }}
          </ElementsButton>
        </div>
      </form>
    </UICard>
  </div>
</template>
