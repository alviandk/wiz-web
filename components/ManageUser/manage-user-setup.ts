import { useManageUserRoleStore } from '~/stores/manage-user-role'

export const useManageUserRole = () => {
  const { isEditable, setIsEditable } = useManageUserRoleStore()
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

export default { useManageUserRole }
