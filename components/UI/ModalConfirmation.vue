<template>
  <UIDialog :root-class="`w-[460px] ${props.rootClass}`" container-class="p-6" @update:visible="props.onCancel">
    <template #default="slotProps">
      <div class="flex flex-col gap-4">
        <!-- <IconWarning class="mx-auto" /> -->

        <div class="flex justify-between w-full">
          <p class="text-xl font-semibold">{{ props.title }}</p>
          <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
        </div>
        <p class="pb-10 text-base font-normal">{{ props.description }}</p>

        <div class="flex gap-4">
          <ElementsButton
            class="!text-[#FF234B] !border !border-[#FF234B] !bg-transparent"
            @click="slotProps.closeCallback"
          >
            <p class="w-full font-semibold">{{ props.textCancel || $t('text.cancel') }}</p>
          </ElementsButton>
          <ElementsButton
            :class="props.btnConfirmClass"
            :is-loading="props.isLoading"
            :disabled="props.isLoading"
            @click="props.onSubmit"
          >
            <p class="w-full font-semibold">{{ props.textConfirm || $t('text.save') }}</p>
          </ElementsButton>
        </div>
      </div>
    </template>
  </UIDialog>
</template>

<script lang="ts" setup>
type Props = {
  title: string
  description: string
  onCancel: () => void
  onSubmit: () => void
  textCancel?: string
  textConfirm?: string
  btnConfirmClass?: string
  isLoading?: boolean
  rootClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  textCancel: '',
  textConfirm: '',
  btnConfirmClass: '',
  isLoading: false,
  rootClass: '',
})
</script>
