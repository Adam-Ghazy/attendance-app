import {
  Alert,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const CardNotPresent = () => {
  const [modal, setModal] = useState({
    isVisible: false,
    isOverlay: 0,
  });

  const toggleOverlay = () => {
    setModal({
      ...modal,
      isVisible: !modal.isVisible,
    });
  };

  return (
    <SafeAreaView>
      <View style={style.boxHistory}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={[style.baseTextDay, style.redColor]}>Jumat,</Text>
            <Text style={[style.baseTextDate, style.redColor]}>
              17 Maret 2023
            </Text>
          </View>
          <View style={[style.boxPil, style.boxPilTidakHadir]}>
            <Text style={[style.textPil, style.redColor]}>Tidak Hadir</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={style.keteranganJamAbsensi}>
            <Text style={style.descJam}>Jam Masuk</Text>
            <Text style={[style.jam, style.redColor]}>-</Text>
          </View>
          <View style={style.keteranganJamAbsensi}>
            <Text style={style.descJam}>Jam Pulang</Text>
            <Text style={[style.jam, style.redColor]}>-</Text>
          </View>
          <View style={style.keteranganAbsensi}>
            <Text style={style.descJam}>Keterangan</Text>
            <TouchableOpacity
              onPress={() =>
                setModal({
                  ...modal,
                  isVisible: !modal.isVisible,
                })
              }>
              <Text style={[style.fileButton, style.primaryColor]}>file</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={modal.isVisible}
          style={style.modalParent}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModal({
              ...modal,
              isVisible: !modal.isVisible,
            });
          }}>
          <View style={style.centeredView}>
            <Pressable
              style={style.bg}
              onPress={() => {
                setModal({
                  ...modal,
                  isVisible: !modal.isVisible,
                });
              }}
            />
            <View style={style.modalView}>
              <Text style={[style.modalTitleText, style.blackColor]}>
                Tidak Hadir
              </Text>
              <Text style={style.textTitle}>Status</Text>
              <View style={style.boxPilStatus}>
                <Text style={[style.textPil, style.primaryColor]}>Sakit</Text>
              </View>
              <Text style={style.textTitle}>Tanggal</Text>
              <Text style={style.textSubTitle}>Jumat, 17 Maret 2023</Text>
              <Text style={style.textTitle}>Keterangan</Text>
              <Text style={style.textSubTitle}>Ijin sakit tipes</Text>
              <Text style={style.textTitle}>File Bukti</Text>
              <Text style={style.textSubTitle}>Kosong</Text>
              {/* <Pressable
                  style={[style.button, style.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={style.textStyle}>Hide Modal</Text>
                </Pressable> */}
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default CardNotPresent;

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full heig
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
  modalTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginBottom: 15,
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
