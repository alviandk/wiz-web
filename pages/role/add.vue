<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addRole') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.addRole')" :is-back="true">
    <ManageRoleAdd />
  </NuxtLayout>
</template>
