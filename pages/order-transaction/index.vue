<script lang="ts" setup>
const { t } = useI18n()

// definePageMeta({ middleware: ['auth'] })
useServerSeoMeta({ title: t('menu.orderTransaction') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('menu.orderTransaction')">
    <OrderTransaction />
  </NuxtLayout>
</template>
