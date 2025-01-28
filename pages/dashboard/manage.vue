<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.manageDashboard') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.manageDashboard')">
    <DashboardManage />
  </NuxtLayout>
</template>
