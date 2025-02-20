export const useAppsStore = defineStore('apps', () => {
  const messageWarning = ref('')
  const menuActive = ref('')
  const isShowRequest = ref(false)

  function setMessageWarning(param: string) {
    messageWarning.value = param
  }

  function setMenu(menu: string) {
    menuActive.value = menu
  }

  function setIsShowRequest(param: boolean) {
    isShowRequest.value = param
  }

  function getAllState() {
    return {
      messageWarning: computed(() => messageWarning.value),
      menuActive: computed(() => menuActive.value),
      isShowRequest: computed(() => isShowRequest.value),
    }
  }

  function $reset() {
    messageWarning.value = ''
    menuActive.value = ''
  }

  return {
    $reset,
    messageWarning,
    menuActive,
    isShowRequest,
    setMessageWarning,
    setMenu,
    setIsShowRequest,
    getAllState,
  }
})

export default { useAppsStore }
