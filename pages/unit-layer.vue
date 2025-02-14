<script setup lang="ts">
const { t } = useI18n()
useServerSeoMeta({ title: t('menu.unitLayerProduct') })
</script>

<template>
  <NuxtLayout name="sidebar" :title="t('menu.unitLayerProduct')">
    <UnitLayer />
  </NuxtLayout>
</template>
