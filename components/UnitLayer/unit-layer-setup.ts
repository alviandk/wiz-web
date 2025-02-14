export const useUnitLayer = () => {
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

  return {
    isModalAdd,
    onToggleModalAdd,

    isModalEdit,
    onToggleModalEdit,

    isModalDelete,
    onToggleModalDelete,
  }
}

export default { useUnitLayer }
