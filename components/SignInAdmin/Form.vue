<script lang="ts" setup>
type Props = {
  errors: {
    username?: string
    password?: string
  }
  isDisable: boolean
  isLoadingLogin: boolean
  onSubmitLogin: () => void
}
const props = defineProps<Props>()
</script>

<template>
  <div class="max-w-[356px] mx-auto overflow-hidden rounded-xl" style="box-shadow: 0px 2px 16px 0px #8a8d8f33">
    <div class="p-5" style="background: linear-gradient(90deg, #193369 0%, #30c8e9 161.38%)">
      <img src="/images/logo-wizyztem-blue.svg" alt="logo" class="w-[160px] h-[31px] m-auto" />
    </div>
    <div class="p-6">
      <p class="text-base text-[#333333] mb-1 font-semibold">{{ $t('page.home.welcomeAdmin') }}</p>
      <p class="text-sm text-[#68788D] font-normal mb-6">{{ $t('page.home.subInfo') }}</p>
      <form class="flex flex-col gap-4" @submit.prevent="props.onSubmitLogin">
        <ElementsInputText
          id="username"
          :label="$t('label.username')"
          :placeholder="$t('placeholder.input', { label: $t('label.username') })"
        />
        <ElementsInputPassword
          id="password"
          :label="$t('label.password')"
          :placeholder="$t('placeholder.input', { label: $t('label.password') })"
        />
        <ElementsButton
          type="submit"
          class="mt-1.5 blue-dark-button"
          :disabled="props.isDisable || props.isLoadingLogin"
          :is-loading="props.isLoadingLogin"
        >
          <p class="w-full font-semibold">{{ $t('text.login') }}</p>
        </ElementsButton>
        <div class="flex justify-center">
          <NuxtLink class="text-sm font-semibold text-[#1F76B6] w-fit" to="/forgot-password-admin">{{
            $t('text.forgotPassword')
          }}</NuxtLink>
        </div>
      </form>

      <div class="flex items-center justify-center gap-2 mt-10">
        <p class="text-xs font-normal text-[#68788D] leading-[14px] mb-2">{{ $t('page.home.presentBy') }}</p>
        <img src="/images/logo-meta-solusi-maxima.svg" alt="logo" class="w-[41px] h-[72px]" />
      </div>
    </div>
  </div>
</template>
