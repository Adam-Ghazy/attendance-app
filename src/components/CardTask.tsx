import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TaskModel } from '../models/task.model';

interface CardTaskProps {
  task: TaskModel;
}

const CardTask = ({ task }: CardTaskProps) => {
  return (
    <View style={styles.boxTask}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text
            numberOfLines={1}
            style={[styles.baseTextTitleTask, styles.primaryColor]}>
            {task?.title}
          </Text>
        </View>
        <View
          style={[
            styles.boxPil,
            task?.is_finished ? styles.boxPilSelesai : styles.orangeColor,
          ]}>
          <Text
            style={[
              styles.textPil,
              task?.is_finished ? styles.primaryColor : styles.orangeColor,
            ]}>
            {task?.is_finished ? 'Selesai' : 'Belum Selesai'}
          </Text>
        </View>
      </View>
      <Text style={styles.textSubTitleDate}>Tenggat Waktu</Text>
      <Text style={[styles.baseTextDeadline, styles.primaryColor]}>
        {task?.deadline?.formatted}
      </Text>
    </View>
  );
};

export default CardTask;

const styles = StyleSheet.create({
  primaryColor: {
    color: '#0A2E51',
  },
  orangeColor: {
    backgroundColor: '#F97316',
    color: 'white',
  },
  whiteColor: {
    color: 'white',
  },
  blackColor: {
    color: '#191C1F',
  },
  boxTask: {
    marginTop: 10,
    marginHorizontal: 15,
    height: 111,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  boxPil: {
    marginLeft: 'auto',
    height: 26,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  boxPilSelesai: {
    backgroundColor: '#D0C5FF',
  },
  textPil: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  baseTextTitleTask: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    width: 260,
  },
  textSubTitleDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 10,
  },
  baseTextDeadline: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
