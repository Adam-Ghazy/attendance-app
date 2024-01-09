import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotPresentModal = () => {
  const [modal, setModal] = useState({
    isVisible: false,
    isOverlay: 0,
  });

  const [btnSelected, setBtnSelected] = useState(1);

  return (
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
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={[
              btnSelected == 1 ? style.btnSelected : style.btnNotSelected,
            ]}
            onPress={() => setBtnSelected(1)}>
            <Text
              style={[
                style.textPil,
                btnSelected == 1 ? style.primaryColor : style.blackColor,
              ]}>
              Sakit
            </Text>
          </Pressable>
          <Pressable
            style={[
              btnSelected == 2 ? style.btnSelected : style.btnNotSelected,
            ]}
            onPress={() => setBtnSelected(2)}>
            <Text
              style={[
                style.textPil,
                btnSelected == 2 ? style.primaryColor : style.blackColor,
              ]}>
              Izin
            </Text>
          </Pressable>
        </View>
        <Text style={style.textTitle}>File Bukti</Text>
        <Pressable style={style.btnUpload} onPress={() => []}>
          <Icon
            name="attach-file"
            color={'white'}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text style={[style.btnText, style.whiteColor]}>Upload File</Text>
        </Pressable>
        <Pressable style={style.btn} onPress={() => []}>
          <Text style={[style.btnText, style.whiteColor]}>Kirim</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NotPresentModal;

const style = StyleSheet.create({
  blackColor: {
    color: '#191C1F',
  },
  whiteColor: {
    color: 'white',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 40,
    backgroundColor: '#4318FE',
    borderRadius: 8,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  centeredView: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  modalView: {
    height: 500,
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
  subTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 16,
    marginBottom: 10,
  },
  btnSelected: {
    borderColor: '#4318FE',
    borderWidth: 1.5,
    height: 30,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10,
  },
  btnNotSelected: {
    borderColor: '#CCCECF',
    borderWidth: 1.5,
    height: 30,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10,
  },
  primaryColor: {
    color: '#0A2E51',
  },
  textPil: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  btnUpload: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 10,
    backgroundColor: '#868CFF',
    borderRadius: 8,
    flexDirection: 'row',
  },
});
