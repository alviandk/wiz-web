<script setup lang="ts">
const { t } = useI18n()

// definePageMeta({ middleware: ['login'] })
useServerSeoMeta({ title: t('menu.multiDistributor') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.multiDistributor')">
    <MultiDistributor />
  </NuxtLayout>
</template>
