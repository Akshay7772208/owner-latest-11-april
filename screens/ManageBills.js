import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


const ManageBills = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Manage Bills</Text>
     
    </View>
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

export default ManageBills;
