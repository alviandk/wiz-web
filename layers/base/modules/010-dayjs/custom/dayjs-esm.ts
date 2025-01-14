import dayjs from 'dayjs/esm'

// timezone related
import dayjsPluginUtc from 'dayjs/esm/plugin/utc'
import dayjsPluginTimeZone from 'dayjs/esm/plugin/timezone'

// locales related
import dayjsPluginLocaleDate from 'dayjs/esm/plugin/localeData'
import dayjsPluginLocaleFormat from 'dayjs/esm/plugin/localizedFormat'
import dayjsPluginUpdateLocale from 'dayjs/esm/plugin/updateLocale'

// custom
import dayjsCustomPluginHuman from './dayjs-plugin-human'

dayjs.extend(dayjsPluginUtc)
dayjs.extend(dayjsPluginTimeZone)
dayjs.extend(dayjsPluginLocaleDate)
dayjs.extend(dayjsPluginLocaleFormat)
dayjs.extend(dayjsPluginUpdateLocale)
dayjs.extend(dayjsCustomPluginHuman)

export default dayjs
