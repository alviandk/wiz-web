import useFlashStore from '~/stores/metadata/flash'

export default function useFlashData() {
  const { hasFlash, setFlash, getFlash } = useFlashStore()

  return {
    hasFlash,
    setFlash,
    getFlash,
  }
}
