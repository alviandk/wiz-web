<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editProduct') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="'20230323020'" :is-back="true">
    <ProductMasterEdit />
  </NuxtLayout>
</template>
