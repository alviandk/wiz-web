<script lang="ts" setup>
import { useForgotPasswordAdmin } from '~/composable/auth'

const { errorAdmin, isDisableAdmin, isLoadingForgotAdmin, onSubmitForgotAdmin } = useForgotPasswordAdmin()
</script>

<template>
  <NuxtLayout name="auth">
    <ForgotPasswordAdmin
      :errors="errorAdmin"
      :on-submit-forgot="onSubmitForgotAdmin"
      :is-disable="isDisableAdmin"
      :is-loading-forgot="isLoadingForgotAdmin"
    />
  </NuxtLayout>
</template>
