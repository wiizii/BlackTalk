import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Test = () => {
  const [counter, setCounter] = useState(1);

  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button title={'button'} onPress={add} />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
