import React from 'react';
import {ScrollView, SafeAreaView, Text, StyleSheet} from 'react-native';

const Drawer = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={styles.container}>test</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
