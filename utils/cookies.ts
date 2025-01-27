export const setToken = (name: string, value: string, expires: number) => {
  const time = useDayjsFn.unix(expires).toDate().toUTCString()
  document.cookie = `${name}=${value}; expires=${time}; SameSite=Strict; Secure`
}

export const getToken = (name: string) => useCookie(name).value

export const deleteToken = (name: string) => {
  useCookie(name).value = undefined
}

export const setIsLogin = (name: string, value: boolean, expires: number) => {
  const time = useDayjsFn.unix(expires).toDate().toUTCString()
  document.cookie = `${name}=${value}; expires=${time}; SameSite=Strict; Secure`
}

export const deleteIsLofin = (name: string) => {
  useCookie(name).value = undefined
}
