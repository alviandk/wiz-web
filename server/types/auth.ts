import type { BE } from '~/server/shared.types'

type IPermission = {
  id: string
  name: string
  display_name: string
  description: string
}

type IMenu = {
  id: string
  name: string
  link: null | string
  icon: string
  permission: IPermission[]
  subItems: IMenu[] | null
}
type MappedMenuGroup = {
  id: string
  name: string
  link: string
  icon: string
  permission: IPermission[]
  subItems: MappedMenuGroup[]
}
export function mapMenu(data: IMenu[]) {
  return data.map((item) => {
    const mappedItem: MappedMenuGroup = {
      id: item.id,
      name: item.name,
      link: item.link ?? '',
      icon: item.icon,
      permission: [],
      subItems: [],
    }

    if (item.subItems && item.subItems.length > 0) {
      mappedItem.subItems = mapMenu(item.subItems)
    }

    return mappedItem
  })
}

export type IResponseLogin = BE.Response<{ expiration_at: string }>
export function handleResponseLogin(response: IResponseLogin) {
  const oData = objectData(response)

  return {
    status: oData.getNumber('status'),
    error: response.error,
    message: oData.getString('message'),
    data: {
      expirationAt: oData.getString('data.expiration_at'),
    },
  }
}
export type IResultLogin = ReturnType<typeof handleResponseLogin>

export type IResponseMyProfile = BE.Response<{
  user: {
    id: number
    username: string
    name: string
    email: string
    phone_no: string
    role: string
  }
  menu: IMenu[]
}>
export function getMenu(menu: IMenu[]) {
  const temp: string[] = []

  function map(link: string, data: IMenu[]) {
    data.forEach((item) => {
      temp.push(link + item.link)

      if (item.subItems && item.subItems.length > 0) {
        map(link + item.link, item.subItems)
      }
    })
  }

  map('', menu)

  return temp.filter(Boolean)
}
export function getResponseMyProfile(response: IResponseMyProfile) {
  const oData = objectData(response)
  const menu = oData.getArray<IMenu>('data.menu')

  return {
    status: oData.getInteger('status'),
    data: {
      id: oData.getString('data.user.id'),
      username: oData.getString('data.user.username'),
      name: oData.getString('data.user.name'),
      email: oData.getString('data.user.email'),
      phoneNo: oData.getString('data.user.phone_no'),
      role: oData.getString('data.user.role'),
      path: getMenu(menu),
    },
    menu: mapMenu(menu),
  }
}
export type IResultMyProfile = ReturnType<typeof getResponseMyProfile>
