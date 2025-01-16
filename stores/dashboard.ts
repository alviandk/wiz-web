export const useDashboardStore = defineStore('dashboard', () => {
  const isEditable = ref(false)

  function setIsEditable(param: boolean) {
    isEditable.value = param
  }

  return {
    isEditable,
    setIsEditable,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDashboardStore, import.meta.hot))
}

export default { useDashboardStore }
