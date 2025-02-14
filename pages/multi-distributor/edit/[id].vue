<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editDistributor') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.editDistributor')" :is-back="true">
    <MultiDistributorEdit />
  </NuxtLayout>
</template>
