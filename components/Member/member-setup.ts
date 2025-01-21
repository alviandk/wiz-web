export const useMember = () => {
  const isModalFilter = ref(false)

  function onToggleModalFilter() {
    isModalFilter.value = !isModalFilter.value
  }

  return {
    isModalFilter,
    onToggleModalFilter,
  }
}

export default { useMember }
