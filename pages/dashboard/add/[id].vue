<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addDashboard') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('text.addDashboard')">
    <DashboardAdd />
  </NuxtLayout>
</template>
