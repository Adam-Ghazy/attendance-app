import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  primaryColor: {
    color: '#0A2E51',
  },
  whiteColor: {
    color: 'white',
  },
  blackColor: {
    color: '#191C1F',
  },
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  titleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  btnLainnya: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 121,
    backgroundColor: '#F4F7FE',
    borderRadius: 8,
    marginBottom: 20,
  },
  absenceBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  absenceBox_text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
