import {createContext} from 'react';
import {User} from '../../models/login.model';

interface UserContextProps {
  user: User | null;
  fetchUser: () => Promise<void>;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);
