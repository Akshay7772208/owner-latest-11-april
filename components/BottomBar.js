// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { useTheme } from './ThemeProvider';
// import { lightTheme,darkTheme } from '../constants/ThemeStyles';

// const BottomBar = () => {
//   const navigation = useNavigation();
//   const [activeButton, setActiveButton] = useState(null);
//   const { isDarkMode, toggleTheme } = useTheme();

//   const containerStyle = {
//     backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
//   };

//   const PagecontainerStyle = {
//     backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
//   };

//   const textStyle = {
//     color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
//   };

//   const handleIconPress = (screen) => {
//     setActiveButton(screen); // Update the state before navigation
//     navigation.navigate(screen);
//   };

//   const isButtonActive = (button) => activeButton === button;

//   return (
//     <View style={styles.bottomBar}>
//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('ManageMenu') && styles.activeButton,
//         ]}
//         onPress={() => handleIconPress('ManageMenu')}>
//         <MaterialIcons name="restaurant-menu" size={30} color={isButtonActive('ManageMenu') ? '#2196f3' : '#03a9f4'} />
//         <Text style={[styles.buttonText, { color: isButtonActive('ManageMenu') ? '#2196f3' : '#34495e' }]}>Menu</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('ManageStaff') && styles.activeButton,
//         ]}
//         onPress={() => handleIconPress('ManageStaff')}>
//         <MaterialIcons name="people" size={30} color={isButtonActive('ManageStaff') ? '#2196f3' : '#03a9f4'} />
//         <Text style={[styles.buttonText, { color: isButtonActive('ManageStaff') ? '#2196f3' : '#34495e' }]}>Staff</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('AppNavigation') && styles.activeButton,
//         ]}
//         onPress={() => handleIconPress('AppNavigation')}>
//         <MaterialIcons name="home" size={30} color={isButtonActive('AppNavigation') ? '#2196f3' : '#03a9f4'} />
//         <Text style={[styles.buttonText, { color: isButtonActive('AppNavigation') ? '#2196f3' : '#34495e' }]}>Home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('Order') && styles.activeButton,
//         ]}
//         onPress={() => handleIconPress('Order')}>
//         <MaterialIcons name="list-alt" size={30} color={isButtonActive('Order') ? '#2196f3' : '#03a9f4'} />
//         <Text style={[styles.buttonText, { color: isButtonActive('Order') ? '#2196f3' : '#34495e' }]}>Order</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('Profile') && styles.activeButton,
//         ]}
//         onPress={() => handleIconPress('Profile')}>
//         <MaterialIcons name="person" size={30} color={isButtonActive('Profile') ? '#2196f3' : '#03a9f4'} />
//         <Text style={[styles.buttonText, { color: isButtonActive('Profile') ? '#2196f3' : '#34495e' }]}>Profile</Text>
//       </TouchableOpacity>

//       {/* Add other TouchableOpacity components for different screens */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bottomBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: 60,
//     backgroundColor: '#f5f5f5',
//     elevation: 8,
//     position: 'fixed',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1000,
//   },
//   bottomBarButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//     backgroundColor: 'white',
//   },
//   buttonText: {
//     fontSize: 12,
//     marginTop: 5,
//     fontFamily: 'ROBOTO',
//   },
//   activeButton: {
//     backgroundColor: 'white', // Light blue background color for active button
//   },
// });

// export default BottomBar;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { useTheme } from './ThemeProvider';
// import { lightTheme, darkTheme } from '../constants/ThemeStyles';

// const BottomBar = () => {
//   const navigation = useNavigation();
//   const [activeButton, setActiveButton] = useState(null);
//   const { isDarkMode, toggleTheme } = useTheme();

//   const containerStyle = {
//     backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
//   };

//   const PagecontainerStyle = {
//     backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
//   };

//   const textStyle = {
//     color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
//   };
//   const activeButtonStyle = {
//     backgroundColor: isDarkMode ? '#353839' : 'white', // Set background color based on the theme
//   };

  
//   const isButtonActive = (button) => activeButton === button;

//   const iconColor = isDarkMode ? '#2196f3' : isButtonActive('ManageMenu') ? '#2196f3' : '#03a9f4';

//   const handleIconPress = (screen) => {
//     setActiveButton(screen); // Update the state before navigation
//     navigation.navigate(screen);
//   };

