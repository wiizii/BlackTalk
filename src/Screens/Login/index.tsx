import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {UserContext} from '~/Context/User';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 18,
    color: 'red',
    margin: '20%',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    paddingVertical: '3%',
    paddingHorizontal: '20%',
    alignItems: 'center',
    margin: '20%',
  },
  buttonContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: '3%',
    paddingHorizontal: '40%',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

axios.defaults.baseURL = 'http://172.30.1.29:80';
interface Props {}

const Login = ({}: Props) => {
  const {login, logout} = useContext<IUserContext>(UserContext);
  const [userID, setUserID] = useState<string>('');

  const submit = () => {
    axios.post('/nick', {
      nick: userID,
    });
  };

  const showAlert = () => {
    Alert.alert('주의');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Black Talk</Text>
      <TextInput
        onChangeText={setUserID}
        placeholder={'6자리 이내로 입력해주세요'}
        style={styles.input}
      />
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => {
          login(userID);
          submit();
          showAlert();
        }}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>접속</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
