import axios from 'axios'
import {BrowserRouter} from 'react-router-dom'

const http = axios.create({
  baseURL: '/api/v1/',
})

// Intercept http to redirect to login on unauthorized response
http.interceptors.response.use(res => res, err => {
  const location = BrowserRouter.getCurrentLocation()
  if (err.response && err.response.status === 403) {
    return BrowserRouter.push(`/login?redirect=${encodeURIComponent(location.pathname+location.search+location.hash)}`)
  }

  return Promise.reject(err)
})

export default http
