import { getActivePinia } from 'pinia'
import { onClickOutside } from '@vueuse/core'
// import { IS_LOGIN } from '~/constants/cookies'
import { useAuthStore } from '~/stores/auth'

export function useResetAllPinia() {
  const activepinia = getActivePinia()
  if (activepinia) {
    Object.entries(activepinia.state.value).forEach(([storeName, state]) => {
      const storeDefinition = defineStore(storeName, state)
      const store = storeDefinition(activepinia)
      store.$reset()
    })
  }
}

export async function useLogout() {
  // try {
  //   const nuxtApp = useNuxtApp()
  //   await $fetch('/api/auth/logout', { method: 'POST' })
  //   nuxtApp.payload.data.MY_PROFILE = undefined
  //   useResetAllPinia()
  // } catch (error) {
  //   deleteToken(IS_LOGIN)
  //   // eslint-disable-next-line no-console
  //   console.error(error)
  // }
}

export const useSidebar = () => {
  const { t } = useI18n()
  const props = useAttrs()
  const router = useRouter()
  const { myProfile } = storeToRefs(useAuthStore())

  const target = ref(null)
  const visibleMenu = ref(false)
  const visibleMenuProfile = ref(false)

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
      name: t('menu.listMemberUmkm'),
      icon: 'icon-store.svg',
      subItems: [
        {
          id: 5,
          name: t('menu.waitingApproval'),
          link: '/member/waiting-approval',
        },
        {
          id: 6,
          name: t('menu.registeredMember'),
          link: '/member/registered',
        },
        {
          id: 7,
          name: t('menu.rejectedHistory'),
          link: '/member/history',
        },
      ],
    },
    {
      id: 8,
      name: t('menu.manageUMKM'),
      link: '/manage-umkm',
      icon: 'icon-umbrella.svg',
      subItems: [],
    },
    {
      id: 9,
      name: t('menu.orderTransaction'),
      link: '/order-transaction',
      icon: 'icon-document.svg',
      subItems: [],
    },
    {
      id: 10,
      name: t('menu.productMaster'),
      icon: 'icon-box.svg',
      subItems: [
        {
          id: 11,
          name: t('menu.productMaster'),
          link: '/product-master',
        },
        {
          id: 12,
          name: t('menu.manageCategory'),
          link: '/product-category',
        },
        {
          id: 13,
          name: t('menu.unitMaster'),
          link: '/product-unit-layer',
        },
      ],
    },
    {
      id: 14,
      name: t('menu.manageUserRole'),
      icon: 'icon-group-people.svg',
      subItems: [
        {
          id: 15,
          name: t('menu.user'),
          link: '/user',
        },
        {
          id: 16,
          name: t('menu.role'),
          link: '/role',
        },
      ],
    },
    {
      id: 17,
      name: t('menu.termsAndPolicy'),
      link: '/terms-and-policy',
      icon: 'icon-file.svg',
      subItems: [],
    },
  ]

  const menuProfile = ref([
    {
      label: t('menu.profile'),
      icon: 'profile',
      to: '/profile',
      click: () => {
        navigateTo('/profile')
      },
    },
    {
      label: t('menu.changePassword'),
      icon: 'change-pass',
      to: '/change-password',
      click: () => {
        navigateTo('/change-password')
      },
    },
    {
      label: `${t('menu.changeLanguage')}:`,
      icon: 'change-lang',
    },
    {
      label: t('menu.logout'),
      icon: 'logout',
      // click: async () => {
      //   await useLogout()
      //   navigateTo('/')
      // },
    },
  ])

  function getInitialName() {
    if (myProfile.value) {
      const { name = '' } = myProfile.value || {}
      const split = name.split(' ')
      if (split.length >= 2) {
        return split[0].charAt(0) + split[1].charAt(0)
      }
      return name.charAt(0)
    }
    return '-'
  }

  onClickOutside(target, () => {
    visibleMenu.value = false
  })

  function onChangeVisible() {
    visibleMenu.value = !visibleMenu.value
  }

  function onChangeVisibleProfile() {
    visibleMenuProfile.value = !visibleMenuProfile.value
  }

  function onBack() {
    router.back()
  }

  return {
    props,
    menus,

    target,
    visibleMenu,
    onChangeVisible,
    onBack,

    menuProfile,
    initialName: computed(() => getInitialName()),
    visibleMenuProfile,
    onChangeVisibleProfile,
  }
}

export const useTopBar = () => {
  const isModalLanguage = ref(false)
  const isModalLogout = ref(false)

  function onToggleModalSwitchLanguage() {
    isModalLanguage.value = !isModalLanguage.value
  }

  function onToggleModalLogout() {
    isModalLogout.value = !isModalLogout.value
  }

  async function onLogout() {
    await useLogout()
    navigateTo('/')
  }

  return {
    isModalLanguage,
    onToggleModalSwitchLanguage,

    isModalLogout,
    onToggleModalLogout,
    onLogout,
  }
}

export default { useSidebar, useTopBar }
