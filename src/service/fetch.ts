
type Method = 'GET' | 'POST' | 'PUT'
interface IFetchOptions {
  url: string,
  method: Method,
  data?: BodyInit,
  headers?: HeadersInit 
}

interface IResponse {
  code: number,
  message: string,
  data: object
}

const CONFIG = {
  baseUrl: 'http://localhost:2008/'
}
const qsStringify = (params?:object):string => {
  if(!params) {
    return ''
  }
  return Object.keys(params).reduce((queryString, key) => {
    return queryString += `${ queryString === '?' ? '' : '&' }${ key }=${ params[key] }`
  }, '?')
}

const Fetch = (options:IFetchOptions): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    fetch(`${ CONFIG.baseUrl }${ options.url }`, {
      method: options.method,
      body: options.data,
      headers: options.headers || {}
    }).then(response => {
      if(response.status === 200) {
        response.json().then(data => {
          if(data.code === 0) {
            return resolve(data as IResponse)
          }
          reject(data)
        })
        return
      }
    })
  })
}

export const POST = (url:string, data?: object) => {
  return Fetch({
    url,
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
}

export const GET = (url:string, params?: object) => {
  return Fetch({
    url: `${ url }${ qsStringify(params) }`,
    method: 'GET'
  })
}

export default Fetch