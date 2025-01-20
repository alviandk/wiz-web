<script setup lang="ts">
import { useProfileStore } from '~/stores/profile'
import { useProfile } from './profile-setup'

const { onChangeEdit } = useProfile()
const { isEditable } = storeToRefs(useProfileStore())
</script>

<template>
  <div class="profile-page container-card w-[50%] p-6 rounded-xl">
    <form @submit.prevent="">
      <div class="">
        <p class="text-sm font-semibold py-3">{{ $t('label.username') }}</p>
        <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] p-3">distributorpertama</p>
        <ElementsInputText
          v-else
          id="username"
          :placeholder="$t('placeholder.input', { label: $t('label.username') })"
          disabled
        />
      </div>
      <div class="">
        <p class="text-sm font-semibold py-3">{{ $t('label.fullName') }}</p>
        <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] p-3">Distributor Pertama</p>
        <ElementsInputText
          v-else
          id="fullName"
          :placeholder="$t('placeholder.input', { label: $t('label.fullName') })"
        />
      </div>
      <div class="">
        <p class="text-sm font-semibold py-3">{{ $t('label.noHp') }}</p>
        <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] p-3">091823910283</p>
        <ElementsInputText v-else id="noHp" :placeholder="$t('placeholder.input', { label: $t('label.noHp') })" />
      </div>
      <div class="">
        <p class="text-sm font-semibold py-3">{{ $t('label.email') }}</p>
        <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] p-3">distributor_pertama@gmail.com</p>
        <ElementsInputText v-else id="email" :placeholder="$t('placeholder.input', { label: $t('label.email') })" />
      </div>

      <div v-if="isEditable" class="flex gap-3 items-center justify-end mt-6">
        <ElementsButton
          class="!w-[130px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]"
          @click="isEditable = false"
        >
          {{ $t('text.cancel') }}
        </ElementsButton>
        <ElementsButton class="!w-[130px]">
          {{ $t('text.saveProfile') }}
        </ElementsButton>
      </div>
      <div v-else class="flex items-center justify-end mt-6">
        <ElementsButton class="!w-fit !bg-[#FDF0F1] !text-[#FF234B]" @click="onChangeEdit">
          <IconEdit class="mr-3" />
          {{ $t('text.editProfile') }}
        </ElementsButton>
      </div>
    </form>
  </div>
</template>
