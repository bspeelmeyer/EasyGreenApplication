import request from '@/utils/request';

export async function getAllOrganization(param) {
  return request.get('/api/organization', param);
}

export async function deleteOrganizationBySelect(id) {
  return request.post('/api/organization/delete/' + id);
}

export async function updateOrganization(param) {
  return request.put('/api/organization', param)
}

export async function createOrganization(param) {
  return request.post('/api/organization', param);
}

