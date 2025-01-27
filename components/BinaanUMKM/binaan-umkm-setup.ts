import { useBinaanUmkmStore } from '~/stores/binaan-umkm'

export const useBinaanUmkm = () => {
  const { isEditable, setIsEditable } = useBinaanUmkmStore()
  const isModalConfirmationDelete = ref(false)

  function onChangeEdit() {
    setIsEditable(true)
  }

  function onToggleModalConfirmationDelete() {
    isModalConfirmationDelete.value = !isModalConfirmationDelete.value
  }

  function onSubmitDelete() {
    isModalConfirmationDelete.value = !isModalConfirmationDelete.value
  }

  return {
    isEditable,
    onChangeEdit,

    isModalConfirmationDelete,
    onToggleModalConfirmationDelete,
    onSubmitDelete,
  }
}

export default { useBinaanUmkm }
