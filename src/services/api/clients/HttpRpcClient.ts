import { btoa } from 'isomorphic-base64'
import { ApiRpcError, ApiServerError } from '../errors'

import { IRpcClient } from '.'

import GET from './method/get'
import POST from './method/post'
import FORM from './method/form'

import store from '@/store'

interface IConstructorParams {
  endpoint: HttpRpcClient['endpoint'],
  user?: HttpRpcClient['user']
  password?: HttpRpcClient['password']
}

export default class HttpRpcClient implements IRpcClient {
  endpoint: string
  user?: string
  password?: string
  GET: any
  POST: any
  PUT: any
  FORM: any
  accessToken?: string

  constructor ({ endpoint, password, user }: IConstructorParams) {
    this.GET = GET
    this.POST = POST
    this.PUT = POST
    this.FORM = FORM
    this.endpoint = endpoint
    this.user = user
    this.password = password
  }

  setAccessToken (token: string) {
    this.accessToken = token
  }

  call = async (method: string, params: any, type: string = 'POST') => {
    const response = await this[type]({
      type,
      params,
      method,
      endpoint: this.endpoint,
      headers: this.headers
    })

    // TODO: remove check 401 status
    if (!response.ok && response.status !== 401) {
      throw new ApiServerError({
        method,
        params,
        status: response.status
      })
    }

    const rpcResponse: any = await response.json()

    // TODO: refactor condition
    if (!response.ok && rpcResponse.message === 'Expired token.') {
      await store.dispatch('auth/fetchRefreshToken')

      this.call(method, params, type)
    }

    if (rpcResponse.error || !response.ok) {
      const code = rpcResponse?.error?.code ?? response.status
      const data = rpcResponse?.error?.data ?? rpcResponse

      throw new ApiRpcError({
        method,
        params,
        code,
        data: {
          code,
          ...new Object(data)
        }
      })
    }

    return rpcResponse
  }

  private get headers () {
    const headers: Record<string, string> = {
      'Accept-Encoding': 'gzip'
    }

    if (this.user) {
      headers.Authorization = 'Basic ' + btoa(`${this.user}:${this.password}`)
    }

    if (this.accessToken) {
      headers.Authorization2 = `Bearer ${this.accessToken}`
    }

    return headers
  }
}
