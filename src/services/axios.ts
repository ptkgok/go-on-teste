import axios from 'axios'
import { NextPageContext } from 'next'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
  const { '@gok/token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://api-go-on.herokuapp.com'
  })

  api.interceptors.request.use(config => {
    console.log(config)
    return config
  })

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  return api
}

export function getAPIClient2(ctx?: NextPageContext) {
  const { '@gok/token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
    // baseURL: 'https://api-go-on.herokuapp.com'
  })

  api.interceptors.request.use(config => {
    console.log(config)

    return config
  })

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  return api
}
