<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.termsAndPolicy') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('menu.termsAndPolicy')">
    <TermsAndPolicy />
  </NuxtLayout>
</template>
