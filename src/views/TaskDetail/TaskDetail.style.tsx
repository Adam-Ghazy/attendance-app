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
  boxDescription: {
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  textDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  boxDeadline: {
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  mt10: {
    marginTop: 10,
  },
  textDeadline: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  textDeadlineDate: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  boxToDo: {
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  boxComment: {
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 15,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#0A2E51',
    borderRadius: 8,
    marginHorizontal: 15,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  input: {
    height: 52,
    marginTop: 10,
    borderWidth: 1.5,
    padding: 16,
    borderRadius: 8,
  },
  btnComment: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#0A2E51',
  },
  btnCommentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
});
