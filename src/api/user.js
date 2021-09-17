import request from '@/utils/request';

export async function createUser(param) {
  return request.post('/api/user', param);
}

export async function createAdmin(param) {
  return request.post('/api/admin', param);
}
