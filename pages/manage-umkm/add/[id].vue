<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addData') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('text.addData')">
    <BinaanUMKMAdd />
  </NuxtLayout>
</template>
