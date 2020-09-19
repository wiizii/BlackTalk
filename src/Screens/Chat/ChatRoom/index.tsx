import React, {useEffect, useState, useContext} from 'react';
import {
  KeyboardAvoidingView,
  FlatList,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import {UserContext} from '~/Context/User';
import axios from 'axios';
import io from 'socket.io-client';

import SystemMessage from './SystemMessage';
import MessageBubble from './MessageBubble';
import ChatRoomInput from './ChatRoomInput';

const baseURL = 'Your Server URL';

axios.defaults.baseURL = baseURL;

//let socket: any = undefined;

const ChatRoom = () => {
  const {userID} = useContext<IUserContext>(UserContext);
  const [messages, setMessages] = useState<any[]>([
    {user: 'other', chat: 'test'},
  ]);

  const submit = (message: string) => {
    const newMessage = {
      user: userID,
      chat: message,
    };
    addMessage(newMessage);
  };

  /*
  //socket 연결 및 데이터 동기화 부분
  const [isSocketOpen, setIsSocketOpen] = useState<boolean>(false);

  if (!isSocketOpen) {
    socket = io.connect(baseURL, {
      path: '/socket.io',
    });
    setIsSocketOpen(true);
  }

  socket.on('chat', (data: any) => {
    console.log(data);
    const message = {
      id: 1,
      user: data.user,
      chat: data.chat,
    };
    addMessage(message);
  });

  const submit = (message: string) => {
    if (isSocketOpen) {
      axios
        .post('/chat', {
          chat: message,
        })
        .then(() => {
          console.log('success');
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  */

  const addMessage = (message: any) => {
    const newMessages = [message, ...messages];
    setMessages(newMessages);
  };

  const renderItem = ({item}: any) => {
    if (item.type === 'system') {
      return <SystemMessage body={item.body} time={item.time} />;
    }
    return (
      <MessageBubble
        alignToRight={item.user === userID}
        userID={item.user}
        message={item.chat}
      />
    );
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={60}
      style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={messages}
          inverted={true}
          //추후에 keyExtractor 추가하기
          renderItem={renderItem}
        />
      </View>
      <ChatRoomInput onSubmit={submit} />
    </KeyboardAvoidingView>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
