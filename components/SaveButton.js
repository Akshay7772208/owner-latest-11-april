// SaveButton.js
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const SaveButton = ({ onPress }) => (
  <TouchableOpacity style={styles.saveButton} onPress={onPress}>
    <View style={styles.buttonContent}>
      <MaterialIcons name="add-task" size={16} color="white" style={styles.icon} />
      <Text style={styles.saveButtonText}>Save</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: COLORS.successButton,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  saveButtonText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
});

export default SaveButton;
