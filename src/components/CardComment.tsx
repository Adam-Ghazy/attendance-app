import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CommentModel } from '../models/task.model';

const CardComment = ({ comment }: { comment: CommentModel }) => {
  return (
    <View style={[styles.boxText]}>
      <Text style={[styles.textName, styles.primaryColor]}>{comment.name}</Text>
      <Text style={[styles.textComment, styles.blackColor]}>
        {comment.comment}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.textDate}>{comment.created_at}</Text>
      </View>
    </View>
  );
};

export default CardComment;

const styles = StyleSheet.create({
  primaryColor: {
    color: '#0A2E51',
  },
  blackColor: {
    color: '#191C1F',
  },
  boxText: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  textName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  textComment: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 5,
  },
  textDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginRight: 5,
  },
});
