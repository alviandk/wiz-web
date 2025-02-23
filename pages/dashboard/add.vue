<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addDashboard') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.addDashboard')" :is-back="true">
    <DashboardAdd />
  </NuxtLayout>
</template>
