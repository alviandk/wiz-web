import { object, string } from 'yup'

const keyLocalization = 'validation.requiredFreeText'
const keyPassword = 'label.password'

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
  })

  return {
    errors,
    isDisable,
    isLoadingLogin,
    onSubmitLogin,
  }
}

export const useForgotPassword = () => {
  const { t } = useI18n()

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
  })

  return {
    errors,
    isDisable,
    isLoadingForgot,
    onSubmitForgot,
  }
}
