<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addDataLeads') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.addDataLeads')" :is-back="true">
    <LeadsDistributorAdd />
  </NuxtLayout>
</template>
