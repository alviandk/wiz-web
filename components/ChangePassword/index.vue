<script setup lang="ts"></script>

<template>
  <div class="change-password-page container-card w-[50%] p-6 rounded-xl">
    <form @submit.prevent="">
      <div class="">
        <p class="text-sm font-semibold py-3">{{ $t('label.currentPassword') }}</p>
        <ElementsInputPassword
          id="currentPassword"
          :placeholder="$t('placeholder.input', { label: $t('label.currentPassword') })"
        />
      </div>
      <div class="">
        <p class="text-sm font-semibold py-3">{{ $t('label.newPassword') }}</p>
        <ElementsInputPassword
          id="newPassword"
          :placeholder="$t('placeholder.input', { label: $t('label.newPassword') })"
        />
      </div>
      <div class="">
        <p class="text-sm font-semibold py-3">{{ $t('label.confirmNewPassword') }}</p>
        <ElementsInputPassword
          id="confirmNewPassword"
          :placeholder="$t('placeholder.input', { label: $t('label.confirmNewPassword') })"
        />
      </div>

      <div class="flex items-center justify-end mt-6">
        <ElementsButton class="!w-fit !bg-[#FF234B]">
          {{ $t('menu.changePassword') }}
        </ElementsButton>
      </div>
    </form>
  </div>
</template>
