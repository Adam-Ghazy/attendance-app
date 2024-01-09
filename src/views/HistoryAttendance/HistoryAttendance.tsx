import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Button,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './History.style';
// import BottomSheet from '../../components/BottomSheet';
import { BottomSheet } from 'react-native-btr';
import DatePicker from 'react-native-date-picker';
import CardAttendance from '../../components/CardAttendance';
import useAttendance from '../../hooks/useAttendance';
import { RootStackParamList } from '../../types/root-stack.type';

interface HistoryAttendancePageProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'HistoryAttendance'
  >;
}

const HistoryAttendance = ({ navigation }: HistoryAttendancePageProps) => {
  const { attendances } = useAttendance();

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

  const [visible, setVisible] = useState(false);

  const toggleBottomSheet = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ paddingRight: 16 }}>
              <Icon
                name="arrow-back"
                color={'black'}
                size={24}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
            <Text style={[style.titleText, style.blackColor]}>
              Riwayat Absensi
            </Text>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <TouchableOpacity
              style={{ paddingRight: 16 }}
              onPress={toggleBottomSheet}>
              <Icon name="filter-alt" color={'black'} size={24} />
            </TouchableOpacity>
          </View>
        </View>
        {attendances.length !== 0 ? (
          attendances.map((attendance, idx) => (
            <CardAttendance attendance={attendance} key={idx} />
          ))
        ) : (
          <View style={style.absenceBox}>
            <Text style={style.absenceBox_text}>Belum ada data absensi</Text>
          </View>
        )}
      </ScrollView>
      {/* <BottomSheet /> */}
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
                          <Button
                            title="Selesai"
                            onPress={closeEndDatePicker}
                          />
                        </View>
                      </View>
                    </Modal>
                    <Text style={{ marginLeft: 10 }}>
                      {endDate.toDateString()}
                    </Text>
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
    </SafeAreaView>
  );
};

export default HistoryAttendance;
