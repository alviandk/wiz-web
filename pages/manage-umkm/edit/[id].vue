<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editData') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.editData')" :is-back="true">
    <BinaanUMKMEdit />
  </NuxtLayout>
</template>
