import axios from 'axios'
import { getToken } from './auth'

export const BASE_URL = 'http://localhost:8080'

// export const BASE_URL = "";
const headers = { 'content-type': 'application/json' }
const INSTANCE = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers,
})
INSTANCE.interceptors.request.use(
  config => {
    const token = getToken()
    const copyConfig = config
    copyConfig.headers.authorization = token

    return copyConfig
  }, error => {
    // do something with request error
    console.log(error) // for debug

    return Promise.reject(error)
  },
)

// "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWFuZyIsImV4cCI6MTU4NzIyNDM0NSwiaWF0IjoxNTg3MjE3MTQ1fQ.GvHmecWhnJSQp5pq9ccGLOok1DmYle55u3k7ZcJSvyJJAfb9BZushjvKa6vEdwLQvcmIBpKu0QrINUZIkvD_rQ"
function request(url, params, method) {
  return new Promise((resolve, reject) => {
    let data = {}
    let copyUrl = url

    if (method === 'post' || method === 'put') {
      data = { data: params }
    }
    if (method === 'get' || method === 'delete') {
      data = { params }
    }
    copyUrl = BASE_URL + url
    INSTANCE({ copyUrl, method, ...data }).then(res => {
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
