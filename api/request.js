import axios from 'axios'

// 新建一个实例
const serviceAxios = axios.create({})

// 拦截器啥的需要根据具体业务来写
// interceptors.request
// interceptors.response

export default serviceAxios
