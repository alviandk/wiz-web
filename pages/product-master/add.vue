<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addProduct') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.addProduct')" :is-back="true">
    <ProductMasterAdd />
  </NuxtLayout>
</template>
