import { AxiosResponse, default as http } from 'axios';
import axios from '../../config/api.config';
import { LoginPayload } from './auth.interface';
import { ResponseAPI } from '../../models/response-api.model';
import { LoginModel, User } from '../../models/login.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginService = async (
  payload: LoginPayload,
): Promise<AxiosResponse<ResponseAPI<LoginModel>, any>> => {
  return await axios.post('/api/v1/authentication/login', payload);
};

export const refreshTokenService = async () => {
  const auth = JSON.parse((await AsyncStorage.getItem('auth')) || '{}');
  try {
    const response = await http.get(
      'http://10.0.2.2:3000/api/v1/authentication/refresh-token',
      {
        headers: {
          Authorization: `Bearer ${auth.refresh_token}`,
        },
      },
    );

    const { access_token, refresh_token } = response.data.data;

    if (!access_token || !refresh_token) {
      await AsyncStorage.removeItem('auth');
    }

    await AsyncStorage.setItem(
      'auth',
      JSON.stringify({
        access_token,
        refresh_token,
      }),
    );

    return access_token;
  } catch (error) {
    // TODO: Handle 401 error

    await AsyncStorage.removeItem('auth');
  }
};

export const logoutService = async () => {
  const response = await axios.get('/api/v1/authentication/logout');

  await AsyncStorage.removeItem('auth');

  return response.data;
};

export const profileService = async () => {
  const response: AxiosResponse<ResponseAPI<User>, any> = await axios.get(
    '/api/v1/profile',
  );

  return response.data.data;
};
