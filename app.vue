<script setup lang="ts">
// const { initToken } = useTokenData()
const { initLocale } = useLocaleData()

// initToken()
initLocale()

useHead({
  htmlAttrs: {
    lang: useI18n().locale,
  },
})
useServerSeoMeta({
  title: 'App',
  description: 'Application',
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
