<script setup>
import { useSidebar } from '~/composable/layout'

const { visibleMenu, onChangeVisible } = useSidebar()
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
        {{ visibleMenu }} <br />
        menu list
      </div>
    </div>

    <!-- Right Side -->
    <div :class="`layout-content-wrapper`">
      <UITopbar :on-click="onChangeVisible" />
      <div class="layout-content px-8 pt-5 pb-8 min-h-screen">
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
