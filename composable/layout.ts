import { onClickOutside } from '@vueuse/core'

export const useSidebar = () => {
  // const route = useRoute()
  const target = ref(null)
  const visibleMenu = ref(false)

  onClickOutside(target, () => {
    visibleMenu.value = false
  })

  function onChangeVisible() {
    visibleMenu.value = !visibleMenu.value
  }
  return {
    target,
    visibleMenu,
    onChangeVisible,
  }
}

export default { useSidebar }
