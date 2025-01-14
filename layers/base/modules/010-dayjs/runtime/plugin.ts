import dayjsEsm from '../custom/dayjs-esm'

export default defineNuxtPlugin(() => ({
  provide: {
    dayjs: dayjsEsm,
    dayjsTz: dayjsEsm.tz,
  },
}))
