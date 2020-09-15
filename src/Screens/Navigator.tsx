import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {UserContext} from '~/Context/User';

import Chat from '~/Screens/Chat';
import Login from '~/Screens/Login';
import CustomDrawer from '~/Screens/Drawer';
import Loading from '~/Screens/Loading';
import Test from '~/Screens/Test';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{title: 'BlackTalk'}}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerType="slide"
      drawerContent={(props) => <CustomDrawer props={props} />}>
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
};

export default () => {
  const {userID, isLoading} = useContext<IUserContext>(UserContext);

  if (isLoading === false) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {/* {userID != 'empty' ? <MainNavigator /> : <Login />} */}
      <Test />
    </NavigationContainer>
  );
};
