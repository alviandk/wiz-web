<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.profile') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.profile')">
    <Profile />
  </NuxtLayout>
</template>
