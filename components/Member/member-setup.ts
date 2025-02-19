import { object, string } from 'yup'
import { useMemberStore } from '~/stores/member'

const keyLocalization = 'validation.requiredFreeText'

export const useMember = () => {
  const { t } = useI18n()

  const memberStore = useMemberStore()
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

  function goToMemberCompleteHistory(name: string) {
    memberStore.setMemberSelectedHistory(name)
    memberStore.setIsShowCompleteHistory(true)
  }

  function onBackHistory() {
    memberStore.setIsShowCompleteHistory(false)
    memberStore.setMemberSelectedHistory('')
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
    goToMemberCompleteHistory,
    onBackHistory,
  }
}

export default { useMember }
