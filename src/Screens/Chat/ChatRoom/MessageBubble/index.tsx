import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  alignToRight: boolean;
  userID: string;
  message: string;
}

const MessageBubble = ({alignToRight, userID, message}: Props) => {
  return (
    <View style={(styles.container, alignToRight && styles.containerOnRight)}>
      <View
        style={[styles.nickNameContainer, alignToRight && styles.alignToRight]}>
        <Text style={[styles.nickName]}>{userID}</Text>
      </View>
      <View style={[styles.bubble, alignToRight && styles.alignToRight]}>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 16,
    backgroundColor: 'red',
  },
  containerOnRight: {
    alignItems: 'flex-end',
  },
  alignToRight: {
    justifyContent: 'flex-end',
  },
  nickNameContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  nickName: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: '600',
  },
  bubble: {
    width: '40%',
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  bubbleOnRight: {},
  userText: {
    color: 'yellow',
    marginTop: 8,
    fontSize: 11,
  },
  bubbleMetaTextOnRight: {
    textAlign: 'right',
  },
  bubbleTextContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  bubbleTextContainerHighlighted: {
    backgroundColor: '#EEEEEE',
  },
  systemMessage: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  systemMessageText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
