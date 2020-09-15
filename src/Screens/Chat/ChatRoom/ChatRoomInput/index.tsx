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
    <View>
      <TextInput
        onChangeText={setText}
        onSubmitEditing={submit}
        placeholder="Type message ..."
        placeholderTextColor="#DDDDD"
        style={styles.textInput}
        value={text}
      />

      <TouchableOpacity style={styles.sendButton} onPress={submit}>
        <Text>send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatRoomInput;

const styles = StyleSheet.create({
  container: {},
  sendButton: {
    position: 'absolute',
    right: 16,
    bottom: 30,
    alignItems: 'center',
    backgroundColor: '#FDBDB9',
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    height: 60,
    paddingHorizontal: 16,
  },
});
