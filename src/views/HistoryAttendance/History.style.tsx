import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

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
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  titleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
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
  textPil: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
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
    borderColor: '#0A2E51',
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
    backgroundColor: '#0A2E51',
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
