import axios from 'axios'
console.log(axios)
const service = axios.create({
    baseURl: process.env.VUE_APP_BASE_API,
    timeout: 30000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    transformRequest: [function(data) {
        let ret = ''
        for (const it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
    }]
})

// request 拦截器
service.interceptors.request.use(
    config => {
        // config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
      }
)

// response 拦截器
service.interceptors.response.use(
    response => {
      const res = response.data
      return res
    },
    error => {
      console.log('err' + error) // for debug     
      return Promise.reject(error)
    }
  )
  
  export default service