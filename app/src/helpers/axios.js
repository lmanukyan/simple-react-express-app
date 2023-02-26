import axios from 'axios';
import { store } from '../store';
import { appRouter } from '../router';
import { resetUser } from '../store/userSlice';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  validateStatus: function (status) {
    return status < 500;
  },
});

instance.interceptors.response.use(function (response) {
  if (response.status === 401) {
    store.dispatch(resetUser());
    appRouter.navigate('/');
  }
  return response;
});

export default instance;