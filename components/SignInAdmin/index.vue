<script setup lang="ts">
import { useLoginAdmin } from '~/composable/auth'

const { errorAdmin, isDisableAdmin, isLoadingLoginAdmin, msgErrorAdmin, onSubmitLoginAdmin } = useLoginAdmin()
</script>

<template>
  <div>
    <SignInAdminForm
      :errors="errorAdmin"
      :msg-error="msgErrorAdmin"
      :is-disable="isDisableAdmin"
      :is-loading-login="isLoadingLoginAdmin"
      :on-submit-login="onSubmitLoginAdmin"
    />
  </div>
</template>
