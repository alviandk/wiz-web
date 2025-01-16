export const useDashboard = () => {
  const { isEditable, setIsEditable } = useDashboardStore()
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

export default { useDashboard }
