export const useAuthStore = defineStore('auth', () => {
  // const myProfile = ref<IResultMyProfile['data']>()
  const myProfile = ref()

  return {
    myProfile,
  }
})

export default { useAuthStore }
