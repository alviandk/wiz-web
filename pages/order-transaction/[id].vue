<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.detail') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="'Rezky Kurniawan'">
    <OrderTransactionDetail />
  </NuxtLayout>
</template>
