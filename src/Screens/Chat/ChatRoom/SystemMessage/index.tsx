import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  body: any;
  time: any;
}

const SystemMessage = ({body, time}: Props) => {
  return (
    <View style={styles.systemMessage}>
      <Text style={styles.systemMessageText}>{body}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.systemMessageText}>{time}</Text>
      </View>
    </View>
  );
};

export default SystemMessage;

const styles = StyleSheet.create({
  systemMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  systemMessageText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  timeContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 4,
  },
});
