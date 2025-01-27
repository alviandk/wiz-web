<script lang="ts" setup>
const { t } = useI18n()

// definePageMeta({ middleware: ['auth'] })
useServerSeoMeta({ title: t('menu.manageCategory') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.manageCategory')">
    <ProductCategory />
  </NuxtLayout>
</template>
