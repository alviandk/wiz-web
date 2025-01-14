<script setup lang="ts">
import { useLogin } from '~/composable/auth'

const { errors, isDisable, isLoadingLogin, onSubmitLogin } = useLogin()
</script>

<template>
  <div>
    <SignInForm
      :errors="errors"
      :on-submit-login="onSubmitLogin"
      :is-disable="isDisable"
      :is-loading-login="isLoadingLogin"
    />
  </div>
</template>
