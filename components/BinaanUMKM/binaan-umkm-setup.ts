import { useBinaanUmkmStore } from '~/stores/binaan-umkm'

export const useBinaanUmkm = () => {
  const { isEditable, setIsEditable } = useBinaanUmkmStore()

  const isModalImport = ref(false)
  const isModalConfirmationDelete = ref(false)

  function onChangeEdit() {
    setIsEditable(true)
  }

  function onToggleModalImport() {
    isModalImport.value = !isModalImport.value
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

    isModalImport,
    onToggleModalImport,

    isModalConfirmationDelete,
    onToggleModalConfirmationDelete,
    onSubmitDelete,
  }
}

export default { useBinaanUmkm }
