export interface AttendanceModel {
  is_present_today: boolean;
  type: string | null;
  presence_type: string | null;
  date: string | null;
  time_sign_in: string | null;
  time_sign_out: string | null;
  file: string | null;
}

export interface AttendanceModelResponse {
  id?: number;
  latitude_in?: number;
  longitude_in?: number;
  latitude_out?: number;
  longitude_out?: number;
  file_absence?: string;
  type?: string;
  absence_type?: string;
  date?: string;
  date_day?: string;
  time_sign_in?: string;
  time_sign_out?: string;
  user: {
    id?: number;
    name?: string;
    avatar?: string;
  };
  work_time?: string;
}
