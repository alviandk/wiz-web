import { useProductStore } from '~/stores/product'

export const useProductMaster = () => {
  const { isEditableProduct, setIsEditableProduct } = useProductStore()

  const isModalBack = ref(false)
  const isModalConfirmationDelete = ref(false)

  function onToggleModalBack() {
    isModalBack.value = !isModalBack.value
  }

  function onToggleModalConfirmationDelete() {
    isModalConfirmationDelete.value = !isModalConfirmationDelete.value
  }

  function onChangeEditProduct() {
    setIsEditableProduct(true)
  }

  return {
    isModalBack,
    onToggleModalBack,

    isModalConfirmationDelete,
    onToggleModalConfirmationDelete,

    isEditableProduct,
    onChangeEditProduct,
  }
}

export default { useProductMaster }
