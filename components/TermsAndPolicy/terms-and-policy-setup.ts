import { useTermsAndPolicyStore } from '~/stores/terms-and-policy'

export const useTermsAndPolicy = () => {
  const { isEditable, setIsEditable } = useTermsAndPolicyStore()
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

export default { useTermsAndPolicy }
