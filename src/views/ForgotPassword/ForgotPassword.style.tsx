import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  blackColor: {
    color: '#191C1F',
  },
  whiteColor: {
    color: 'white',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30,
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  boxContainer: {
    flex: 1,
    marginTop: 160,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#F4F7FE',
  },
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  input: {
    height: 52,
    marginTop: 10,
    borderWidth: 1.5,
    padding: 16,
    borderRadius: 8,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 40,
    backgroundColor: '#0A2E51',
    borderRadius: 8,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});
