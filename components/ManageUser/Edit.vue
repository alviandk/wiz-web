<script setup lang="ts">
import Divider from 'primevue/divider'
import SelectButton from 'primevue/selectbutton'
import InputSwitch from 'primevue/inputswitch'
import { useSidebar } from '~/composable/layout'
import { useManageUserRoleStore } from '~/stores/manage-user-role'
import { useManageUserRole } from './manage-user-setup'

const { t } = useI18n()
const { onBack } = useSidebar()
const {
  onChangeEdit,
  onToggleModalConfirmationDelete,
  isModalConfirmationDelete,
  onSubmitDelete,
  isModalResetPass,
  onToggleModalResetPass,
} = useManageUserRole()
const { isEditable } = storeToRefs(useManageUserRoleStore())
const selectedGender = ref(null)
const selectStatusActive = ref(true)
</script>

<template>
  <div>
    <div class="bg-transparent !text-[#2B1713] text-md font-semibold !w-fit mb-6 cursor-pointer" @click="onBack">
      <i class="pi pi-arrow-left mr-3" />
      {{ $t('text.back') }}
    </div>
    <UICard>
      <form @submit.prevent="">
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.fullName') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Canvasser Pertama</p>
          <ElementsInputText
            v-else
            id="fullName"
            :placeholder="$t('placeholder.input', { label: $t('label.fullName') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.noHp') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">6281331631777</p>
          <ElementsInputText v-else id="noHp" :placeholder="$t('placeholder.input', { label: $t('label.noHp') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.addressOptional') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">
            Jl. Joglo Baru No.89, RT.3/RW.6, Joglo, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
            11640
          </p>
          <ElementsTextArea
            v-else
            id="address"
            :placeholder="$t('placeholder.write', { label: $t('label.address') })"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.gender') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Laki-laki</p>
          <div v-else class="flex flex-col w-full">
            <SelectButton
              v-model="selectedGender"
              :options="[
                { name: t('text.male'), value: 'L' },
                { name: t('text.female'), value: 'P' },
              ]"
              option-label="name"
              :pt="{
                root: { class: 'custom-blue-button flex items-center gap-3' },
                button: { class: 'h-[48px] w-full bg-[#F3F7FB] rounded-xl !border-0 py-[5px] px-3' },
                label: { class: 'text-sm text-[#68788D] font-medium' },
              }"
            />
          </div>
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.username') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">canvasserpertama</p>
          <ElementsInputText
            v-else
            id="username"
            :placeholder="$t('placeholder.input', { label: $t('label.username') })"
            disabled
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.email') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">canv_pert@wiz.com</p>
          <ElementsInputText v-else id="email" :placeholder="$t('placeholder.input', { label: $t('label.email') })" />
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.role') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Admin</p>
          <ElementsInputSelect
            v-else
            id="role"
            :placeholder="$t('placeholder.select', { label: $t('label.role') })"
            :options="[
              { name: 'A', code: 'a' },
              { name: 'B', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>
        <Divider />
        <div class="flex items-center flex-wrap md:flex-nowrap gap-3 mb-4">
          <p class="w-[40%] text-sm font-semibold py-3">{{ $t('label.userStatus') }}</p>
          <p v-if="!isEditable" class="w-full text-sm font-normal text-[#333333] py-3">Aktif</p>
          <div v-else class="w-full flex gap-3 items-center">
            <InputSwitch v-model="selectStatusActive" />
            <label
              for="status"
              class="text-sm font-medium"
              :class="selectStatusActive ? 'text-[#19C29A]' : 'text-[#C2C2C2]'"
            >
              <p>
                {{ selectStatusActive ? $t('text.active') : $t('text.nonActive') }}
              </p>
            </label>
          </div>
        </div>

        <div class="flex gap-3 items-center justify-end mt-6">
          <ElementsButton
            class="rounded-xl !border !border-[#FF234B] bg-transparent !w-fit !px-2.5"
            @click="onToggleModalConfirmationDelete"
          >
            <IconTrash />
          </ElementsButton>
          <ElementsButton
            v-if="isEditable"
            class="!w-[170px] !bg-[#FFECF0] !text-[#FF234B]"
            @click="onToggleModalResetPass"
          >
            {{ $t('text.resetPassword') }}
          </ElementsButton>
          <ElementsButton
            v-if="isEditable"
            class="!w-[120px] bg-transparent !border !border-[#FF234B] !text-[#FF234B]"
            @click="isEditable = false"
          >
            {{ $t('text.cancel') }}
          </ElementsButton>
          <ElementsButton v-if="isEditable" class="!w-[120px]" disabled>
            {{ $t('text.save') }}
          </ElementsButton>

          <ElementsButton v-if="!isEditable" class="!w-fit !bg-[#FDF0F1] !text-[#FF234B]" @click="onChangeEdit">
            <IconEdit class="mr-3" />
            {{ $t('text.editProduct') }}
          </ElementsButton>
        </div>
      </form>
    </UICard>

    <UIModalConfirmation
      :visible="isModalConfirmationDelete"
      :title="$t('text.deleteUserData')"
      :description="$t('text.deleteUserDataInformation', { name: 'Canvasser Pertama' })"
      :text-confirm="$t('text.delete')"
      :on-cancel="onToggleModalConfirmationDelete"
      :on-submit="onSubmitDelete"
    />

    <UIDialog
      root-class="max-w-[500px]"
      container-class="p-6"
      :visible="isModalResetPass"
      @update:visible="onToggleModalResetPass"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ t('text.resetPassword') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>

          <ElementsInputText
            id="username"
            :label="$t('label.username')"
            :placeholder="$t('placeholder.input', { label: $t('label.username') })"
          />
          <ElementsInputPassword
            id="newPassword"
            :label="$t('label.newPassword')"
            :placeholder="$t('placeholder.input', { label: $t('label.newPassword') })"
          />

          <div class="flex gap-4 items-center mt-5">
            <ElementsButton
              class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent"
              @click="slotProps.closeCallback"
            >
              <p class="w-full font-semibold">{{ $t('text.cancel') }}</p>
            </ElementsButton>
            <ElementsButton>
              <p class="w-full font-semibold">{{ $t('text.save') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>
