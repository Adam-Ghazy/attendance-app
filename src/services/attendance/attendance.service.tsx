import {AxiosResponse} from 'axios';
import axios from '../../config/api.config';
import {ResponseAPI} from '../../models/response-api.model';
import {AttendanceSettingModel} from '../../models/attendance-setting.model';
import {
  AttendanceModel,
  AttendanceModelResponse,
} from '../../models/attendance.model';
import {IAttendancePayload} from './attendance.interface';
import {formatToFormData} from '../../utils/formatToFormData.utils';

export const getPresenceSetting = async () => {
  const response: AxiosResponse<
    ResponseAPI<AttendanceSettingModel>,
    any
  > = await axios.get('/api/v1/attendances/setting');

  return response.data.data;
};

export const getPresenceToday = async () => {
  const response: AxiosResponse<
    ResponseAPI<AttendanceModel>,
    any
  > = await axios.get('/api/v1/attendances/today');

  return response.data.data;
};

export const getAllPresence = async () => {
  const response: AxiosResponse<
    ResponseAPI<AttendanceModelResponse[]>,
    any
  > = await axios.get('/api/v1/attendances');

  return response.data.data;
};

export const toPresenceToday = async (
  payload: IAttendancePayload,
  file: {
    uri: string;
    type: string;
    name: string;
  } | null,
) => {
  const formData = formatToFormData(payload);

  if (file) {
    formData.append('file', file);
  }

  const response: AxiosResponse<
    ResponseAPI<AttendanceModel>,
    any
  > = await axios.post('/api/v1/attendances/presence', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.data;
};
