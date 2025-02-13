<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editRole') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.editRole')" :is-back="true">
    <ManageRoleEdit />
  </NuxtLayout>
</template>
