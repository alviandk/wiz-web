export const useBinaanUmkmStore = defineStore('binaan-umkm', () => {
  const isEditable = ref(false)

  function setIsEditable(param: boolean) {
    isEditable.value = param
  }

  return {
    isEditable,
    setIsEditable,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBinaanUmkmStore, import.meta.hot))
}

export default { useBinaanUmkmStore }
