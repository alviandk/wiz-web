<script lang="ts" setup>
import { useMember } from '../member-setup'

const { t } = useI18n()
const params = useRequestURL().searchParams.get('s')

const { isModalApprove, isModalReject, onToggleModalApprove, onToggleModalReject, onSubmit, isDisable, values } =
  useMember()
</script>

<template>
  <div class="w-full">
    <p class="text-base font-semibold pb-3">{{ $t('label.loanApplicationStatus') }}</p>
    <div class="border rounded-xl p-4">
      <!-- v-if="rejected" -->
      <div v-if="params === 'rejected'">
        <div class="status-step flex items-center mb-4">
          <div class="step-icon rounded-full mr-2 relative approved">
            <img src="/images/icon-round-green.svg" class="w-7 h-7" />
            <div class="line"></div>
          </div>
          <div class="flex flex-col gap-1 w-full rounded-xl bg-[#F5F7F9] p-3.5">
            <p class="text-sm font-medium text-[#333333]">Menunggu Approval</p>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-xs text-[#6C6C6C]">Pengajuan: 12 Des 2022, 09.41</p>
                <p class="text-xs text-[#6C6C6C]">Disetujui: 12 Des 2022, 12.41</p>
              </div>
              <img src="/images/icon-check.svg" class="w-4 h-4" />
            </div>
          </div>
        </div>
        <div class="status-step flex items-center">
          <div class="step-icon rounded-full mr-2 relative reject">
            <img src="/images/icon-round-red.svg" class="w-7 h-7" />
          </div>
          <div class="flex flex-col gap-1 w-full rounded-xl bg-[#F5F7F9] p-3.5">
            <p class="text-sm font-medium text-[#333333]">Ditolak oleh Bank DKI</p>
            <div class="flex items-center justify-between">
              <p class="text-xs text-[#6C6C6C]">Pada: 12 Des 2022, 14.41</p>
              <img src="/images/icon-close.svg" class="w-3 h-3" />
            </div>
          </div>
        </div>
        <!-- v-if rejectedHistory -->
        <div class="flex items-start gap-3 bg-[#FFF6E0] rounded-xl py-2.5 px-3.5 mt-8">
          <img src="/images/icon-warning.svg" class="w-5 h-5 mt-[8px]" />
          <div>
            <p class="text-xs text-[#6C6C6C]">Alasan Penolakan</p>
            <p class="text-sm font-medium text-[#333333]">Bank DKI menolak pengajuan UMKM</p>
          </div>
        </div>
      </div>

      <!-- v-if="waitingApproval" -->
      <div v-if="params === 'waiting'">
        <div class="status-step flex items-center mb-4">
          <div class="step-icon rounded-full mr-2 relative approved">
            <img src="/images/icon-round-red.svg" class="w-7 h-7" />
            <div class="line"></div>
          </div>
          <div class="flex gap-1 w-full rounded-xl bg-[#FFECF0] p-3.5 justify-between items-center">
            <div class="flex flex-col gap-1">
              <p class="text-sm font-medium text-[#FF234B]">Menunggu Approval</p>
              <p class="text-xs text-[#6C6C6C]">Pengajuan: 12 Des 2022, 09.41</p>
            </div>
            <img src="/images/loading-red.svg" class="w-6 h-6" />
          </div>
        </div>
        <div class="status-step flex items-center mb-4">
          <div class="step-icon rounded-full mr-2 relative reject">
            <img src="/images/icon-round-grey.svg" class="w-7 h-7" />
            <div class="line"></div>
          </div>
          <div class="flex flex-col gap-1 w-full rounded-xl bg-[#F5F7F9] p-3.5">
            <p class="text-sm font-medium text-[#68788D]">Konfirmasi Bank</p>
          </div>
        </div>
        <div class="status-step flex items-center">
          <div class="step-icon rounded-full mr-2 relative reject">
            <img src="/images/icon-round-grey.svg" class="w-7 h-7" />
          </div>
          <div class="flex flex-col gap-1 w-full rounded-xl bg-[#F5F7F9] p-3.5">
            <p class="text-sm font-medium text-[#68788D]">Keputusan Bank: Disetujui/Ditolak</p>
          </div>
        </div>

        <div class="mt-8">
          <div class="text-sm text-[#333333] font-semibold">
            {{ t('text.doConfirmApproval') }}
          </div>
          <div class="flex items-center justify-center gap-3 mt-4">
            <ElementsButton class="red-outline-button" @click="onToggleModalReject">
              <p class="w-full font-semibold">{{ $t('text.reject') }}</p>
            </ElementsButton>
            <ElementsButton class="red-dark-button" @click="onToggleModalApprove">
              <p class="w-full font-semibold">{{ $t('text.approve') }}</p>
            </ElementsButton>
          </div>
        </div>
      </div>
    </div>

    <UIDialog
      :visible="isModalApprove"
      root-class="max-w-[500px]"
      container-class="p-6"
      @update:visible="onToggleModalApprove"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ $t('text.approveUmkm') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>
          <p class="pb-10 text-base text-[#68788D] font-normal">
            {{ $t('text.approveInformation', { x: 'Budiman Agusta (LM0019012)' }) }}
          </p>
          <div class="flex items-center justify-center gap-4 mt-4">
            <ElementsButton
              class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent"
              @click="slotProps.closeCallback"
            >
              <p class="w-full font-semibold">{{ $t('text.cancel') }}</p>
            </ElementsButton>
            <ElementsButton>
              <p class="w-full font-semibold">{{ $t('text.approve') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>

    <UIDialog
      :visible="isModalReject"
      root-class="max-w-[500px]"
      container-class="p-6"
      @update:visible="onToggleModalReject"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ $t('text.rejectUmkm') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>
          <p class="pb-2 text-base text-[#68788D] font-normal">
            {{ $t('text.rejectInformation', { x: 'Budiman Agusta (LM0019012)' }) }}
          </p>
          <form @submit.prevent="onSubmit">
            <div class="">
              <p class="w-[40%] text-sm font-semibold">{{ $t('label.reasonRejected') }}</p>
              <ElementsInputSelect
                id="reason"
                :placeholder="$t('placeholder.select', { label: $t('label.reasonRejected') })"
                :options="[
                  { name: 'Info data UMKM kurang lengkap', code: '1' },
                  { name: 'Data UMKM tidak valid', code: '2' },
                  { name: 'Ada pinjaman di bank lain', code: '3' },
                  { name: 'UMKM fiktif', code: '4' },
                  { name: 'Alasan lainnya', code: '5' },
                ]"
                option-label="name"
                option-value="name"
              />

              <p class="font-bold text-sm text-[#333333] mt-3 mb-1.5">{{ values.reason }}</p>
              <ElementsTextArea
                v-if="values.reason"
                id="rejectReason"
                :placeholder="$t('placeholder.write', { label: $t('label.reasonRejected') })"
              />
            </div>
          </form>
          <div class="flex items-center justify-center gap-4 mt-8">
            <ElementsButton
              class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent"
              @click="slotProps.closeCallback"
            >
              <p class="w-full font-semibold">{{ $t('text.cancel') }}</p>
            </ElementsButton>
            <ElementsButton :disabled="!isDisable">
              <p class="w-full font-semibold">{{ $t('text.reject') }}</p>
            </ElementsButton>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>

<style scoped>
.line {
  top: 27px;
  left: 11px;
  height: 70px;
  position: absolute;
  border-left: 2px solid #eeeeee;
}
</style>
