import { useProductCategoryStore } from '~/stores/product'

export const useProductCategory = () => {
  const { isEditableCategory, setIsEditableCategory } = useProductCategoryStore()

  const isModalCategoryAdd = ref(false)
  const isModalCategoryEdit = ref(false)
  const isModalConfirmationDelete = ref(false)

  function onToggleModalCategoryAdd() {
    isModalCategoryAdd.value = !isModalCategoryAdd.value
  }

  function onToggleModalCategoryEdit() {
    isModalCategoryEdit.value = !isModalCategoryEdit.value
  }

  function onToggleModalConfirmationDelete() {
    isModalConfirmationDelete.value = !isModalConfirmationDelete.value
  }

  function onChangeEditCategory() {
    setIsEditableCategory(true)
  }

  return {
    isModalCategoryAdd,
    onToggleModalCategoryAdd,

    isModalCategoryEdit,
    onToggleModalCategoryEdit,

    isEditableCategory,
    onChangeEditCategory,

    isModalConfirmationDelete,
    onToggleModalConfirmationDelete,
  }
}

export default { useProductCategory }
