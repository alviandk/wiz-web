<script setup lang="ts">
import { LOGIN_ROLE } from '~/constants/cookies'

const { t } = useI18n()
useServerSeoMeta({ title: t('menu.detailUmkm') })

const loginRole = ref()
onBeforeMount(() => {
  loginRole.value = useCookie(LOGIN_ROLE).value
})
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.detailUmkm')" :is-back="true">
    <LeadsDetail v-if="loginRole === 'admin'" />
    <LeadsDistributorDetail v-if="loginRole === 'distributor'" />
  </NuxtLayout>
</template>
