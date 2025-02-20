import { object, string } from 'yup'
import { useCounter } from '@vueuse/core'
import { LOGIN_ROLE } from '~/constants/cookies'

import type { IResultLogin } from '~/server/types/auth'

// eslint-disable-next-line import/no-named-as-default
import useToasts from './utilities'

const keyLocalization = 'validation.requiredFreeText'
const keyPassword = 'label.password'
// const keyMaxPass = 'validation.maxPass'

const useCookieData = (name: string) =>
  useCookie(name, {
    secure: true,
    sameSite: 'strict',
  })

export async function fetchMyProfile() {
  const authStore = useAuthStore()
  try {
    const response = await authStore.fetchMyProfileAdmin()
    if (response) {
      const result = response as any
      authStore.setMyProfile(result.data)
      authStore.setMenu(result.menu)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export const useLogin = () => {
  const { t } = useI18n()

  const isLoadingLogin = ref(false)
  const isDisable = ref(true)

  const validationSchema = toTypedSchema(
    object({
      codeDistributor: string().required(t(keyLocalization, { label: t('label.codeDistributor') })),
      username: string().required(t(keyLocalization, { label: t('label.username') })),
      password: string().required(t(keyLocalization, { label: t(keyPassword) })),
    }),
  )
  const { handleSubmit, errors, meta } = useForm({ validationSchema })

  watch(meta, () => {
    if (!meta.value.pending) {
      isDisable.value = !meta.value.valid
    }
  })

  const onSubmitLogin = handleSubmit((form) => {
    console.log('form submit', form) // eslint-disable-line
    // sementara, hilangkan navigasi ketika sudah integrasi karna sudah menggunakan middleware`
    useCookieData(LOGIN_ROLE).value = 'distributor'
    navigateTo('/dashboard')
  })

  return {
    errors,
    isDisable,
    isLoadingLogin,
    onSubmitLogin,
  }
}

export const useLoginAdmin = () => {
  const { t } = useI18n()
  const authStore = useAuthStore()
  const { isString } = useValueCheck()

  const { set } = useCounter(90, { min: 0 }) // count, dec, reset,
  const isLoadingLoginAdmin = ref(false)
  const isDisableAdmin = ref(true)
  const msgErrorAdmin = ref('')

  const validationSchema = toTypedSchema(
    object({
      email: string()
        .required(t(keyLocalization, { label: t('label.email') }))
        .email(t('validation.email', { label: 'nama@domain.com' })),
      password: string()
        // .max(16, t(keyMaxPass, { label: t(keyPassword) }))
        // .matches(/^(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[~!@#$%^&*])\S{8,}$/)
        .required(t(keyLocalization, { label: t(keyPassword) })),
    }),
  )
  const { handleSubmit, errors, meta } = useForm({ validationSchema })

  watch(meta, () => {
    if (!meta.value.pending) {
      isDisableAdmin.value = !meta.value.valid
    }
  })

  const onSubmitLoginAdmin = handleSubmit(async (form) => {
    console.log('form submit', form) // eslint-disable-line

    // sementara, hilangkan navigasi ketika sudah integrasi karna sudah menggunakan middleware`
    navigateTo('/dashboard')
    useCookieData(LOGIN_ROLE).value = 'admin'

    try {
      isLoadingLoginAdmin.value = true
      const response = await authStore.fetchLoginAdmin({
        email: form.email,
        password: form.password,
      })
      const result = response as IResultLogin
      const seconds = useDayjs(result.data.expirationAt).diff(useDayjs(), 'second')
      set(seconds)
      msgErrorAdmin.value = ''
      useCookieData(LOGIN_ROLE).value = 'admin'
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error(error)

      msgErrorAdmin.value = isString(error.message) ? error.message : ''
    } finally {
      isLoadingLoginAdmin.value = false
    }
  })

  return {
    errorAdmin: errors,
    msgErrorAdmin,
    isDisableAdmin,
    isLoadingLoginAdmin,
    onSubmitLoginAdmin,
  }
}

export const useForgotPassword = () => {
  const { t } = useI18n()
  const toast = useToasts()

  const isLoadingForgot = ref(false)
  const isDisable = ref(true)

  const validationSchema = toTypedSchema(
    object({
      codeDistributor: string().required(t(keyLocalization, { label: t('label.codeDistributor') })),
      email: string()
        .required(t(keyLocalization, { label: t('label.email') }))
        .email(t('validation.email', { label: 'nama@domain.com' })),
    }),
  )
  const { handleSubmit, errors, meta } = useForm({ validationSchema })

  watch(meta, () => {
    if (!meta.value.pending) {
      isDisable.value = !meta.value.valid
    }
  })

  const onSubmitForgot = handleSubmit((form) => {
    console.log('form forgot password', form) // eslint-disable-line
    toast.error({ message: 'Email yang Anda masukkan tidak terdaftar' })
    toast.success({ message: 'Berhasil' })
  })

  return {
    errors,
    isDisable,
    isLoadingForgot,
    onSubmitForgot,
  }
}

export const useForgotPasswordAdmin = () => {
  const { t } = useI18n()
  const toast = useToasts()

  const isLoadingForgotAdmin = ref(false)
  const isDisableAdmin = ref(true)

  const validationSchema = toTypedSchema(
    object({
      email: string()
        .required(t(keyLocalization, { label: t('label.email') }))
        .email(t('validation.email', { label: 'nama@domain.com' })),
    }),
  )
  const { handleSubmit, errors, meta } = useForm({ validationSchema })

  watch(meta, () => {
    if (!meta.value.pending) {
      isDisableAdmin.value = !meta.value.valid
    }
  })

  const onSubmitForgotAdmin = handleSubmit((form) => {
    console.log('form forgot password', form) // eslint-disable-line
    toast.error({ message: 'Email yang Anda masukkan tidak terdaftar' })
    toast.success({ message: 'Berhasil' })
  })

  return {
    errorAdmin: errors,
    isDisableAdmin,
    isLoadingForgotAdmin,
    onSubmitForgotAdmin,
  }
}
