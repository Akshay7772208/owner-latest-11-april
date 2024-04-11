// DeleteUpdateButtons.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DeleteUpdateButton = ({ onDelete, onUpdate }) => {
  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <View style={styles.buttonContent}>
          <MaterialIcons name="delete" size={19} color="white" />
          <Text style={styles.buttonText1}>Delete</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.updateButton} onPress={onUpdate}>
        <View style={styles.buttonContent}>
          <MaterialIcons name="task-alt" size={19} color="white" />
          <Text style={styles.buttonText}>Update</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    borderColor: 'red',
    borderWidth: 1,
    marginRight: 5,
   
  },
  updateButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
   
    
  },
  buttonText: {
    fontFamily: 'ROBOTO',
    color: 'white',
    fontSize: 16,
    marginLeft: 3,
  },
  buttonText1: {
    fontFamily: 'ROBOTO',
    color: 'white',
    fontSize: 16,
    marginLeft: 3,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DeleteUpdateButton;
