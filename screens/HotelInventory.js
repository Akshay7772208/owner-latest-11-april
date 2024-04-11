import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';


const HotelInventory = () => {
  
  return (
    <>
      <TitleBar title="Hotel Inventory"/>
      <View style={styles.container}>
      <Text style={styles.text}>Hotel Inventory</Text>
     
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

export default HotelInventory;
