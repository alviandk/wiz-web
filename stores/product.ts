export const useProductStore = defineStore('product', () => {
  const isEditableProduct = ref(false)
  const isEditableCategory = ref(false)
  const isEditableUnit = ref(false)

  function setIsEditableProduct(param: boolean) {
    isEditableProduct.value = param
  }

  function setIsEditableCategory(param: boolean) {
    isEditableCategory.value = param
  }

  function setIsEditableUnit(param: boolean) {
    isEditableUnit.value = param
  }

  return {
    isEditableProduct,
    setIsEditableProduct,

    isEditableCategory,
    setIsEditableCategory,

    isEditableUnit,
    setIsEditableUnit,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}

export default { useProductStore }
