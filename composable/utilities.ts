import { useToast as useToastPrime } from 'primevue/usetoast'

export const useToasts = () => {
  const toast = useToastPrime()

  function success({ message, delay = 0 }: { message: string; delay?: number }) {
    toast.add({ summary: message, detail: { status: 'success' }, life: delay })
  }

  function error({ message, delay = 0 }: { message: string; delay?: number }) {
    toast.add({ summary: message, detail: { status: 'error' }, life: delay })
  }

  return {
    success,
    error,
  }
}

export default useToasts
