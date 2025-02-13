<script setup lang="ts">
const { t } = useI18n()

// definePageMeta({ middleware: ['login'] })
useServerSeoMeta({ title: t('menu.leadsData') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.leadsData')">
    <Leads />
  </NuxtLayout>
</template>
