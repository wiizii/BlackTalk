import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {UserContext} from '~/Context/User';
import axios from 'axios';

axios.defaults.baseURL = 'Your Server URL';

const Login = () => {
  const {login} = useContext<IUserContext>(UserContext);
  const [userID, setUserID] = useState<string>('');

  const submit = () => {
    axios.post('/nick', {
      nick: userID,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text style={styles.title}>Black Talk</Text>
      <TextInput
        autoCapitalize={'none'}
        keyboardAppearance={'dark'}
        keyboardType={'default'}
        onChangeText={setUserID}
        placeholder={'6자리 이내로 입력해주세요'}
        maxLength={6}
        style={styles.input}
      />
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => {
          if (userID === '') {
            Alert.alert('Please, enter your nickname!');
          } else {
            login(userID);
            submit();
          }
        }}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>접속</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
    marginTop: '20%',
    marginBottom: '20%',
  },
  input: {
    backgroundColor: '#D8D8D8',
    borderRadius: 4,
    width: '80%',
    height: '5%',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: 'red',
    borderRadius: 4,
    width: '80%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
