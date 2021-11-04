import axios from 'axios'
import { getToken } from './auth'

export const BASE_URL = 'http://13.211.62.206/:8088'

const headers = { 'content-type': 'application/json' }
const INSTANCE = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers,
})

INSTANCE.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.authorization = token
    }
    return config
  }, error => {
    // do something with request error
    console.log(error) // for debug

    return Promise.reject(error)
  },
)

function request(url, params, method) {
  return new Promise((resolve, reject) => {
    let data = {}

    if (method === 'post' || method === 'put') {
      data = { data: params }
    }
    if (method === 'get' || method === 'delete') {
      data = { params }
    }
    url = BASE_URL + url
    INSTANCE({ url, method, ...data }).then(res => {
      console.log(res)
      resolve(res.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    }).finally(() => {

    })
  })
}

function get(url, params) {
  return request(url, params, 'get')
}

function put(url, params) {
  return request(url, params, 'put')
}

function del(url, params) {
  return request(url, params, 'delete')
}

function post(url, params) {
  return request(url, params, 'post')
}

function upload(url, formData, msg, method) {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      timeout: 10000,
    },
  }
  formData.append('data', JSON.stringify(msg))
  if (method === 'post') {
    return axios.post(BASE_URL + url, formData, config).then(res => {
      console.log(res)

      return res.data.data
    }).catch(err => {
      console.log(err)
    })
  }

  return axios.put(BASE_URL + url, formData, config).then(res => {
    console.log(res)

    return res.data.data
  }).catch(err => {
    console.log(err)
  })
}

export default {
  get, upload, post, del, put,
}
