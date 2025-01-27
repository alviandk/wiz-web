export const useProductCategoryStore = defineStore('product-category', () => {
  const isEditableCategory = ref(false)

  function setIsEditableCategory(param: boolean) {
    isEditableCategory.value = param
  }

  return {
    isEditableCategory,
    setIsEditableCategory,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductCategoryStore, import.meta.hot))
}

export default { useProductCategoryStore }
