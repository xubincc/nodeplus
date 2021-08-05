import axios from 'axios'
import { message } from 'antd';
import baseUrl from '../constant'
// import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: baseUrl,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // console.log('request res', response)
    return res
  },
  error => {
    console.log('err' + error) // for debug
    message.error(error.message);
    return Promise.reject(error)
  }
)

export default service
