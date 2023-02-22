import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  timeout: 1000,
  validateStatus: function (status) {
    return status < 500;
  },
});

export default instance;