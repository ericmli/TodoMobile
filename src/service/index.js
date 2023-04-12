import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.135.141.25:3000/',
  timeout: 5000
})

export default api
