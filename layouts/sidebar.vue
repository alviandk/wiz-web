<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import { useSidebar } from '~/composable/layout'

type Props = {
  pageTitle?: string
}
const props = defineProps<Props>()

const { t } = useI18n()
const { visibleMenu, onChangeVisible } = useSidebar()

const menus = [
  {
    id: 1,
    name: t('menu.dashboard'),
    icon: 'icon-dashboard.svg',
    subItems: [
      {
        id: 2,
        name: t('menu.dashboard'),
        link: '/dashboard',
      },
      {
        id: 3,
        name: t('menu.manageDashboard'),
        link: '/dashboard/manage',
      },
    ],
  },
  {
    id: 4,
    name: t('menu.orderTransaction'),
    link: '/order-transaction',
    icon: 'icon-document.svg',
  },
]
</script>

<template>
  <div
    :class="`layout-container layout-light layout-static ${visibleMenu ? `layout-static-inactive layout-mobile-inactive` : `layout-static-active layout-mobile-active`} bg-[#f8f9fa]`"
  >
    <!-- Sidebar -->
    <div class="layout-sidebar !w-[17rem]">
      <div
        class="sidebar-header p-5 flex items-center gap-3"
        style="background: linear-gradient(90deg, #ff234b 0%, #f78431 100%)"
      >
        <!-- <i class="pi pi-bars text-white text-[1.5rem] cursor-pointer" @click="onChangeVisible"></i> -->
        <a href="/dashboard" class="m-auto">
          <img src="/images/logo-wizyztem-white.svg" alt="logo" class="w-[160px] h-[31px]" />
        </a>
      </div>
      <div class="layout-menu-container p-6">
        <div class="flex flex-col gap-1">
          <div v-for="item in menus" :key="item.id">
            <Accordion
              :pt="{
                root: { class: 'm-0 min-h-[45px]' },
              }"
            >
              <AccordionTab
                :pt="{
                  header: { class: 'bg-transparent border-none' },
                  headerAction: {
                    class: 'bg-transparent border-none flex-row-reverse focus:shadow-none h-[45px] px-0',
                  },
                  headerIcon: { class: 'flex-row-reverse' },
                  content: {
                    class: '!bg-transparent border-none py-0',
                  },
                }"
              >
                <template #header>
                  <div
                    class="text-left w-full text-sm font-semibold text-[#68788D] items-center flex gap-3 justify-start"
                  >
                    <img :src="`/images/${item.icon}`" alt="icon plus" class="h-5 w-5" />
                    <!-- <IconBlock class="h-5 w-5" /> -->
                    <span>{{ item.name }}</span>
                  </div>
                </template>
                <div
                  v-for="child in item.subItems"
                  :key="child.id"
                  :to="child.link"
                  :class="`p-3 w-full block relative text-sm font-semibold text-[#68788D] rounded-xl cursor-pointer hover:bg-[#F5F7F9] hover:text-[#FF234B]`"
                  @click="navigateTo(child.link)"
                >
                  <!-- ${appsState.menuActive.value === child.link ? 'bg-[#1D634A]' : ''} -->
                  {{ child.name }}
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div :class="`layout-content-wrapper`">
      <UITopbar :on-click="onChangeVisible" :page-title="props.pageTitle" />
      <div class="layout-content px-8 pt-5 pb-8 min-h-screen bg-white">
        <slot></slot>
      </div>
    </div>
    <div class="layout-mask"></div>
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
/* @media screen and (min-width: 992px) { */
.layout-static-inactive .layout-sidebar {
  transform: translate(-100%);
}
.layout-static .layout-sidebar {
  transition: transform 0.2s;
}

.layout-static .layout-content-wrapper {
  transition: margin-left 0.2s;
}
.layout-static-inactive .layout-content-wrapper {
  margin-left: 0;
}
.layout-static-active .layout-content-wrapper {
  margin-left: 17rem;
}
/* } */
/* @media screen and (max-width: 991px) {
  .layout-container .layout-sidebar {
    z-index: 999;
    transition: transform 0.2s;
    transform: translate(-100%);
    box-shadow: none;
  }
  .layout-container.layout-mobile-active .layout-sidebar {
    transform: translate(0);
  }
  .layout-container.layout-mobile-inactive .layout-mask {
    display: none;
  }
  .layout-container.layout-mobile-active .layout-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
} */
</style>
