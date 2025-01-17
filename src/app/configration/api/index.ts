import { makeRequest } from './requestBuilder'

export const API = {
  get: (url:string, body:any, headers:any, bodyparams:any) =>
    makeRequest({
      method: 'get',
      url,
      body,
      headers,
      bodyparams,

    }),
  post: (url:string, body:any, headers:any, bodyparams:any) =>
    makeRequest({
      method: 'post',
      url,
      body,
      headers,
      bodyparams,
    }),
  patch: (url:any, body:any) =>
    makeRequest({
      method: 'patch',
      body,
      url
    }),

  put: (url:any, body:any) =>
    makeRequest({
      method: 'put',
      body,
      url
    }),

  delete: (url:any,body:any) =>
    makeRequest({
      method: 'delete',
      body,
      url,
    })


}