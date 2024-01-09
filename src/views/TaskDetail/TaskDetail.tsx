import {RouteProp, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CheckBox} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardComment from '../../components/CardComment';
import InputField from '../../components/InputField';
import {TaskModel} from '../../models/task.model';
import {
  commentAPostService,
  getTaskByIdService,
  toggleTodoTaskService,
} from '../../services/task/task.service';
import {RootStackParamList} from '../../types/root-stack.type';
import style from './TaskDetail.style';

interface TaskDetailPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TaskDetail'>;
}

const TaskDetail = ({navigation}: TaskDetailPageProps) => {
  const [task, setTask] = useState<TaskModel | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      comment: '',
    },
  });

  const router = useRoute<RouteProp<RootStackParamList, 'TaskDetail'>>();

  const getTask = async () => {
    try {
      const result = await getTaskByIdService(router.params.task_id.toString());
      if (result) {
        setTask(result);
      }
    } catch (error) {
      navigation.goBack();
      Snackbar.show({
        text: error!.toString(),
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
      console.log(error);
    }
  };

  const toggleTodo = async (todoId: number) => {
    try {
      const result = await toggleTodoTaskService(
        router.params.task_id.toString(),
        todoId.toString(),
      );

      if (result.statusCode === 200) {
        getTask();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = async (data: any) => {
    try {
      const result = await commentAPostService(router.params.task_id, data);

      if (result.statusCode === 201) {
        reset();
        getTask();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
          <Text style={[style.titleText, style.blackColor]}>{task?.title}</Text>
        </View>
      </View>
      <View style={style.boxDescription}>
        <Text style={[style.primaryColor, style.textDescription]}>
          {task?.description}
        </Text>
      </View>
      <View style={style.boxDeadline}>
        <View style={{flexDirection: 'row'}}>
          <Text style={style.textDeadline}>Tenggat Waktu</Text>
          <View style={{marginLeft: 'auto'}}>
            <Text style={[style.textDeadlineDate, style.primaryColor]}>
              {task?.deadline.formatted}
            </Text>
          </View>
        </View>
      </View>
      <View style={style.boxToDo}>
        <Text style={style.textDeadline}>Daftar Tugas</Text>
        {task?.todos.length! > 0 ? (
          task?.todos.map((todo, index) => (
            <CheckBox
              key={index}
              checked={todo.is_done}
              onPress={() => toggleTodo(todo.id)}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="blue"
              title={todo.title}
            />
          ))
        ) : (
          <Text style={[style.textDeadline, style.mt10]}>No To Do</Text>
        )}
      </View>
      <View style={style.boxToDo}>
        <Text>Komentar</Text>
        {task?.comments.length! > 0 ? (
          task?.comments.map((comment, index) => (
            <CardComment comment={comment} key={index} />
          ))
        ) : (
          <Text style={[style.textDeadline, style.mt10]}>No Comments</Text>
        )}
        <InputField
          control={control}
          errors={errors}
          name="comment"
          validation={{required: 'Comment is required'}}
          style={{
            borderWidth: 0.1,
            borderRadius: 5,
            marginTop: 20,
            marginBottom: 10,
            maxHeight: 100,
            paddingLeft: 16,
          }}
          placeholder="Tambah Komentar"
        />
        <TouchableOpacity
          onPress={handleSubmit(handleComment)}
          style={[style.btnComment, {marginTop: 30}]}>
          <Text style={[style.btnCommentText]}>Tambah Komentar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TaskDetail;
