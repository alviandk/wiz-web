<script setup lang="ts">
import { LOGIN_ROLE } from '~/constants/cookies'

const { t } = useI18n()

// definePageMeta({ middleware: ['login'] })
useServerSeoMeta({ title: t('menu.leadsData') })

const loginRole = ref()
onBeforeMount(() => {
  loginRole.value = useCookie(LOGIN_ROLE).value
})
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.leadsData')">
    <Leads v-if="loginRole === 'admin'" />
    <LeadsDistributor v-if="loginRole === 'distributor'" />
  </NuxtLayout>
</template>
