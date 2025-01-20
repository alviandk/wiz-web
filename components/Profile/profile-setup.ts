import { useProfileStore } from '~/stores/profile'

export const useProfile = () => {
  const { isEditable, setIsEditable } = useProfileStore()
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

export default { useProfile }
