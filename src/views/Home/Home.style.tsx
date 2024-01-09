import { Dimensions, StyleSheet } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
  primaryColor: {
    color: '#0A2E51',
  },
  whiteColor: {
    color: 'white',
  },
  yellowColor: {
    color: '#FCC51D',
  },
  blackColor: {
    color: '#191C1F',
  },
  redColor: {
    color: '#F53939',
  },
  orangeColor: {
    color: '#F97316',
  },
  boxPilHadir: {
    backgroundColor: '#D0C5FF',
  },
  boxPilTidakHadir: {
    backgroundColor: '#fdcece',
  },
  boxPilTerlambat: {
    backgroundColor: '#fedcc5',
  },
  boxPilStatus: {
    borderWidth: 1.5,
    borderColor: '#0A2E51',
    marginRight: 'auto',
    height: 30,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  containerTime: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTime: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  baseTextName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  titleTextName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  textTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  textSubTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  subTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 16,
    marginBottom: 10,
  },
  boxContent: {
    display: 'flex',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#F4F7FE',
  },
  boxCountdownTime: {
    marginTop: 30,
    marginHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 16,
    backgroundColor: 'white',
  },
  titleTextTime: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
  },
  btnHadir: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 121,
    // backgroundColor: '#FCC51D',
    backgroundColor: '#0A2E51',
    borderRadius: 8,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  space: {
    width: 30,
  },
  btnTidakHadir: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 121,
    backgroundColor: 'white',
    borderRadius: 8,
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
  btnLainnya2: {
    marginLeft: 'auto',
    marginRight: 16,
    marginTop: 30,
  },
  boxHistory: {
    marginTop: 10,
    marginHorizontal: 15,
    height: 138,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  baseTextDay: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    opacity: 0.6,
  },
  baseTextDate: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginTop: -6,
  },
  boxPil: {
    marginLeft: 'auto',
    height: 26,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  textPil: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  keteranganJamAbsensi: {
    marginTop: 10,
    flex: 1,
  },
  keteranganAbsensi: {
    marginTop: 10,
    marginLeft: 'auto',
    alignItems: 'center',
  },
  descJam: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  jam: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginTop: -5,
  },
  fileButton: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textDecorationLine: 'underline',
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
    backgroundColor: 'white',
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
  bottomSpace: {
    marginBottom: 30,
  },
  time: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time_text: {
    fontSize: 60,
    fontFamily: 'Poppins-SemiBold',
    color: '#0A2E51',
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