//   return (
//     <View style={[styles.bottomBar,containerStyle]}>
//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('ManageMenu') && styles.activeButton,
//           isButtonActive('ManageMenu') && activeButtonStyle,
//         ]}
//         onPress={() => handleIconPress('ManageMenu')}>
//         <MaterialIcons name="restaurant-menu" size={30} color={iconColor} />
//         <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Menu</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('ManageStaff') && styles.activeButton,
//           isButtonActive('ManageStaff') && activeButtonStyle,
//         ]}
//         onPress={() => handleIconPress('ManageStaff')}>
//         <MaterialIcons name="people" size={30} color={iconColor} />
//         <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Staff</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('AppNavigation') && styles.activeButton,
//           isButtonActive('AppNavigation') && activeButtonStyle,
//         ]}
//         onPress={() => handleIconPress('AppNavigation')}>
//         <MaterialIcons name="home" size={30} color={iconColor} />
//         <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('Order') && styles.activeButton,
//           isButtonActive('Order') && activeButtonStyle,
//         ]}
//         onPress={() => handleIconPress('Calender')}>
//         <MaterialIcons name="list-alt" size={30} color={iconColor} />
//         <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Order</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.bottomBarButton,
//           isButtonActive('Profile') && styles.activeButton,
//           isButtonActive('Profile') && activeButtonStyle,
//         ]}
//         onPress={() => handleIconPress('Profile')}>
//         <MaterialIcons name="person" size={30} color={iconColor} />
//         <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Profile</Text>
//       </TouchableOpacity>

//       {/* Add other TouchableOpacity components for different screens */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bottomBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: 60,
//     elevation: 8,
//     position: 'fixed',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1000,
//   },
//   bottomBarButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//   },
//   buttonText: {
//     fontSize: 12,
//     marginTop: 5,
//     fontFamily: 'ROBOTO',
//   },
//   // activeButton: {
//   //   backgroundColor: 'white', // Light blue background color for the active button
//   // },
// });

// export default BottomBar;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';

const BottomBar = () => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState('AppNavigation');
  const { isDarkMode, toggleTheme } = useTheme();

  const containerStyle = {
    backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
  };

  const PagecontainerStyle = {
    backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
  };

  const textStyle = {
    color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
  };

  const isButtonActive = (button) => activeButton === button;

  const iconColor = isDarkMode ? '#2196f3' : '#03a9f4';

  const handleIconPress = (screen) => {
    setActiveButton(screen); // Update the state before navigation
    navigation.navigate(screen);
  };

  return (
    <View style={[styles.bottomBar, containerStyle]}>
      <TouchableOpacity
        style={[
          styles.bottomBarButton,
          isButtonActive('ManageMenu') && styles.activeButton,
          isButtonActive('ManageMenu') && { backgroundColor: isDarkMode ? '#353839' : 'white' },
        ]}
        onPress={() => handleIconPress('ManageMenu')}>
        <MaterialIcons name="restaurant-menu" size={30} color={iconColor} />
        <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.bottomBarButton,
          isButtonActive('ManageStaff') && styles.activeButton,
          isButtonActive('ManageStaff') && { backgroundColor: isDarkMode ? '#353839' : 'white' },
        ]}
        onPress={() => handleIconPress('ManageStaff')}>
        <MaterialIcons name="people" size={30} color={iconColor} />
        <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Staff</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.bottomBarButton,
          isButtonActive('AppNavigation') && styles.activeButton,
          isButtonActive('AppNavigation') && { backgroundColor: isDarkMode ? '#353839' : 'white' },
        ]}
        onPress={() => handleIconPress('AppNavigation')}>
        <MaterialIcons name="home" size={30} color={iconColor} />
        <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.bottomBarButton,
          isButtonActive('Order') && styles.activeButton,
          isButtonActive('Order') && { backgroundColor: isDarkMode ? '#353839' : 'white' },
        ]}
        onPress={() => handleIconPress('Order')}>
        <MaterialIcons name="list-alt" size={30} color={iconColor} />
        <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Order</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.bottomBarButton,
          isButtonActive('Profile') && styles.activeButton,
          isButtonActive('Profile') && { backgroundColor: isDarkMode ? '#353839' : 'white' },
        ]}
        onPress={() => handleIconPress('Profile')}>
        <MaterialIcons name="person" size={30} color={iconColor} />
        <Text style={[styles.buttonText, textStyle, { color: iconColor }]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    elevation: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  bottomBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'ROBOTO',
  },
  activeButton: {
    backgroundColor: 'white', // Light blue background color for the active button
  },
});

export default BottomBar;
