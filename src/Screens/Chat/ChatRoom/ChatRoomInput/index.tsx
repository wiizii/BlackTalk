import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

interface Props {
  onSubmit: (text: string) => void;
}

const ChatRoomInput = ({onSubmit}: Props) => {
  const [text, setText] = useState<string>('');

  const submit = () => {
    onSubmit(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setText}
        onSubmitEditing={submit}
        placeholder="Type message"
        placeholderTextColor="#BBBBBB"
        style={styles.textInput}
        value={text}
      />

      <TouchableOpacity style={styles.sendButton} onPress={submit}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatRoomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: '12%',
    marginHorizontal: '3%',
  },
  sendButton: {
    backgroundColor: 'yellow',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  },
  textInput: {
    padding: '3%',
    fontSize: 14,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    width: '85%',
  },
});
