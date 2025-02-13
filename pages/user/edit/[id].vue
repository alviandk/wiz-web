<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.editUser') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.editUser')" :is-back="true">
    <ManageUserEdit />
  </NuxtLayout>
</template>
