import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext: IUserContext = {
  userID: 'empty',
  isLoading: false,
  login: (ID: string) => {},
  getUserID: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) => {
  const [userID, setUserID] = useState<string>('empty');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = (ID: string): void => {
    AsyncStorage.setItem('userID', ID).then(() => {
      setUserID(ID);
      setIsLoading(true);
    });
  };

  const getUserID = (): void => {
    AsyncStorage.getItem('userID')
      .then((value) => {
        if (value) {
          console.log(value);
          setUserID(value);
        }
        setIsLoading(true);
      })
      .catch(() => {
        setUserID('empty');
        setIsLoading(true);
      });
  };

  const logout = (): void => {
    AsyncStorage.removeItem('userID');
    setUserID('empty');
    console.log(userID);
  };

  useEffect(() => {
    getUserID();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userID,
        isLoading,
        login,
        getUserID,
        logout,
      }}>
      {children}
    </UserContext.Provider>
  );
};
export {UserContextProvider, UserContext};
