import React from 'react';
import {
  Dimensions,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AttendanceModelResponse } from '../models/attendance.model';

const FileModal = ({
  isVisible,
  onRequestClose,
  attendance,
}: {
  isVisible: boolean;
  onRequestClose: () => void;
  attendance: AttendanceModelResponse;
}) => {
  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={isVisible}
        style={style.modalParent}
        onRequestClose={onRequestClose}>
        <View style={style.centeredView}>
          <Pressable style={style.bg} onPress={onRequestClose} />
          <View style={style.modalView}>
            <Text style={[style.modalTitleText, style.blackColor]}>
              Tidak Hadir
            </Text>
            <Text style={style.textTitle}>Status</Text>
            <View style={style.boxPilStatus}>
              <Text style={[style.textPil, style.primaryColor]}>
                {attendance.absence_type === 'sick' ? 'Sakit' : 'Izin'}
              </Text>
            </View>
            <Text style={style.textTitle}>Tanggal</Text>
            <Text style={style.textSubTitle}>
              {attendance.date_day}, {attendance.date}
            </Text>
            <Text style={style.textTitle}>File Bukti</Text>
            <Pressable
              style={[style.button]}
              onPress={async () => {
                await Linking.openURL(
                  `http://10.0.2.2:3000/${attendance.file_absence}`,
                );
              }}>
              <Text style={style.textStyle}>File</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FileModal;

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const style = StyleSheet.create({
  primaryColor: {
    color: '#0A2E51',
  },
  blackColor: {
    color: '#191C1F',
  },
  button: {
    backgroundColor: '#0A2E51',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
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
  modalParent: {
    width: width,
    height: height,
  },
  centeredView: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  modalView: {
    height: 380,
    width: 328,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
});
