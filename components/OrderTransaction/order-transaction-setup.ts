export const useOrderTransaction = () => {
  const isModalFilter = ref(false)
  const isModalIngredients = ref(false)
  const isModalDesc = ref(false)

  function onToggleModalFilter() {
    isModalFilter.value = !isModalFilter.value
  }

  function onToggleModalIngredients() {
    isModalIngredients.value = !isModalIngredients.value
  }

  function onToggleModalDesc() {
    isModalDesc.value = !isModalDesc.value
  }

  return {
    isModalFilter,
    onToggleModalFilter,

    isModalIngredients,
    onToggleModalIngredients,

    isModalDesc,
    onToggleModalDesc,
  }
}

export default { useOrderTransaction }
