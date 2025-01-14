<script lang="ts" setup>
import { useForgotPassword } from '~/composable/auth'

const { errors, isDisable, isLoadingForgot, onSubmitForgot } = useForgotPassword()
</script>

<template>
  <NuxtLayout name="auth">
    <ForgotPassword
      :errors="errors"
      :on-submit-forgot="onSubmitForgot"
      :is-disable="isDisable"
      :is-loading-forgot="isLoadingForgot"
    />
  </NuxtLayout>
</template>
