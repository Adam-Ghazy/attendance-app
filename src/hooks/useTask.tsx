import React, {useEffect} from 'react';
import {TaskModel} from '../models/task.model';
import {getAllTaskService} from '../services/task/task.service';

const useTask = () => {
  const [tasks, setTasks] = React.useState<TaskModel[]>([]);

  const fetchAllTask = async () => {
    try {
      const result = await getAllTaskService();
      if (result) {
        setTasks(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllTask();
  }, []);

  return {tasks, fetchAllTask};
};

export default useTask;
