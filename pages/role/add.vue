<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addRole') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('text.addRole')">
    <ManageRoleAdd />
  </NuxtLayout>
</template>
