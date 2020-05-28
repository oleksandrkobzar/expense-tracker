import axios from 'axios'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : ''

const instance = axios.create({
  baseURL: url
})

export default instance