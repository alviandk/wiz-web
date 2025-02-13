<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.waitingApproval') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.waitingApproval')">
    <MemberWaitingApproval />
  </NuxtLayout>
</template>
