// // EditButton.js
// import React from 'react';
// import { TouchableOpacity, Image,StyleSheet } from 'react-native';
// import icons from '../constants/icons';
// import style from '../constants/style';

// const EditButton = ({ onPress }) => (
//   <TouchableOpacity onPress={onPress}>
//     <Image source={icons.edit} resizeMode="contain" style={styles.editButton} />
//   </TouchableOpacity>
// );
// const styles = StyleSheet.create({
// editButton:{
//     width: 30,
//     height: 30,
//     marginLeft: 10,
//     tintColor:'black'
//   },
// }
// );

// export default EditButton;

// EditButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import icons from '../constants/icons';
import { useTheme } from '../components/ThemeProvider';

const EditButton = ({ onPress }) => {
  const { isDarkMode } = useTheme();

  const editButtonStyle = {
    tintColor: isDarkMode ? 'white' : 'black',
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icons.edit} resizeMode="contain" style={{ ...styles.editButton, ...editButtonStyle }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  editButton: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default EditButton;

