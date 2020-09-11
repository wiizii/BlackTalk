import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '~/Screens/Home';
import Login from '~/Screens/Login';
import CustomDrawer from '~/Screens/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
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
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};
