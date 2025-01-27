<script setup lang="ts">
import { useSidebar, useTopBar } from '~/composable/layout'
import Menu from 'primevue/menu'
import Divider from 'primevue/divider'
// import { useAuthStore } from '~/stores/auth'

type Props = {
  pageTitle?: string
}

const props = defineProps<Props>()

const { onChangeVisibleProfile, visibleMenuProfile, menuProfile } = useSidebar()
const { isModalLanguage, onToggleModalSwitchLanguage, isModalLogout, onToggleModalLogout, onLogout } = useTopBar()
// const { myProfile } = storeToRefs(useAuthStore())
</script>

<template>
  <div class="flex items-center justify-between bg-white border-b border-b-[#E7EAF1] px-8 py-[16px]">
    <div class="topbar-start flex items-center gap-5">
      <span class="text-xl font-semibold">{{ props.pageTitle }}</span>
    </div>
    <div class="topbar-end flex items-center gap-5">
      <img src="/images/icon-bell.svg" class="cursor-pointer" />
      <div
        class="topbar-menu sticky top-0 right-0 bg-white flex items-center z-20 justify-end"
        @click="onChangeVisibleProfile"
      >
        <div class="flex gap-2 items-center relative cursor-pointer">
          <div class="w-10 h-10 bg-[#FFECF0] rounded-full flex items-center justify-center p-2">
            <!-- {{ initialName }} -->
            <img src="/images/icon-user.svg" />
          </div>
          <div>
            <p class="text-sm font-semibold">{{ 'Profile Name' }}</p>
            <p class="text-xs text-[#68788D] font-normal">Admin</p>
          </div>
          <div v-if="visibleMenuProfile" ref="target" class="absolute right-0 top-16">
            <Menu :model="menuProfile" :pt="{ root: { class: 'p-0 rounded-xl' } }">
              <template #item="{ label, props: propsMenu, item }">
                <div @click="item.click">
                  <a
                    v-if="item.icon === 'profile'"
                    class="flex gap-4 p-4 text-sm font-medium"
                    v-bind="propsMenu.action"
                  >
                    <img src="/images/icon-user.svg" class="w-5 h-5" />
                    <span class="text-sm">{{ label }}</span>
                  </a>
                  <Divider class="my-0 mx-4 w-auto" />

                  <a
                    v-if="item.icon === 'change-pass'"
                    class="flex gap-4 p-4 text-sm font-medium"
                    v-bind="propsMenu.action"
                  >
                    <img src="/images/icon-padlock.svg" class="w-5 h-5" />
                    <span class="text-sm">{{ label }}</span>
                  </a>
                  <Divider class="my-0 mx-4 w-auto" />

                  <a
                    v-if="item.icon === 'change-lang'"
                    class="flex gap-4 p-4 text-sm font-medium"
                    v-bind="propsMenu.action"
                    @click="onToggleModalSwitchLanguage"
                  >
                    <img src="/images/icon-globe.svg" class="w-5 h-5" />
                    <div>{{ label }} <span class="font-normal">Bahasa Indonesia</span></div>
                  </a>
                  <Divider class="my-0 mx-4 w-auto" />

                  <a
                    v-if="item.icon === 'logout'"
                    class="flex gap-4 p-4 text-sm font-medium"
                    v-bind="propsMenu.action"
                    @click="onToggleModalLogout"
                  >
                    <img src="/images/icon-logout.svg" class="w-5 h-5" />
                    <div>{{ label }}</div>
                  </a>
                </div>
              </template>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <!-- Dialog Logout -->
    <UIModalConfirmation
      :visible="isModalLogout"
      :title="$t('text.logoutAccount')"
      :text-confirm="$t('text.logout')"
      :on-cancel="onToggleModalLogout"
      :on-submit="onLogout"
    />

    <!-- Dialog Switch Language -->
    <UIDialog
      :visible="isModalLanguage"
      root-class="w-[460px]"
      container-class="p-6"
      @update:visible="onToggleModalSwitchLanguage"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ $t('menu.changeLanguage') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>
          <div class="flex items-center justify-center gap-3 mt-4">
            <button class="w-full rounded-xl border px-6 text-center py-3">
              <img src="/images/flag-indonesia.svg" class="mx-auto mb-2" />
              <p class="text-sm font-medium">{{ $t('text.langIndo') }}</p>
            </button>
            <button class="w-full rounded-xl border px-6 text-center py-3">
              <img src="/images/flag-usa.svg" class="mx-auto mb-2" />
              <p class="text-sm font-medium">{{ $t('text.langUsa') }}</p>
            </button>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>

<style>
.p-menu {
  box-shadow: 0px 2px 16px 0px #8a8d8f33;
}
</style>
