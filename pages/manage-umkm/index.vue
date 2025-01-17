<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.manageUMKM') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('menu.manageUMKM')">
    <BinaanUMKM />
  </NuxtLayout>
</template>
