import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BottomSheet } from 'react-native-btr';
import DatePicker from 'react-native-date-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const BottomSheets = () => {
  const [modal, setModal] = useState({
    isVisible: false,
    isOverlay: 0,
  });

  const [btnSelected, setBtnSelected] = useState(1);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startModalVisible, setStartModalVisible] = useState(false);
  const [endModalVisible, setEndModalVisible] = useState(false);

  const handleStartDateChange = (date: React.SetStateAction<Date>) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: React.SetStateAction<Date>) => {
    setEndDate(date);
  };

  const openStartDatePicker = () => {
    setStartModalVisible(true);
  };

  const openEndDatePicker = () => {
    setEndModalVisible(true);
  };

  const closeStartDatePicker = () => {
    setStartModalVisible(false);
  };

  const closeEndDatePicker = () => {
    setEndModalVisible(false);
  };

  const toggleOverlay = () => {
    setModal({
      ...modal,
      isVisible: !modal.isVisible,
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleBottomSheet = () => {
    setVisible(!visible);
  };

  <SafeAreaView>
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomSheet}
      onBackdropPress={toggleBottomSheet}>
      <View style={style.bottomSheet}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={style.line} />
          <View style={{ flex: 1 }}>
            <Text style={[style.textTitleBottomSheet, style.blackColor]}>
              Status
            </Text>
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
                  Hadir
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
                  Terlambat
                </Text>
              </Pressable>
              <Pressable
                style={[
                  btnSelected == 3 ? style.btnSelected : style.btnNotSelected,
                ]}
                onPress={() => setBtnSelected(3)}>
                <Text
                  style={[
                    style.textPil,
                    btnSelected == 3 ? style.primaryColor : style.blackColor,
                  ]}>
                  Tidak Hadir
                </Text>
              </Pressable>
            </View>
            <Text style={[style.textTitleBottomSheet, style.blackColor]}>
              Tanggal
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text>Dari</Text>
                {/* <TouchableOpacity onPress={() => setOpen(true)}> */}
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <TouchableOpacity onPress={openStartDatePicker}>
                    <Icon name="date-range" color={'black'} size={24} />
                  </TouchableOpacity>
                  <Modal
                    visible={startModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={closeStartDatePicker}>
                    <View style={style.modalContainer}>
                      <View style={style.modalContent}>
                        <DatePicker
                          date={startDate}
                          onDateChange={handleStartDateChange}
                          mode="date"
                        />
                        <Button
                          title="Selesai"
                          onPress={closeStartDatePicker}
                        />
                      </View>
                    </View>
                  </Modal>
                  <Text style={{ marginLeft: 10 }}>
                    {startDate.toDateString()}
                  </Text>
                </View>
              </View>
              <View style={{ marginLeft: 30 }}>
                <Text>Hingga</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <TouchableOpacity onPress={openEndDatePicker}>
                    <Icon name="date-range" color={'black'} size={24} />
                  </TouchableOpacity>
                  <Modal
                    visible={endModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={closeEndDatePicker}>
                    <View style={style.modalContainer}>
                      <View style={style.modalContent}>
                        <DatePicker
                          date={endDate}
                          onDateChange={handleEndDateChange}
                          mode="date"
                        />
                        <Button title="Selesai" onPress={closeEndDatePicker} />
                      </View>
                    </View>
                  </Modal>
                  <Text style={{ marginLeft: 10 }}>{endDate.toDateString()}</Text>
                </View>
              </View>
            </View>
            <Pressable style={style.btn} onPress={() => []}>
              <Text style={[style.btnText, style.whiteColor]}>Kirim</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </BottomSheet>
  </SafeAreaView>;
};

export default BottomSheets;

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
  textPil: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  bottomSheet: {
    backgroundColor: '#fff',
    width: '100%',
    height: 370,
    paddingHorizontal: 24,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  line: {
    width: 40,
    height: 4,
    backgroundColor: '#CCCECF',
    alignSelf: 'center',
    marginVertical: 24,
    borderRadius: 2,
  },
  textTitleBottomSheet: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
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
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 40,
    backgroundColor: '#4318FE',
    borderRadius: 8,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
});
