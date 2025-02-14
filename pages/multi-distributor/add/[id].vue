<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addDistributor') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.addDistributor')" :is-back="true">
    <MultiDistributorAdd />
  </NuxtLayout>
</template>
