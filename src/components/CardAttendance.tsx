import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useModal from '../hooks/useModal';
import { AttendanceModelResponse } from '../models/attendance.model';
import AttendanceBadge from './AttendanceBadge';
import FileModal from './FileModal';

interface CardAttendanceProps {
  attendance: AttendanceModelResponse;
}

const CardAttendance = ({ attendance }: CardAttendanceProps) => {
  const { showModal, setShowModal } = useModal();
  return (
    <>
      <View style={style.boxHistory}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={[style.baseTextDay, style.primaryColor]}>
              {attendance?.date_day},
            </Text>
            <Text style={[style.baseTextDate, style.primaryColor]}>
              {attendance?.date}
            </Text>
          </View>
          <AttendanceBadge status={attendance?.type as any} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={style.keteranganJamAbsensi}>
            <Text style={style.descJam}>Jam Masuk</Text>
            <Text style={[style.jam, style.primaryColor]}>
              {attendance?.time_sign_in}
            </Text>
          </View>
          <View style={style.keteranganJamAbsensi}>
            <Text style={style.descJam}>Jam Pulang</Text>
            <Text style={[style.jam, style.primaryColor]}>
              {attendance?.time_sign_out ?? '-'}
            </Text>
          </View>
          <View style={style.keteranganAbsensi}>
            <Text style={style.descJam}>Keterangan</Text>
            {attendance?.file_absence && (
              <TouchableOpacity
                onPress={() => {
                  setShowModal(true);
                }}>
                <Text style={[style.fileButton, style.primaryColor]}>File</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <FileModal
        attendance={attendance}
        isVisible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};

export default CardAttendance;

const style = StyleSheet.create({
  primaryColor: {
    color: '#0A2E51',
  },
  whiteColor: {
    color: 'white',
  },
  blackColor: {
    color: '#191C1F',
  },
  redColor: {
    color: '#F53939',
  },
  orangeColor: {
    color: '#F97316',
  },
  boxPilHadir: {
    backgroundColor: '#D0C5FF',
  },
  boxPilTidakHadir: {
    backgroundColor: '#fdcece',
  },
  boxPilTerlambat: {
    backgroundColor: '#fedcc5',
  },
  boxHistory: {
    marginTop: 10,
    marginHorizontal: 15,
    height: 138,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  baseTextDay: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    opacity: 0.6,
  },
  baseTextDate: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginTop: -6,
  },
  boxPil: {
    marginLeft: 'auto',
    height: 26,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  boxPilStatus: {
    borderWidth: 1.5,
    borderColor: '#0A2E51',
    marginRight: 'auto',
    height: 30,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  textPil: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  textTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  textSubTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  keteranganJamAbsensi: {
    marginTop: 10,
    flex: 1,
  },
  keteranganAbsensi: {
    marginTop: 10,
    marginLeft: 'auto',
    alignItems: 'center',
  },
  descJam: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  jam: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginTop: -5,
  },
  fileButton: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
