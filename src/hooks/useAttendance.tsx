import React, {useEffect} from 'react';
import {AttendanceSettingModel} from '../models/attendance-setting.model';
import {
  getAllPresence,
  getPresenceSetting,
  getPresenceToday,
} from '../services/attendance/attendance.service';
import {
  AttendanceModel,
  AttendanceModelResponse,
} from '../models/attendance.model';

const useAttendance = () => {
  const [attendanceSetting, setAttendanceSetting] =
    React.useState<AttendanceSettingModel | null>(null);

  const [attendanceToday, setAttendanceToday] =
    React.useState<AttendanceModel | null>(null);

  const [attendances, setAttendances] = React.useState<
    AttendanceModelResponse[]
  >([]);

  const fetchAttendanceSetting = async () => {
    try {
      const result = await getPresenceSetting();
      if (result) {
        setAttendanceSetting(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAttendanceToday = async () => {
    try {
      const result = await getPresenceToday();
      if (result) {
        setAttendanceToday(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAttendances = async () => {
    try {
      const result = await getAllPresence();
      if (result) {
        setAttendances(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAttendanceSetting();
    fetchAttendanceToday();
    fetchAttendances();
  }, []);

  return {
    attendanceSetting,
    attendanceToday,
    attendances,
    fetchAttendanceSetting,
    fetchAttendanceToday,
    fetchAttendances,
  };
};

export default useAttendance;
