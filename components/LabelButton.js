// TypeButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { lightTheme,darkTheme } from '../constants/ThemeStyles';

const LabelButton = ({ isDarkMode, selectedRole, item, flatListItemStyle, textStyle, setSelectedRole, onPress }) => {
  const shadowColor = isDarkMode ? darkTheme.shadowColor : lightTheme.shadowColor;
  const shadowOpacity = isDarkMode ? darkTheme.shadowOpacity : lightTheme.shadowOpacity;

  return (
    <TouchableOpacity
      style={{
        marginLeft: 15,
        padding: 15,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: selectedRole === item ? 'lightblue' : flatListItemStyle.backgroundColor,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: shadowColor,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: shadowOpacity,
        shadowRadius: 4.65,
        elevation: 6,
        height: 40,
      }}
      onPress={() => {
        setSelectedRole(item);
        onPress();  // Execute the provided onPress function
      }}
    >
      <Text style={{ color: selectedRole === item ? 'white' : textStyle.color, marginTop: 5, fontSize: 14, fontWeight: 'bold', fontFamily: 'ROBOTO' }}>{item}</Text>
    </TouchableOpacity>
  );
};

export default LabelButton;
