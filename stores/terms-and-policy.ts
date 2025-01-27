export const useTermsAndPolicyStore = defineStore('terms-and-policy', () => {
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
  import.meta.hot.accept(acceptHMRUpdate(useTermsAndPolicyStore, import.meta.hot))
}

export default { useTermsAndPolicyStore }
