<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addUser') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('text.addUser')">
    <ManageUserAdd />
  </NuxtLayout>
</template>
