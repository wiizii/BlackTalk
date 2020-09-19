import React from 'react';
import {ScrollView, SafeAreaView, Text, StyleSheet} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

interface Props {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const Drawer = ({props}: Props) => {
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
