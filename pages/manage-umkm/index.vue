<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.manageUMKM') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.manageUMKM')">
    <BinaanUMKM />
  </NuxtLayout>
</template>
