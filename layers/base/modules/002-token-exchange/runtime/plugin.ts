export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:setup', () => {
    useTokenData().initToken()
  })
})
