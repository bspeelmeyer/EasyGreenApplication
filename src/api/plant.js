import request from '@/utils/request';

export async function getPlant(id) {
  return request.get('/api/plant/' + id);
}
