export const useMemberStore = defineStore('member', () => {
  const isShowCompleteHistory = ref(false)
  const memberSelectedHistory = ref('')

  function setIsShowCompleteHistory(param: boolean) {
    isShowCompleteHistory.value = param
  }

  function setMemberSelectedHistory(param: string) {
    memberSelectedHistory.value = param
  }

  return {
    isShowCompleteHistory,
    setIsShowCompleteHistory,

    memberSelectedHistory,
    setMemberSelectedHistory,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMemberStore, import.meta.hot))
}

export default { useMemberStore }
