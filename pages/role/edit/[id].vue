<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editRole') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('text.editRole')">
    <ManageRoleEdit />
  </NuxtLayout>
</template>
