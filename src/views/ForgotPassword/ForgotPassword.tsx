import React from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './ForgotPassword.style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  ForgotPassword: undefined; //current screen
  Blank: undefined;
};

interface ForgotPasswordPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>;
}

const ForgotPassword = ({ navigation }: ForgotPasswordPageProps) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/bg-image3.png')}
      style={style.image}>
      <View style={style.boxContainer}>
        <Text style={[style.title, style.blackColor]}>Lupa Password ?</Text>
        <Text style={style.subTitle}>Masukkan datamu dengan benar</Text>
        <View style={style.container}>
          <Text style={[style.label, style.blackColor]}>Email</Text>
          <TextInput style={style.input} placeholder="Email" />
          <TouchableOpacity
            style={style.btn}
            onPress={() => {
              navigation.navigate('Blank');
            }}>
            <Text style={[style.btnText, style.whiteColor]}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ForgotPassword;
