import { onClickOutside } from '@vueuse/core'

export const useSidebar = () => {
  const router = useRouter()
  const target = ref(null)
  const visibleMenu = ref(false)

  onClickOutside(target, () => {
    visibleMenu.value = false
  })

  function onChangeVisible() {
    visibleMenu.value = !visibleMenu.value
  }

  function onBack() {
    router.back()
  }

  return {
    target,
    visibleMenu,
    onChangeVisible,
    onBack,
  }
}

export default { useSidebar }
