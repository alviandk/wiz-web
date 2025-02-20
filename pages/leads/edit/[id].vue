<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editDataLeads') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.editDataLeads')" :is-back="true">
    <LeadsDistributorAdd />
  </NuxtLayout>
</template>
