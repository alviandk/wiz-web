export const useOrderTransaction = () => {
  const isModalFilter = ref(false)

  function onToggleModalFilter() {
    isModalFilter.value = !isModalFilter.value
  }

  return {
    isModalFilter,
    onToggleModalFilter,
  }
}

export default { useOrderTransaction }
