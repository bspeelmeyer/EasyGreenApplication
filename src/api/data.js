import request from '@/utils/request';

export async function getDataByUserId(id) {
  return request.get('/api/data/' + id);
}

export async function getDataListByUserId(id) {
  return request.get('/api/data/plant/' + id);
}

export async function deleteSelectedPlant(id) {
  return request.post('/api/data/delete-plant/' + id);
}

export async function getDataById(id) {
  return request.get('/api/data/onePlant/' + id);
}
