import { useMemberStore } from '~/stores/member'

export const useMember = () => {
  const memberStore = useMemberStore()
  const isModalFilter = ref(false)

  function onToggleModalFilter() {
    isModalFilter.value = !isModalFilter.value
  }

  function goToMemberCompleteHistory(name: string) {
    memberStore.setMemberSelectedHistory(name)
    memberStore.setIsShowCompleteHistory(true)
  }

  function onBackHistory() {
    memberStore.setIsShowCompleteHistory(false)
    memberStore.setMemberSelectedHistory('')
  }

  return {
    isModalFilter,
    onToggleModalFilter,
    goToMemberCompleteHistory,

    onBackHistory,
  }
}

export default { useMember }
