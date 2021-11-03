import request from '@/utils/request';

export async function getAllOrganization(param) {
  return request.get('/api/organization', param);
}
