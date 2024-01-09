import {AxiosResponse} from 'axios';
import {ResponseAPI} from '../../models/response-api.model';
import axios from '../../config/api.config';
import {TaskModel} from '../../models/task.model';
import {CommentPayload} from './task.interface';

export const getAllTaskService = async () => {
  const response: AxiosResponse<
    ResponseAPI<TaskModel[]>,
    any
  > = await axios.get('/api/v1/tasks');

  return response.data.data;
};

export const getTaskByIdService = async (taskId: string) => {
  const response: AxiosResponse<ResponseAPI<TaskModel>, any> = await axios.get(
    `/api/v1/tasks/${taskId}`,
  );

  return response.data.data;
};

export const toggleTodoTaskService = async (taskId: string, todoId: string) => {
  const response: AxiosResponse<ResponseAPI<any>, any> = await axios.get(
    `/api/v1/tasks/${taskId}/todo/${todoId}/toggle`,
  );

  return response.data;
};

export const commentAPostService = async (
  taskId: number,
  payload: CommentPayload,
) => {
  const response: AxiosResponse<ResponseAPI<any>, any> = await axios.post(
    `/api/v1/tasks/${taskId}/comment`,
    payload,
  );

  return response.data;
};
