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
        <Text>보내기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatRoomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: '8%',
  },
  sendButton: {
    position: 'absolute',
    right: '4%',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderRadius: 30,
    height: '67%',
    justifyContent: 'center',
    width: '15%',
  },
  textInput: {
    padding: '5%',
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    width: '75%',
    height: '60%',
    paddingHorizontal: 16,
  },
});
