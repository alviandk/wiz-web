<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editData') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('text.editData')">
    <BinaanUMKMEdit />
  </NuxtLayout>
</template>
