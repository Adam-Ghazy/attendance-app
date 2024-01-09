import { default as http } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { refreshTokenService } from '../services/auth/auth.service';

const axios = http.create({
  baseURL: 'http://10.0.2.2:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  async config => {
    const auth = JSON.parse((await AsyncStorage.getItem('auth')) || '{}');
    if (auth?.access_token) {
      config.headers.Authorization = `Bearer ${auth.access_token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error.response.data.message);
  },
);

axios.interceptors.response.use(
  async response => response,
  async error => {
    const config = error?.config;
    if (error.response.status === 401 && !config._retry) {
      config._retry = true;

      const access_token = await refreshTokenService();
      axios.defaults.headers.common.Authorization = 'Bearer ' + access_token;
      return axios(config);
    }

    return Promise.reject(error.response.data.message);
  },
);

export default axios;
