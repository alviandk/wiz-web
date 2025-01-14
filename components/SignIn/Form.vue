<script lang="ts" setup>
import Divider from 'primevue/divider'

function onSubmitLogin() {
  alert('login') // eslint-disable-line
}
</script>

<template>
  <div class="max-w-[356px] mx-auto overflow-hidden rounded-xl" style="box-shadow: 0px 2px 16px 0px #8a8d8f33">
    <div class="p-5" style="background: linear-gradient(90deg, #ff234b 0%, #f78431 100%)">
      <img src="/images/logo-wizyztem-white.svg" alt="logo" class="w-[160px] h-[31px] m-auto" />
    </div>
    <div class="p-6">
      <p class="text-base text-[#333333] mb-1 font-semibold">{{ $t('page.home.welcome') }}</p>
      <p class="text-sm text-[#68788D] font-normal mb-6">{{ $t('page.home.subInfo') }}</p>
      <form class="flex flex-col gap-4" @submit.prevent="onSubmitLogin">
        <ElementsInputText
          id="codeDistributor"
          :label="$t('label.codeDistributor')"
          :placeholder="$t('placeholder.input', { label: $t('label.codeDistributor') })"
        />
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
        <ElementsButton type="submit" class="bg-[#FF234B] text-sm font-semibold">
          <!-- :disabled="props.isDisable || props.isLoadingLogin"
        :is-loading="props.isLoadingLogin" -->
          <p class="w-full font-semibold">{{ $t('text.login') }}</p>
        </ElementsButton>
        <div class="flex justify-center">
          <NuxtLink class="text-[#FF234B] text-sm font-semibold w-fit" to="/forgot-password">{{
            $t('text.forgotPassword')
          }}</NuxtLink>
        </div>
      </form>

      <div class="flex justify-center gap-2 mt-10">
        <div class="text-center">
          <p class="text-xs font-normal text-[#68788D] leading-[14px] mb-2">{{ $t('page.home.presentBy') }}</p>
          <img src="/images/logo-meta-solusi-maxima.svg" alt="logo" class="w-[32px] h-[56px] m-auto" />
        </div>
        <Divider layout="vertical" />
        <div class="text-center">
          <p class="text-xs font-normal text-[#68788D] leading-[14px] mb-2">{{ $t('page.home.presentBy') }}</p>
          <img src="/images/logo-bank-dki.svg" alt="logo" class="w-[120px] h-[56px] m-auto" />
        </div>
      </div>
    </div>
  </div>
</template>
