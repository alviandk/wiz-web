<script setup lang="ts">
import { useLogout } from '~/composable/layout'

const { t } = useI18n()

// definePageMeta({ middleware: ['login'] })
onBeforeMount(() => {
  useLogout()
})
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.leadsData')">
    <Leads />
  </NuxtLayout>
</template>
