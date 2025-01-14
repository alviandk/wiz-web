// eslint-disable-next-line import/no-cycle
import { useDayjs } from '~/composables/utilities'
import { TOKEN } from '~/constants/cookies'
import { isString } from '~/universals/value'

const useTokenStore = defineStore('metadata-token', () => {
  const { dayjs } = useDayjs()
  const token = ref<string | undefined>()

  onBeforeMount(() => {
    const cookie = useCookie(TOKEN)
    token.value = cookie.value ?? ''
  })

  function setToken(value: string | undefined, timestamp?: number | null): boolean {
    if (isString(value)) {
      if (timestamp) {
        const time = dayjs.unix(timestamp).toDate().toUTCString()
        document.cookie = `${TOKEN}=${value}; expires=${time}; SameSite=Strict; Secure`
      }
      token.value = value
      return true
    }

    return false
  }

  function $reset() {
    token.value = undefined
  }

  return {
    $reset,
    setToken,
    token: computed(() => token.value),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTokenStore, import.meta.hot))
}

export default useTokenStore
