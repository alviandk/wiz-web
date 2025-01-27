export const useProductMaster = () => {
  const isModalBack = ref(false)

  function onToggleModalBack() {
    isModalBack.value = !isModalBack.value
  }

  return {
    isModalBack,
    onToggleModalBack,
  }
}

export default { useProductMaster }
