<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.changePassword') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.changePassword')">
    <ChangePassword />
  </NuxtLayout>
</template>
