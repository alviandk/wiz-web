<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.detail') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="'SW01112028392'">
    <OrderTransactionDetail />
  </NuxtLayout>
</template>
