<script setup lang="ts">
definePageMeta({ middleware: ['login'] })
</script>

<template>
  <NuxtLayout name="auth">
    <SignIn />
  </NuxtLayout>
</template>
