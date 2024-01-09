export interface TaskModel {
  id: number;
  user_id: number;
  title: string;
  description: string;
  deadline: {
    date: string;
    formatted: string;
  };
  is_finished: boolean;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
  };
  todos: {
    id: number;
    task_id: number;
    title: string;
    is_done: boolean;
    created_at: string;
    updated_at: string;
  }[];
  comments: CommentModel[];
}

export interface CommentModel {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  created_at: string;
}
