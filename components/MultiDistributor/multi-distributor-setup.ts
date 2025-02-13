import { useMultiDistributorStore } from "~/stores/multi-distributor"

export const useMultiDistributor = () => {
  const { isEditable, setIsEditable } = useMultiDistributorStore()
  const isModalConfirmationDelete = ref(false)
  const isModalResetPass = ref(false)

  function onChangeEdit() {
    setIsEditable(true)
  }

  function onToggleModalConfirmationDelete() {
    isModalConfirmationDelete.value = !isModalConfirmationDelete.value
  }

  function onToggleModalResetPass() {
    isModalResetPass.value = !isModalResetPass.value
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

    isModalResetPass,
    onToggleModalResetPass,
  }
}

export default { useMultiDistributor }
