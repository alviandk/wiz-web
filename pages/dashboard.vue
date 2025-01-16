<script lang="ts" setup>
const { t } = useI18n()

// definePageMeta({ middleware: ['auth'] })
useServerSeoMeta({ title: t('text.dashboard') })
</script>

<template>
  <div class="min-w-[950px] overflow-x-auto">
    <NuxtLayout name="sidebar">
      <Dashboard />
    </NuxtLayout>
  </div>
</template>
