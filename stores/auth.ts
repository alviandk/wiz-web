import type { IResultLogin, IResultMyProfile } from '~/server/types/auth'

// const headers = { 'Content-Type': 'text/plain' }
type IBodyLogin = { email: string; password: string }

export const useAuthStore = defineStore('auth', () => {
  const myProfile = ref<IResultMyProfile['data']>()
  const menu = ref<IResultMyProfile['menu']>([])

  function setMyProfile(param: IResultMyProfile['data']) {
    myProfile.value = param
  }
  function setMenu(param: IResultMyProfile['menu']) {
    if (isArray(param)) {
      menu.value = param
    }
  }

  function fetchLoginAdmin(param: IBodyLogin) {
    return $fetch<string | IResultLogin>('/api/auth/admin/signin', {
      method: 'POST',
      // headers,
      body: param,
      onRequestError({ error }) {
        throw new Error(error.message)
      },
      onResponseError({ response }) {
        throw new Error(response._data?.message)
      },
    })
  }

  function fetchMyProfileAdmin(options?: import('ofetch').FetchOptions) {
    return $fetch<string>(`/api/auth/admin/profile`, {
      ...options,
      method: 'GET',
      onRequestError({ error }) {
        throw new Error(error.message)
      },
      onResponseError({ response }) {
        throw new Error(response._data?.message)
      },
    })
  }

  return {
    myProfile,
    setMyProfile,
    setMenu,

    fetchLoginAdmin,
    fetchMyProfileAdmin,
  }
})

export default { useAuthStore }
