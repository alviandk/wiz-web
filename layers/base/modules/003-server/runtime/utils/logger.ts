import { log, error } from 'node:console'

const runByContext = (context: string, logger: Function, data: any[]) => {
  const contexts = useRuntimeConfig()?.debug?.contexts ?? ''

  if (typeof contexts === 'string' && contexts.length > 0) {
    const contextList = contexts.split(',')

    if (contextList.includes(context)) {
      logger.apply(logger, [`${context.toUpperCase()}>`].concat(data))
    }
  }
}

export const __debug = (context: string, ...data: any[]) => runByContext(context, log, data)
export const __stdout = log
export const __stderr = error
