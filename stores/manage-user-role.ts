export const useManageUserRoleStore = defineStore('manage-user-role', () => {
  const isEditable = ref(false)
  const isEditableRole = ref(false)

  function setIsEditable(param: boolean) {
    isEditable.value = param
  }

  function setIsEditableRole(param: boolean) {
    isEditableRole.value = param
  }

  return {
    isEditable,
    setIsEditable,
    isEditableRole,
    setIsEditableRole,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useManageUserRoleStore, import.meta.hot))
}

export default { useManageUserRoleStore }
