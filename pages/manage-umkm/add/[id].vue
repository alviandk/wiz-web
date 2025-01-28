<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addData') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.addData')" :is-back="true">
    <BinaanUMKMAdd />
  </NuxtLayout>
</template>
