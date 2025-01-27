<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.registeredMember') })
</script>

<template>
  <NuxtLayout name="sidebar" :page-title="t('menu.registeredMember')">
    <MemberRegistered />
  </NuxtLayout>
</template>
