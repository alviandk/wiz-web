export const useProfileStore = defineStore('profile', () => {
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
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot))
}

export default { useProfileStore }
