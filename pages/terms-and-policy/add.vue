<script setup lang="ts">
const { t } = useI18n()

useServerSeoMeta({ title: t('text.addTermsPolicy') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.addTermsPolicy')" :is-back="true">
    <TermsAndPolicyAdd />
  </NuxtLayout>
</template>
