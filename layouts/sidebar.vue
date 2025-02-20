<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Divider from 'primevue/divider'
import { useSidebar } from '~/composable/layout'

// type Props = {
//   pageTitle?: string
// }
// const props = defineProps<Props>()

const { props, menus, visibleMenu, onChangeVisible, onSetMenu, isActiveAccordion, appsState } = useSidebar()
</script>

<template>
  <div
    :class="`layout-container layout-light layout-static ${visibleMenu ? `layout-static-inactive` : `layout-static-active`} bg-[#f8f9fa]`"
  >
    <!-- Sidebar -->
    <div v-if="!visibleMenu" class="layout-sidebar desktop !w-[17rem]">
      <div
        class="sidebar-header p-5 flex items-center gap-3"
        style="background: linear-gradient(90deg, #ff234b 0%, #f78431 100%)"
      >
        <i class="pi pi-bars text-[#ffffff] text-[1.2rem] cursor-pointer" @click="onChangeVisible"></i>
        <a href="/dashboard" class="m-auto">
          <img src="/images/logo-wizyztem-white.svg" alt="logo" class="w-[160px] h-[31px]" />
        </a>
      </div>
      <div class="layout-content-scroll h-full grid content-between">
        <div class="layout-menu-container pt-6 px-2">
          <div class="flex flex-col gap-1">
            <div v-for="item in menus" :key="item.id">
              <div
                v-if="!item.subItems.length"
                class="w-full text-[#68788D] font-semibold text-sm h-[45px] items-center flex gap-3 cursor-pointer rounded-xl mb-1 !px-4 hover:bg-[#F5F7F9] hover:!text-[#FF234B]"
                :class="appsState.menuActive.value === item.link ? 'bg-[#F5F7F9] color-primary' : ''"
                @click="onSetMenu(item.link)"
              >
                <img :src="`/images/${item.icon}`" alt="icon plus" class="h-4 w-4" /> <span>{{ item.name }}</span>
              </div>
              <Accordion
                v-if="item.subItems.length"
                :active-index="isActiveAccordion(item.link, item.subItems)"
                :pt="{
                  root: { class: 'm-0 min-h-[45px]' },
                }"
              >
                <AccordionTab
                  :pt="{
                    header: { class: 'bg-transparent border-none' },
                    headerAction: {
                      class:
                        'bg-transparent border-none flex-row-reverse focus:shadow-none h-[45px] py-0 !px-4 rounded-xl hover:!bg-[#F5F7F9] hover:!text-[#FF234B]',
                    },
                    headerIcon: { class: 'flex-row-reverse' },
                    content: {
                      class: '!bg-transparent border-none p-0',
                    },
                  }"
                >
                  <template #header>
                    <div
                      class="text-left w-full h-full text-sm font-semibold text-[#68788D] items-center flex gap-3 justify-start hover:!text-[#FF234B]"
                    >
                      <img :src="`/images/${item.icon}`" alt="icon plus" class="h-4 w-4" />
                      <!-- <IconBlock class="h-4 w-4" /> -->
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
                  <div
                    v-for="child in item.subItems"
                    :key="child.id"
                    :to="child.link"
                    class="py-3 pr-3 pl-11 w-full block relative text-sm font-semibold text-[#68788D] rounded-xl cursor-pointer hover:bg-[#F5F7F9] hover:!text-[#FF234B]"
                    :class="appsState.menuActive.value === child.link ? 'bg-[#F5F7F9] color-primary' : ''"
                    @click="onSetMenu(child.link, child.subItems)"
                  >
                    {{ child.name }}
                  </div>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </div>

        <!-- Footer Sidebar -->
        <div>
          <div class="flex justify-center gap-2 p-6 mb-2">
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
    </div>
    <div v-else class="layout-sidebar minibar !w-[5rem] mini-sidebar">
      <div
        class="sidebar-header p-5 flex justify-center items-center gap-3 h-[72px]"
        style="background: linear-gradient(90deg, #ff234b 0%, #f78431 100%)"
      >
        <i class="pi pi-bars text-white text-[1.2rem] cursor-pointer" @click="onChangeVisible"></i>
      </div>
      <div class="layout-content-scroll h-full grid content-between">
        <div class="layout-menu-container pt-6 px-2">
          <div class="flex flex-col gap-3">
            <div v-for="item in menus" :key="item.id" class="cursor-pointer w-full" @click="onChangeVisible">
              <img :src="`/images/${item.icon}`" alt="icon plus" class="mx-auto h-4 w-4 my-3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div :class="`layout-content-wrapper`">
      <UITopbar :on-click="onChangeVisible" :page-title="props.title" :is-back="props['is-back'] ?? false" />
      <div class="layout-content px-8 pt-8 pb-10 min-h-screen bg-white">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  min-height: 100vh;
}
.layout-sidebar {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffff;
  /* box-shadow: 0px 4px 50px #d9ddfc; */
  border-right: 1px solid #e7eaf1;
  display: flex;
  flex-direction: column;
}
.layout-content-scroll {
  overflow: auto !important;
  flex: 1;
  -ms-overflow-style: none; /* Internet Explorer dan Edge */
  scrollbar-width: none; /* Firefox */
}
.layout-content-scroll::-webkit-scrollbar {
  display: none;
}
/* .layout-static-inactive .layout-sidebar {
  transform: translate(-100%);
} */
.layout-static .layout-sidebar {
  transition: transform 0.2s;
}

.layout-static .layout-content-wrapper {
  transition: margin-left 0.2s;
}
.layout-static-inactive .layout-content-wrapper {
  margin-left: 5rem;
}
.layout-static-active .layout-content-wrapper {
  margin-left: 17rem;
}
</style>
