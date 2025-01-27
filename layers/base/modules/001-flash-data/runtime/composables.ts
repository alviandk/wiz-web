/* eslint-disable import/prefer-default-export */
import useFlashStore from './store'

export function useFlashData() {
  const { hasFlash, setFlash, getFlash } = useFlashStore()

  return {
    hasFlash,
    setFlash,
    getFlash,
  }
}
