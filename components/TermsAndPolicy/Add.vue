<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <UICard>
      <div class="flex flex-wrap md:flex-nowrap gap-3 mb-6 !w-full">
        <div class="flex flex-wrap gap-3 w-full md:!w-[65%]" style="width: 65%">
          <label class="font-semibold text-sm text-[#333333]">
            {{ t('label.title') }}
          </label>
          <ElementsInputText id="title" :placeholder="$t('placeholder.input', { label: $t('label.title') })" />
        </div>
        <div class="flex flex-wrap gap-3 w-full md:!w-[35%]" style="width: 35%">
          <label class="font-semibold text-sm text-[#333333]">
            {{ t('label.category') }}
          </label>
          <ElementsInputSelect
            id="category"
            :placeholder="$t('placeholder.select', { label: $t('label.category') })"
            :options="[
              { name: 'Aplikasi', code: 'a' },
              { name: 'UMKM', code: 'b' },
              { name: 'Bank DKI', code: 'b' },
            ]"
            option-label="name"
            option-value="code"
          />
        </div>
      </div>

      <p class="font-semibold text-sm text-[#333333] mb-2">{{ t('text.writeTermsAndPolicy') }}</p>
      <div>editor</div>
    </UICard>
  </div>
</template>
