import { object, string } from 'yup'
import { LOGIN_ROLE } from '~/constants/cookies'

// eslint-disable-next-line import/no-named-as-default
import useToasts from './utilities'

const keyLocalization = 'validation.requiredFreeText'
const keyPassword = 'label.password'

const useCookieData = (name: string) =>
  useCookie(name, {
    secure: true,
    sameSite: 'strict',
  })

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

  const isLoadingLoginAdmin = ref(false)
  const isDisableAdmin = ref(true)

  const validationSchema = toTypedSchema(
    object({
      username: string().required(t(keyLocalization, { label: t('label.username') })),
      password: string().required(t(keyLocalization, { label: t(keyPassword) })),
    }),
  )
  const { handleSubmit, errors, meta } = useForm({ validationSchema })

  watch(meta, () => {
    if (!meta.value.pending) {
      isDisableAdmin.value = !meta.value.valid
    }
  })

  const onSubmitLoginAdmin = handleSubmit((form) => {
    console.log('form submit', form) // eslint-disable-line
    // sementara, hilangkan navigasi ketika sudah integrasi karna sudah menggunakan middleware`

    useCookieData(LOGIN_ROLE).value = 'admin'
    navigateTo('/dashboard')
  })

  return {
    errorAdmin: errors,
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
