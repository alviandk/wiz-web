<script setup lang="ts">
import { useSidebar } from '~/composable/layout'
import Menu from 'primevue/menu'
import Divider from 'primevue/divider'
// import { useAuthStore } from '~/stores/auth'

type Props = {
  pageTitle?: string
  onClick: () => void
}

const props = defineProps<Props>()

const { onChangeVisibleProfile, visibleMenuProfile, menuProfile } = useSidebar()
// const { myProfile } = storeToRefs(useAuthStore())
</script>

<template>
  <div class="flex items-center justify-between bg-white border-b border-b-[#E7EAF1] px-8 py-[21px]">
    <div class="topbar-start flex items-center gap-5">
      <i class="pi pi-bars text-[1.2rem] cursor-pointer" @click="props.onClick"></i>
      <span class="text-xl font-semibold">{{ pageTitle }}</span>
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
                    v-if="item.icon !== 'change-lang'"
                    class="flex gap-4 p-4 text-sm font-medium"
                    v-bind="propsMenu.action"
                  >
                    <img v-if="item.icon === 'profile'" src="/images/icon-user.svg" class="w-5 h-5" />
                    <img v-if="item.icon === 'change-pass'" src="/images/icon-padlock.svg" class="w-5 h-5" />
                    <img v-if="item.icon === 'logout'" src="/images/icon-logout.svg" class="w-5 h-5" />
                    <span class="text-sm">{{ label }}</span>
                  </a>
                  <a
                    v-if="item.icon === 'change-lang'"
                    class="flex gap-4 p-4 text-sm font-medium"
                    v-bind="propsMenu.action"
                  >
                    <img v-if="item.icon === 'change-lang'" src="/images/icon-globe.svg" class="w-5 h-5" />
                    <div>{{ item.label }} <span class="font-normal">Bahasa Indonesia</span></div>
                  </a>
                  <Divider v-if="item.icon !== 'logout'" class="my-0 mx-4 w-auto" />
                </div>
              </template>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.layout-topbar .topbar-menu {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 1rem;
}
</style>
