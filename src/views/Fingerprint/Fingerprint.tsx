import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './Fingerprint.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Fingerprint: undefined; //current screen
  Home: undefined;
};

interface FingerprintPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Fingerprint'>;
}

const Fingerprint = ({ navigation }: FingerprintPageProps) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/bg-image3.png')}
      style={style.image}>
      <View>
        <View style={style.judul}>
          <Text style={[style.textTitle, style.whiteColor]}>
            Scan Sidik Jarimu
          </Text>
          <Text style={[style.textSubTitle, style.whiteColor]}>
            Scan sidik jarimu untuk masuk
          </Text>
        </View>
        <View style={style.ic}>
          <Icon name="fingerprint" color={'white'} size={125} />
        </View>
        <View style={style.btnToBottom}>
          <TouchableOpacity
            style={style.btn}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={[style.btnText, style.primaryColor]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Fingerprint;
