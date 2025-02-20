<script setup>
import Editor from 'primevue/editor'

const value = ref('')
</script>

<template>
  <Editor v-model="value" editor-style="height: 320px" />
</template>
