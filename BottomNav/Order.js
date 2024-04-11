import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';


const Order = () => {
  return (
    <>
    <TitleBar title="Order"/>
    <View style={styles.container}>
      <Text style={styles.text}>Manage Order</Text>
     
    </View>
    <BottomBar/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex: 1 to make the container take up the entire screen
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular', // Change this to the desired Roboto style
    fontSize: 20,
  },
});

export default Order;


