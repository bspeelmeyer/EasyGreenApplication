import request from '@/utils/request';

export async function createUser(param) {
  return request.post('/api/user', param);
}

export async function createAdmin(param) {
  return request.post('/api/admin', param);
}

export async function getUserInfo(id) {
  return request.get('/api/user/' + id)
}

export async function getAdminInfo(id) {
  return request.get('/api/admin/' + id)
}

export async function updateUserInfo(param) {
  return request.put('/api/user', param)
}

export async function getAllUser(param) {
  return request.get('/api/user', param)
}

export async function updateUserPassword(param) {
  return request.put('/api/user/update', param)
}

