<script lang="ts" setup>
const { t } = useI18n()

// definePageMeta({ middleware: ['auth'] })
useServerSeoMeta({ title: t('menu.productMaster') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.productMaster')">
    <ProductMaster />
  </NuxtLayout>
</template>
