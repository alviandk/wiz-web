<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.detailUmkm') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.detailUmkm')" :is-back="true">
    <LeadsDetail />
  </NuxtLayout>
</template>
