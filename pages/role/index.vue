<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.role') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('menu.role')">
    <ManageRole />
  </NuxtLayout>
</template>
