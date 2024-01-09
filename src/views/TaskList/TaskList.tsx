import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardTask from '../../components/CardTask';
import {RootStackParamList} from '../../types/root-stack.type';
import style from './TaskList.style';
import useTask from '../../hooks/useTask';

interface TaskListPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TaskList'>;
}

const TaskList = ({navigation}: TaskListPageProps) => {
  const {tasks} = useTask();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{paddingRight: 16}}>
              <Icon
                name="arrow-back"
                color={'black'}
                size={24}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
            <Text style={[style.titleText, style.blackColor]}>Tugas</Text>
          </View>
        </View>
        {tasks.length != 0 ? (
          tasks?.map((task, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('TaskDetail', {
                  task_id: task.id,
                })
              }>
              <CardTask task={task} />
            </TouchableOpacity>
          ))
        ) : (
          <View style={style.absenceBox}>
            <Text style={style.absenceBox_text}>Tidak ada data task</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskList;
