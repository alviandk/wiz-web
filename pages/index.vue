<script setup lang="ts">
const locale = useLocaleData().currentLocale()
const token = useTokenData().currentToken()
</script>
<template>
  <div>
    <ClientOnly>
      <p>I18n: {{ $t('hello') }} ({{ locale }})</p>
      <p>Token: {{ token }}</p>
    </ClientOnly>
  </div>
</template>
