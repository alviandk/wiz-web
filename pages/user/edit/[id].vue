<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editUser') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('text.editUser')">
    <ManageUserEdit />
  </NuxtLayout>
</template>
