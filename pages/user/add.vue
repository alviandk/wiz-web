<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('text.addUser') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('text.addUser')" :is-back="true">
    <ManageUserAdd />
  </NuxtLayout>
</template>
