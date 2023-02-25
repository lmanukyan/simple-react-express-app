import axios from 'axios';
import { resetStoredUser } from './utils'

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  timeout: 1000,
  validateStatus: function (status) {
    return status < 500;
  },
});

instance.interceptors.response.use(function (response) {
  if (response.status === 401) {
    resetStoredUser();
  }
  return response;
});

export default instance;