import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  Alert,
  Pressable,
  TextInput,
} from 'react-native';
import style from './Blank.style';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

type RootStackParamList = {
  Blank: undefined; //current screen
  HistoryAttendance: undefined;
  Fingerprint: undefined;
  ForgotPassword: undefined;
};

interface BlankPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Blank'>;
}

const Blank = ({navigation}: BlankPageProps) => {
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
      <TouchableOpacity style={{paddingRight: 16}}>
        <Icon
          name="arrow-back"
          color={'black'}
          size={24}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <View style={{alignItems: 'center', marginTop: 320}}>
        <TouchableOpacity style={{paddingRight: 16}}>
          <Icon
            name="fingerprint"
            color={'black'}
            size={60}
            onPress={() =>
              setModal({
                ...modal,
                isVisible: !modal.isVisible,
              })
            }
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <TouchableOpacity
          style={style.btnLainnya}
          onPress={() => {
            navigation.navigate('Fingerprint');
          }}>
          <Text style={[style.btnText, style.primaryColor]}>
            Scan Fingerprint
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnLainnya}
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={[style.btnText, style.primaryColor]}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
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
          <LinearGradient
            colors={['#432CF3', '#868CFF']}
            useAngle={true}
            angle={-45}
            angleCenter={{x: 0.1, y: 0.1}}
            style={style.modalView}>
            <Text style={[style.modalTitleText, style.whiteColor]}>
              Scan Sidik Jarimu
            </Text>
            <View style={style.ic}>
              <Icon name="fingerprint" color={'white'} size={125} />
            </View>
            <Pressable style={style.btnPassword} onPress={() => []}>
              <Text style={[style.btnText, style.whiteColor]}>Password</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Blank;
