import React, {useContext} from 'react';
import {Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

interface Props {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const Drawer = ({props}: Props) => {
  return <Text>Drawer</Text>;
};

export default Drawer;
