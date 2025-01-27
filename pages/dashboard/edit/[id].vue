<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.detailDashboard') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.detailDashboard')" :is-back="true">
    <DashboardEdit />
  </NuxtLayout>
</template>
