import request from '@/utils/request';

export async function getDataByUserId(id) {
  return request.get('/api/data/' + id);
}

export async function getDataListByUserId(id) {
  return request.get('/api/data/plant/' + id);
}
