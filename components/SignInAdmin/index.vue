<script setup lang="ts">
import { useLoginAdmin } from '~/composable/auth'

const { errorAdmin, isDisableAdmin, isLoadingLoginAdmin, onSubmitLoginAdmin } = useLoginAdmin()
</script>

<template>
  <div>
    <SignInAdminForm
      :errors="errorAdmin"
      :on-submit-login="onSubmitLoginAdmin"
      :is-disable="isDisableAdmin"
      :is-loading-login="isLoadingLoginAdmin"
    />
  </div>
</template>
