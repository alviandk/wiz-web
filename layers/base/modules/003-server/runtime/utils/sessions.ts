import type { H3Event, SessionConfig } from 'h3'
import { ACCESS_TOKEN } from '~/constants/cookies'

export const SESSIONS_ACCESS_TOKEN: SessionConfig = {
  name: ACCESS_TOKEN,
  password: useRuntimeConfig()?.sessions.token,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  },
}

export async function getSessionAuth(event: H3Event) {
  const cookie = getCookie(event, ACCESS_TOKEN)
  const session = cookie ? await getSession(event, SESSIONS_ACCESS_TOKEN) : null
  return session ? (session.data?.token ?? '') : ''
}

export default getSessionAuth
