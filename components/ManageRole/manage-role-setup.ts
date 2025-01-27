import { useManageUserRoleStore } from '~/stores/manage-user-role'

export const useManageUserRole = () => {
  const { isEditableRole, setIsEditableRole } = useManageUserRoleStore()
  const isModalConfirmationDeleteRole = ref(false)

  function onChangeEditRole() {
    setIsEditableRole(true)
  }

  function onToggleModalConfirmationDeleteRole() {
    isModalConfirmationDeleteRole.value = !isModalConfirmationDeleteRole.value
  }

  function onSubmitDeleteRole() {
    isModalConfirmationDeleteRole.value = !isModalConfirmationDeleteRole.value
  }

  return {
    isEditableRole,
    onChangeEditRole,

    isModalConfirmationDeleteRole,
    onToggleModalConfirmationDeleteRole,
    onSubmitDeleteRole,
  }
}

export default { useManageUserRole }
