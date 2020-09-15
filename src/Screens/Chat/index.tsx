import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Bubble, GiftedChat, SystemMessage} from 'react-native-gifted-chat';
import Loading from '~/Screens/Loading';

const Chat = () => {
  //나중에 true로 바꿔놓고 데이터 가져오면 false로 설정
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user = {
    _id: 1,
    name: 'wizi',
  };
  const otherUser = {
    _id: 2,
    name: 'React Native',
    avatar: 'https://facebook.github.io/react/img/logo_og.png',
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          left: {
            color: 'white',
          },
          right: {
            color: 'red',
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: 'blue',
          },
          right: {
            backgroundColor: 'yellow',
          },
        }}
      />
    );
  };

  const renderSystemMessage = (props: any) => {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 15,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={user}
        renderBubble={renderBubble}
        renderSystemMessage={renderSystemMessage}
        infiniteScroll
      />
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
