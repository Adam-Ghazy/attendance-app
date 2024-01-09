import { Dimensions, StyleSheet } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
  blackColor: {
    color: '#191C1F',
  },
  whiteColor: {
    color: 'white',
  },
  yellowColor: {
    color: '#FCC51D',
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
  space: {
    paddingTop: 20,
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
    height: 500,
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
  primaryColor: {
    color: '#0A2E51',
  },
  textPil: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  btnUpload: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 10,
    backgroundColor: '#868CFF',
    borderRadius: 8,
    flexDirection: 'row',
  },
});
