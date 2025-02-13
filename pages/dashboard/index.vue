<script lang="ts" setup>
const { t } = useI18n()

// definePageMeta({ middleware: ['auth'] })
useServerSeoMeta({ title: t('text.dashboard') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.dashboard')">
    <Dashboard />
  </NuxtLayout>
</template>
