import request from '../../utils/request'

// 获取统计
export function stats(data) {
  return request({
    url: `/stats`,
    method: 'get',
  })
}

// 联系我们
export function contactUs(data) {
  return request({
    url: `/contact_us`,
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}




