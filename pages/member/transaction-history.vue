<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.detail') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="'Rezky Kurniawan'" :is-back="true">
    <MemberRegisteredTable />
  </NuxtLayout>
</template>
