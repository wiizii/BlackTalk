import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ChatRoom from './ChatRoom';
import Loading from '~/Screens/Loading';

const Chat = () => {
  //나중에 true로 바꿔놓고 데이터 가져오면 false로 설정
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
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
