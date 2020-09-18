import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  alignToRight: boolean;
  userID: string;
  message: string;
}

const MessageBubble = ({alignToRight, userID, message}: Props) => {
  return (
    <View
      style={[
        styles.container,
        alignToRight ? styles.containerOnRight : styles.containerOnLeft,
      ]}>
      <View
        style={[styles.nickNameContainer, alignToRight && styles.alignToRight]}>
        <Text
          style={[
            styles.nickName,
            alignToRight ? styles.nickNameOnRight : styles.nickNameOnLeft,
          ]}>
          {userID}
        </Text>
      </View>
      <View style={[styles.textContainer, alignToRight && styles.alignToRight]}>
        <Text
          style={[
            styles.text,
            alignToRight ? styles.textOnRight : styles.textOnLeft,
          ]}>
          {message}
        </Text>
      </View>
    </View>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 14,
  },
  containerOnLeft: {
    alignItems: 'flex-start',
  },
  containerOnRight: {
    alignItems: 'flex-end',
  },
  alignToRight: {
    justifyContent: 'flex-end',
  },
  nickNameContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  nickName: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  nickNameOnLeft: {
    color: 'white',
  },
  nickNameOnRight: {
    color: 'yellow',
  },
  textContainer: {
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 6,
    alignItems: 'center',
    maxWidth: '60%',
  },
  text: {
    padding: 6,
    fontSize: 15,
    fontWeight: '600',
  },
  textOnLeft: {
    color: 'white',
  },
  textOnRight: {
    color: 'yellow',
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
