<script setup lang="ts">
import { useLogout } from '~/composable/layout'

// definePageMeta({ middleware: ['login'] })
onBeforeMount(() => {
  useLogout()
})
</script>

<template>
  <NuxtLayout name="auth">
    <SignInAdmin />
  </NuxtLayout>
</template>
