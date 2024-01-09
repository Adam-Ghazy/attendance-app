import React, { useState } from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PresentButton() {
  const [modal, setModal] = useState({
    isVisible: false,
    isOverlay: 0,
  });

  return (
    <View>
      <View>
        <TouchableOpacity
          style={styles.btnHadir}
          onPress={() =>
            setModal({
              ...modal,
              isVisible: !modal.isVisible,
            })
          }>
          <Text style={[styles.btnText, styles.whiteColor]}>Hadir</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={modal.isVisible}
          style={styles.modalParent}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModal({
              ...modal,
              isVisible: !modal.isVisible,
            });
          }}>
          <View style={styles.centeredView}>
            <Pressable
              style={styles.bg}
              onPress={() => {
                setModal({
                  ...modal,
                  isVisible: !modal.isVisible,
                });
              }}
            />
            <LinearGradient
              colors={['#432CF3', '#868CFF']}
              useAngle={true}
              angle={-45}
              angleCenter={{ x: 0.1, y: 0.1 }}
              style={styles.modalView}>
              <Text style={[styles.modalTitleText, styles.whiteColor]}>
                Scan Sidik Jarimu
              </Text>
              <View style={styles.ic}>
                <Icon name="fingerprint" color={'white'} size={125} />
              </View>
              <Pressable style={styles.btnPassword} onPress={() => { }}>
                <Text style={[styles.btnText, styles.whiteColor]}>
                  Password
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        </Modal>
      </View>
    </View>
  );
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  whiteColor: {
    color: 'white',
  },
  btnHadir: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 121,
    backgroundColor: '#0A2E51',
    borderRadius: 8,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
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
    // backgroundColor: 'white',
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
  btnPassword: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
  },
  ic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
});
