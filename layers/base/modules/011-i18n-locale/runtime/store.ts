const useLocaleStore = defineStore('feature-i18n-locale', () => {
  const locale = ref<string | undefined>()

  function changeLocale(value: string | undefined): boolean {
    const { isString } = useValueCheck()

    if (isString(value, 2)) {
      useI18n().setLocale(value as string)
      locale.value = value

      return true
    }

    return false
  }

  return {
    changeLocale,
    locale: computed(() => locale.value),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocaleStore, import.meta.hot))
}

export default useLocaleStore
