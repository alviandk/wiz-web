<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.detailDashboard') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('text.detailDashboard')">
    <DashboardEdit />
  </NuxtLayout>
</template>
