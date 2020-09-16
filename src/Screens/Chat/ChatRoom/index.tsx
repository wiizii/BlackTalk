import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, FlatList, StyleSheet, View} from 'react-native';
import axios from 'axios';

import SystemMessage from './SystemMessage';
import MessageBubble from './MessageBubble';
import ChatRoomInput from './ChatRoomInput';

axios.defaults.baseURL = 'http://172.30.1.29:80';

const USER_ID = 'wizi';

const messages = [
  {
    id: '3',
    body: 'Doing good! Thanks!',
    time: '4 minutes ago',
    senderID: 'andrea',
    type: 'user',
  },
  {
    id: '2',
    body: 'Hi, Andrea! How are you doing?',
    time: '5 minutes ago',
    senderID: 'michael',
    type: 'user',
  },
  {
    id: '1',
    body: 'Chat has started!',
    time: '5 minutes ago',
    senderID: 'system',
    type: 'system',
  },
];

const ChatRoom = () => {
  const ws = new WebSocket('ws://172.30.1.29:80');

  const [messages, setMessages] = useState<any[]>([]);
  const [isSocketOpen, setIsSocketOpen] = useState<boolean>(true);

  const submit = (text: string) => {
    const message = {
      id: Math.random().toString(),
      body: text,
      senderID: 'wizi',
      time: '5 minutes ago',
      type: 'user',
    };

    addMessage(message);

    if (isSocketOpen) {
      axios
        .post('/chat', {
          chat: message.body,
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const addMessage = (message: any) => {
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
        alignToRight={item.senderID === USER_ID}
        body={item.body}
        highlighted={item.senderID === USER_ID}
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
    </KeyboardAvoidingView>
  );
};

export default ChatRoom;

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
