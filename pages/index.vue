<script lang="ts" setup>
definePageMeta({ middleware: ['login'] })
</script>

<template>
  <NuxtLayout name="auth">
    <SignIn />
  </NuxtLayout>
</template>
