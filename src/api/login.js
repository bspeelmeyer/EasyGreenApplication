import request from '@/utils/request'

const userApi = {
  Login: '/api/auth/login',
  Logout: '/auth/logout',

  // get info
  UserInfo: '/user/info',
}

export default function login(loginParam) {
  return request.post(userApi.Login, loginParam)
}
