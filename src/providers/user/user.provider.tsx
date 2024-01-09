import React from 'react';
import {UserContext} from './user.context';
import {User} from '../../models/login.model';
import {profileService} from '../../services/auth/auth.service';
import Snackbar from 'react-native-snackbar';

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = React.useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const result = await profileService();
      if (result) {
        setUser(result);
      }
    } catch (error) {
      Snackbar.show({
        text: error!.toString(),
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
    }
  };

  return (
    <UserContext.Provider value={{user, fetchUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
