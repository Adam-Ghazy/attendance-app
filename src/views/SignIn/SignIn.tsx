import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InputField from '../../components/InputField';
import style from './SignIn.style';
import { loginService } from '../../services/auth/auth.service';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/root-stack.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../providers/user/user.context';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SignInPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
}

const SignIn = ({ navigation }: SignInPageProps) => {
  const { fetchUser } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const checkIsTokenExist = async () => {
    const token = await AsyncStorage.getItem('auth');
    if (token) {
      await fetchUser().then(() => {
        navigation.navigate('Home');
      });
    }
  };

  const handleSignIn = async (data: any) => {
    try {
      const result = await loginService(data);
      if (result) {
        reset();

        Snackbar.show({
          text: 'Berhasil login',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'green',
        });

        await AsyncStorage.setItem(
          'auth',
          JSON.stringify(result.data.data.token),
        );

        await fetchUser().then(() => {
          navigation.navigate('Home');
        });
      }
    } catch (error) {
      Snackbar.show({
        text: error!.toString(),
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
    }
  };

  React.useEffect(() => {
    checkIsTokenExist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <ImageBackground
        source={require('../../../assets/images/bg-image3.png')}
        style={style.image}>
        <View style={style.boxContainer}>
          <Text style={[style.title, style.blackColor]}>Selamat Datang</Text>
          <Text style={style.subTitle}>Masukkan data Anda dengan benar</Text>
          <View style={style.container}>
            <Text style={[style.label, style.blackColor]}>
              Username atau Email
            </Text>
            <InputField
              extra={{ marginBottom: 15 }}
              control={control}
              errors={errors}
              name="username"
              autoCapitalize="none"
              placeholder="Username atau Email"
              validation={{
                required: "Username atau Email can't be empty",
              }}
            />
            <View style={style.space} />
            <Text style={[style.label, style.blackColor]}>Password</Text>
            <InputField
              control={control}
              errors={errors}
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              validation={{
                required: "Password can't be empty",
              }}
            />
            <TouchableOpacity
              style={style.btn}
              onPress={handleSubmit(handleSignIn)}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  name="sign-in"
                  color={'white'}
                  size={20}
                  style={{
                    marginRight: 5,
                    marginBottom: 4
                  }}
                />
                <Text style={[style.btnText, style.whiteColor]}>Masuk</Text>
              </View>
              {/* <Text style={[style.btnText, style.whiteColor]}>Masuk</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignIn;
