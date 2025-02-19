export const useMemberStore = defineStore('member', () => {
  const isShowCompleteHistory = ref(false)

  function setIsShowCompleteHistory(param: boolean) {
    isShowCompleteHistory.value = param
  }

  return {
    isShowCompleteHistory,
    setIsShowCompleteHistory,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMemberStore, import.meta.hot))
}

export default { useMemberStore }
