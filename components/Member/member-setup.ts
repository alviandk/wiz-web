import { object, string } from 'yup'

const keyLocalization = 'validation.requiredFreeText'

export const useMember = () => {
  const { t } = useI18n()

  const isDisable = ref(false)
  const isModalFilter = ref(false)
  const isModalApprove = ref(false)
  const isModalReject = ref(false)

  function onToggleModalFilter() {
    isModalFilter.value = !isModalFilter.value
  }

  function onToggleModalApprove() {
    isModalApprove.value = !isModalApprove.value
  }

  function onToggleModalReject() {
    isModalReject.value = !isModalReject.value
  }

  function onBackHistory() {
    // memberStore.setIsShowCompleteHistory(false)
    // memberStore.setMemberSelectedHistory('')
  }

  const validationSchema = toTypedSchema(
    object({
      reason: object().required(t(keyLocalization, { label: t('label.reasonRejected') })),
      rejectReason: string().required(t(keyLocalization, { label: t('label.reasonRejected') })),
    }),
  )
  const { handleSubmit, meta, values } = useForm({ validationSchema })

  watch(meta, () => {
    if (!meta.value.pending) {
      isDisable.value = !meta.value.valid
    }
  })

  const onSubmit = handleSubmit((form) => {
    console.log('form submit', form) // eslint-disable-line
  })

  return {
    values,
    isModalFilter,
    onToggleModalFilter,

    isModalApprove,
    onToggleModalApprove,

    isModalReject,
    onToggleModalReject,

    isDisable,
    onSubmit,
    onBackHistory,
  }
}

export default { useMember }
