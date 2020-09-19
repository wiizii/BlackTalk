import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  user: string;
}

const UserList = ({user}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userText}>{user}</Text>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    margin: '1%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'white',
  },
  userText: {
    margin: '4%',
    fontWeight: '600',
    color: 'white',
  },
});
