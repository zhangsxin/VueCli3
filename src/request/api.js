import request from '@/request/http.js'

export function getList (data) {
  return request({
    url: '/service/get-list',
    method: 'post',
    params: data
  })
}
