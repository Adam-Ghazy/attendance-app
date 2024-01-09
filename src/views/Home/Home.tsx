import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation, {
  GeolocationError,
} from '@react-native-community/geolocation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import moment from 'moment-timezone';
import React, { useContext, useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardAttendance from '../../components/CardAttendance';
import CardTask from '../../components/CardTask';
import NotPresentButton from '../../components/NotPresentButton';
import useAttendance from '../../hooks/useAttendance';
import useTask from '../../hooks/useTask';
import { UserContext } from '../../providers/user/user.context';
import { toPresenceToday } from '../../services/attendance/attendance.service';
import { RootStackParamList } from '../../types/root-stack.type';
import { formatImageUpload } from '../../utils/formatImageUpload.utils';
import style from './Home.style';
// import CountDown from 'react-native-countdown-component';

interface HomePageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const Home = ({ navigation }: HomePageProps) => {
  const { user } = useContext(UserContext);
  const {
    attendanceSetting,
    attendanceToday,
    attendances,
    fetchAttendanceToday,
    fetchAttendances,
  } = useAttendance();

  const { tasks } = useTask();

  const [absent, setAbsent] = useState<{
    file: DocumentPickerResponse | null;
    absent_type: number | null;
  }>({
    file: null,
    absent_type: null,
  });

  const handlePresence = async () => {
    Geolocation.getCurrentPosition(
      async info => {
        try {
          if (attendanceToday?.time_sign_in) {
            await toPresenceToday(
              {
                latitude_out: info.coords.latitude,
                longitude_out: info.coords.longitude,
              },
              null,
            );

            Snackbar.show({
              text: 'Berhasil absen pulang',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: 'green',
            });
          } else {
            await toPresenceToday(
              {
                latitude_in: info.coords.latitude,
                longitude_in: info.coords.longitude,
                absence_type: absent.absent_type
                  ? absent.absent_type === 1
                    ? 'sick'
                    : 'permit'
                  : null,
              },
              absent.file
                ? formatImageUpload({
                  fileUri: absent.file.fileCopyUri!,
                  name: absent.file.name!,
                  type: absent.file.type!,
                })
                : null,
            );

            Snackbar.show({
              text: 'Berhasil absen masuk',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: 'green',
            });
          }

          setAbsent({
            file: null,
            absent_type: null,
          });

          await fetchAttendanceToday();
          await fetchAttendances();
        } catch (error) {
          console.log(error);
          Snackbar.show({
            text: error!.toString(),
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'red',
          });
        }
      },
      (error: GeolocationError) => {
        Snackbar.show({
          text: error.message,
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      },
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={require('../../../assets/images/bg-image3.png')}
          style={style.image}>
          <View style={style.container}>
            <View>
              <Text style={[style.baseTextName, style.yellowColor]}>Halo,</Text>
              <Text style={[style.titleTextName, style.whiteColor]}>
                {user?.name ?? '-'}
              </Text>
            </View>
            <View style={{ marginLeft: 'auto' }}>
              <TouchableOpacity
                onPress={async () => {
                  navigation.navigate('SignIn');
                  await AsyncStorage.removeItem('auth');
                }}>
                <Icon name="exit-to-app" color={'white'} size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.boxContent}>
            {(attendanceToday?.time_sign_in &&
              attendanceToday?.time_sign_out) ||
              attendanceToday?.type === 'absent' ? (
              <View style={style.boxCountdownTime}>
                <Text style={[style.titleTextTime, style.blackColor]}>
                  Anda Sudah Absen Hari Ini
                </Text>
              </View>
            ) : !attendanceToday?.time_sign_in ? (
              <View style={style.boxCountdownTime}>
                <Text style={[style.titleTextTime, style.blackColor]}>
                  Absensi masuk dibuka pada
                </Text>
                <View style={style.time}>
                  <Text style={style.time_text}>
                    {attendanceSetting?.time_sign_in
                      ? moment(attendanceSetting?.time_sign_in)
                        .tz('Asia/Jakarta')
                        .format('HH:mm')
                      : '-'}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={style.btnHadir}
                    onPress={() => handlePresence()}>
                    <Text style={[style.btnText, style.whiteColor]}>Hadir</Text>
                  </TouchableOpacity>
                  <View style={style.space} />
                  <NotPresentButton
                    onSubmited={() => handlePresence()}
                    fileSelected={file => {
                      setAbsent({
                        ...absent,
                        file,
                      });
                    }}
                    typeSelected={type => {
                      setAbsent({
                        ...absent,
                        absent_type: type,
                      });
                    }}
                  />
                </View>
              </View>
            ) : (
              <View style={style.boxCountdownTime}>
                <Text style={[style.titleTextTime, style.blackColor]}>
                  Absensi pulang dibuka pada
                </Text>
                <View style={style.time}>
                  <Text style={style.time_text}>
                    {attendanceSetting?.time_sign_out
                      ? moment(attendanceSetting?.time_sign_out)
                        .tz('Asia/Jakarta')
                        .format('HH:mm')
                      : '-'}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={style.btnHadir}
                    onPress={() => handlePresence()}>
                    <Text style={[style.btnText, style.whiteColor]}>
                      Pulang
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View style={{ flexDirection: 'row' }}>
              <Text style={[style.subTitleText, style.blackColor]}>Tugas</Text>
              <View style={style.btnLainnya2}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TaskList');
                  }}>
                  <Text style={[style.btnText, style.primaryColor]}>
                    Lihat Lainnya
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {
              tasks.length !== 0 ? (
                tasks?.slice(0, 3).map((task, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        navigation.navigate('TaskDetail', {
                          task_id: task.id,
                        })
                      }>
                      <CardTask task={task} />
                    </TouchableOpacity>
                  );
                })
              ) : (
                <View style={style.absenceBox}>
                  <Text style={style.absenceBox_text}>Tidak ada data task</Text>
                </View>
              )
              // <CardTask />
            }
            <View style={{ flexDirection: 'row' }}>
              <Text style={[style.subTitleText, style.blackColor]}>
                Riwayat Absensi
              </Text>
              <View style={style.btnLainnya2}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('HistoryAttendance');
                  }}>
                  <Text style={[style.btnText, style.primaryColor]}>
                    Lihat Lainnya
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {attendances.length !== 0 ? (
              attendances?.slice(0, 3).map((item, index) => {
                return <CardAttendance attendance={item} key={index} />;
              })
            ) : (
              <View style={style.absenceBox}>
                <Text style={style.absenceBox_text}>
                  Tidak ada data absensi
                </Text>
              </View>
            )}
            {/* <CardAttendance />
            <CardNotPresent />
            <CardLate /> */}
            <View style={style.bottomSpace} />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
