export const useProductStore = defineStore('product', () => {
  const isEditableProduct = ref(false)
  const isEditableCategory = ref(false)

  function setIsEditableProduct(param: boolean) {
    isEditableProduct.value = param
  }

  function setIsEditableCategory(param: boolean) {
    isEditableCategory.value = param
  }

  return {
    isEditableProduct,
    setIsEditableProduct,

    isEditableCategory,
    setIsEditableCategory,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}

export default { useProductStore }
