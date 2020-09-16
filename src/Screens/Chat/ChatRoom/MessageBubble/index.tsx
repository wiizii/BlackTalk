import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  alignToRight: boolean;
  highlighted: boolean;
  userID: string;
  message: string;
}

const MessageBubble = ({alignToRight, highlighted, userID, message}: Props) => {
  return (
    <View style={[styles.bubble, alignToRight && styles.bubbleOnRight]}>
      <View
        style={[
          styles.bubbleTextContainer,
          highlighted && styles.bubbleTextContainerHighlighted,
        ]}>
        <Text>{message}</Text>
        <Text
          style={[
            styles.bubbleMetaText,
            alignToRight && styles.bubbleMetaTextOnRight,
          ]}>
          {userID}
        </Text>
      </View>
    </View>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  bubbleOnRight: {
    justifyContent: 'flex-end',
  },
  bubbleMetaText: {
    color: '#A97B78',
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
  profileImage: {
    height: 45,
    width: 45,
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
  container: {
    backgroundColor: '#1BA2FB',
    flex: 1,
    paddingHorizontal: 16,
  },
});
