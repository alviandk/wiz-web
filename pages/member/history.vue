<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.rejectedHistory') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.rejectedHistory')">
    <MemberHistory />
  </NuxtLayout>
</template>
