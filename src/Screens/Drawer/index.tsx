import React, {useState, useContext} from 'react';
import {
  View,
  FlatList,
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
import UserList from './UserList';

interface Props {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const Drawer = ({props}: Props) => {
  const {logout} = useContext<IUserContext>(UserContext);
  const [users, setUsers] = useState<string[]>(['wizi', 'other']);

  const renderItem = ({item}: any) => {
    return <UserList user={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.userListText}>UserList</Text>
      <View style={styles.userListContainer}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
    backgroundColor: '#222222',
  },
  userListText: {
    color: 'white',
    marginTop: '15%',
    fontSize: 24,
    fontWeight: '600',
    margin: '4%',
  },
  userListContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  logoutContainer: {
    flexDirection: 'row',
    marginBottom: '8%',
    margin: '4%',
  },
  logoutText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
  },
});
