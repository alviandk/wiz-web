<script setup lang="ts">
// const { t } = useI18n()
</script>

<template>
  <div>
    <div class="flex justify-end items-center gap-3 mb-6">
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
        <ElementsButton @click="navigateTo('/dashboard/add/1')">
          <i class="pi pi-plus mr-2"></i>
          {{ $t('text.addData') }}
        </ElementsButton>
      </div>
      <div>
        <ElementsButton class="!bg-[#FDF0F1] !text-[#FF234B]">
          <IconSheets class="mr-2" />
          {{ $t('text.importCsv') }}
        </ElementsButton>
      </div>
    </div>
    <div class="border rounded-xl p-4">asd</div>
  </div>
</template>
