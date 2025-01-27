import { useProfileStore } from '~/stores/profile'

export const useProfile = () => {
  const { isEditable, setIsEditable } = useProfileStore()

  function onChangeEdit() {
    setIsEditable(true)
  }
  return {
    isEditable,
    onChangeEdit,
  }
}

export default { useProfile }
