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
  const router = useRouter()
  const { myProfile } = storeToRefs(useAuthStore())

  const target = ref(null)
  const visibleMenu = ref(false)
  const visibleMenuProfile = ref(false)

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
      label: t('menu.changeLanguage'),
      icon: 'change-lang',
      to: '/change-lang',
      click: () => {
        navigateTo('/change-lang')
      },
    },
    {
      label: t('menu.logout'),
      icon: 'logout',
      click: async () => {
        await useLogout()
        navigateTo('/')
      },
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

export default { useSidebar }
