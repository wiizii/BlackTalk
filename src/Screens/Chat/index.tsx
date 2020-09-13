import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import Loading from '~/Screens/Loading';

const Chat = () => {
  //나중에 true로 바꿔놓고 데이터 가져오면 false로 설정
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        renderBubble={(props) => {
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
        }}
        user={{_id: 1}}
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
