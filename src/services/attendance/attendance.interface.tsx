export interface IAttendancePayload {
  latitude_in?: number;
  longitude_in?: number;
  latitude_out?: number;
  longitude_out?: number;
  file_absence?: {
    uri: string;
    type: string;
    name: string;
  } | null;
  absence_type?: string | null;
}
