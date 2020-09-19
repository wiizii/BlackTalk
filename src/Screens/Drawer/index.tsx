import React, {useState, useContext} from 'react';
import {
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {UserContext} from '~/Context/User';

interface Props {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const Drawer = ({props}: Props) => {
  const {logout} = useContext<IUserContext>(UserContext);
  const [users, setUsers] = useState<string[]>(['wizi']);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.userList}>UserList</Text>
      <ScrollView style={styles.userListContainer}>
        <SafeAreaView>
          <Text>test</Text>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity style={styles.logoutContainer} onPress={() => logout()}>
        <Image source={require('~/Assets/Images/exit.png')} />
        <Text style={styles.logoutText}> Logout </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  userList: {
    marginTop: '15%',
    fontSize: 20,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  userListContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoutContainer: {
    flexDirection: 'row',
    marginBottom: '8%',
  },
  logoutText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
  },
});
