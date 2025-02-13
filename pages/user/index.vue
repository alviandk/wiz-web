<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.user') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.user')">
    <ManageUser />
  </NuxtLayout>
</template>
