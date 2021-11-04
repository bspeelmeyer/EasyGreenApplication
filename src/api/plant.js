import request from '@/utils/request';

export async function getPlant(id) {
  return request.get('/api/plant/' + id);
}

export async function getAllPlant(param) {
  return request.get('/api/plant', param);
}

export async function deletePlantBySelect(id) {
  return request.post('/api/plant/delete-plant/' + id);
}

export async function updatePlant(param) {
  return request.put('/api/plant', param)
}

export async function createPlant(param) {
  return request.post('/api/plant', param);
}
