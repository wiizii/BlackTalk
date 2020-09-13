import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {List, Divider} from 'react-native-paper';
import Loading from '~/Screens/Loading';

interface Props {}

const Home = () => {
  //나중에 true로 바꿔놓고 데이터 가져오면 false로 설정
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  return <View style={styles.container}></View>;
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
});
