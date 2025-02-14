export const useMultiDistributorStore = defineStore('multi-distributor', () => {
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
  import.meta.hot.accept(acceptHMRUpdate(useMultiDistributorStore, import.meta.hot))
}

export default { useMultiDistributorStore }
