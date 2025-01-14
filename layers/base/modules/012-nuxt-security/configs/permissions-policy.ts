import type { PermissionsPolicyValue } from 'nuxt-security'

export default {
  accelerometer: [],
  autoplay: [],
  camera: [],
  'display-capture': [],
  'encrypted-media': [],
  fullscreen: [],
  gamepad: [],
  geolocation: [],
  gyroscope: [],
  microphone: [],
  magnetometer: [],
  midi: [],
  payment: [],
  'picture-in-picture': ['*'],
  'publickey-credentials-get': [],
  'screen-wake-lock': [],
  usb: [],
  'web-share': ['*'],
  'xr-spatial-tracking': [],
} as PermissionsPolicyValue
