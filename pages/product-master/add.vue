<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addProduct') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('text.addProduct')">
    <ProductMasterAdd />
  </NuxtLayout>
</template>
