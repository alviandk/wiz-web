<script setup lang="ts">
type Props = {
  errors: {
    codeDistributor?: string
    email?: string
  }
  isDisable: boolean
  isLoadingForgot: boolean
  onSubmitForgot: () => void
}
const props = defineProps<Props>()
</script>

<template>
  <div class="max-w-[356px] mx-auto overflow-hidden rounded-xl" style="box-shadow: 0px 2px 16px 0px #8a8d8f33">
    <div class="p-6">
      <p class="text-xl text-[#333333] mb-6 font-semibold leading-6">{{ $t('page.forgotPass.title') }}</p>
      <form class="flex flex-col gap-4" @submit.prevent="props.onSubmitForgot">
        <ElementsInputText
          id="codeDistributor"
          :label="$t('label.codeDistributor')"
          :placeholder="$t('placeholder.input', { label: $t('label.codeDistributor') })"
        />
        <ElementsInputText
          id="email"
          :label="$t('label.email')"
          :placeholder="$t('placeholder.input', { label: $t('label.email') })"
        />
        <ElementsButton
          type="submit"
          class="mt-1.5"
          :disabled="props.isDisable || props.isLoadingForgot"
          :is-loading="props.isLoadingForgot"
        >
          <p class="w-full font-semibold">{{ $t('text.sendConfirmation') }}</p>
        </ElementsButton>
        <div class="flex justify-center text-sm mt-1">
          <span class="text-[#333333] font-normal mr-2">
            {{ $t('text.haveAccount') }}
          </span>
          <NuxtLink class="text-[#FF234B] font-semibold" to="/">{{ $t('text.loginHere') }}</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
