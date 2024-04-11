// AddButton.js
import React from 'react';
import { TouchableOpacity, Image,StyleSheet } from 'react-native';
import { add } from '../constants/icons';


const AddButton = ({ onPress }) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <Image source={add} resizeMode="contain" style={styles.addButton} />
  </TouchableOpacity>
   
);
const styles = StyleSheet.create({
    addButton: {
        width: 50,
        height: 50,
        //marginLeft: 10,
        tintColor:'white'
      },
      floatingButton: {
        position: 'absolute',
        bottom: 70,
        right: 20,
        backgroundColor: '#4CAF50', // Change the background color of the button
        borderRadius: 50, // Adjust the border radius for a circle
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });

export default AddButton;
