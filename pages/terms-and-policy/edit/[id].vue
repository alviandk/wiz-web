<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editTermsPolicy') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.editTermsPolicy')" :is-back="true">
    <TermsAndPolicyEdit />
  </NuxtLayout>
</template>
