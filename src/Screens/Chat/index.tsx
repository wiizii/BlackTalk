import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import ChatRoom from './ChatRoom';
import Loading from '~/Screens/Loading';

interface Props {
  navigation: any;
}

const Chat = ({navigation}: Props) => {
  //나중에 true로 바꿔놓고 데이터 가져오면 false로 설정
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require('~Assets/Images/menu.png')} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <ChatRoom />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
