<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.detail') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="'LM0019012'">
    <MemberDetail />
  </NuxtLayout>
</template>
