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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1BA2FB',
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

const baseURL = 'http://172.30.1.29:80';

axios.defaults.baseURL = baseURL;

let socket: any = undefined;

const ChatRoom = () => {
  const {userID, logout} = useContext<IUserContext>(UserContext);
  const [messages, setMessages] = useState<string[]>([]);
  const [isSocketOpen, setIsSocketOpen] = useState<boolean>(false);

  if (!isSocketOpen) {
    socket = io.connect(baseURL, {
      path: '/socket.io',
    });
    setIsSocketOpen(true);
  }

  socket.on('chat', (data: any) => {
    const message = {
      id: data.user,
      body: data.chat,
      type: 'user',
    };
    addMessage(data.chat);
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

  const addMessage = (message: string) => {
    const newMessages = [message, ...messages];
    setMessages(newMessages);
  };

  const keyExtractor = (item: any) => item.id;

  const renderItem = ({item}: any) => {
    if (item.type === 'system') {
      return <SystemMessage body={item.body} time={item.time} />;
    }
    return (
      <MessageBubble
        alignToRight={item.senderID === userID}
        body={item.body}
        highlighted={item.senderID === userID}
        time={item.time}
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
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
      <ChatRoomInput onSubmit={submit} />
      <View>
        <Button title={'logout'} onPress={logout} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatRoom;
