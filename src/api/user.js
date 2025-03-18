import request from './request'

export function register(data) {
  return request.post('/user/register', {
    ...data
  })
}

export function login(data) {
  return request.post('/user/login', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function getUserInfo() {
  return request.get('/user/getUserInfo')
}

export function logout() {
  return request.get('/user/logout')
}

export function getUserListByTags(data) {
  return request.get('/user/searchUserByTagNames', {
    params: data
  })
}

export function updateUser(data) {
  return request.post('/user/update', {
    ...data
  })
}