export const useUnitLayer = () => {
  const { isEditableUnit, setIsEditableUnit } = useProductStore()

  const isModalAdd = ref(false)
  const isModalEdit = ref(false)
  const isModalDelete = ref(false)

  function onToggleModalAdd() {
    isModalAdd.value = !isModalAdd.value
  }

  function onToggleModalEdit() {
    isModalEdit.value = !isModalEdit.value
  }

  function onToggleModalDelete() {
    isModalDelete.value = !isModalDelete.value
  }

  function onChangeEditUnit() {
    setIsEditableUnit(true)
  }

  return {
    isModalAdd,
    onToggleModalAdd,

    isModalEdit,
    onToggleModalEdit,

    isModalDelete,
    onToggleModalDelete,

    isEditableUnit,
    onChangeEditUnit,
  }
}

export default { useUnitLayer }
