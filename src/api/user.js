import request from './request'

export function getUserListByTags(data) {
  return request.get('/user/searchUserByTagNames', {
    params: data
  })
}