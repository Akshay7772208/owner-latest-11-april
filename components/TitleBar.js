// // TitleBar.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import CustomSidebar from './CustomSidebar';
// import { useNavigation } from '@react-navigation/native';

// const TitleBar = ({ title, showBackIcon = true }) => {
//   const navigation = useNavigation();
//   const [isSidebarVisible, setSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const closeSidebar = () => {
//     setSidebarVisible(false);
//   };

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={{ backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
//       {/* Display the back icon if showBackIcon is true */}
//       {showBackIcon && (
//         <TouchableOpacity onPress={handleBackPress}>
//           <MaterialIcons name="arrow-back" size={30} color="white" />
//         </TouchableOpacity>
//       )}

//       {/* Display the title at the center */}
//       <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', flex: 1, textAlign: 'center' }}>{title}</Text>
      
//       {/* Display the menu icon at the right side */}
//       <TouchableOpacity onPress={toggleSidebar}>
//         <MaterialIcons name="menu" size={30} color="white" />
//       </TouchableOpacity>
      
//       {/* Display the CustomSidebar if isSidebarVisible is true */}
//       {isSidebarVisible && <CustomSidebar navigation={navigation} closeSidebar={closeSidebar} />}
//     </View>
//   );
// };

// export default TitleBar;

// TitleBar.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import CustomSidebar from './CustomSidebar';
// import { useNavigation } from '@react-navigation/native';
// import { useTheme } from './ThemeProvider'; // Import the useTheme hook

// const TitleBar = ({ title, showBackIcon = true }) => {
//   const navigation = useNavigation();
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const { isDarkMode } = useTheme(); // Retrieve the isDarkMode property from the theme

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const closeSidebar = () => {
//     setSidebarVisible(false);
//   };

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   // Use dynamic styles based on the theme
//   const dynamicStyles = StyleSheet.create({
//     container: {
//       backgroundColor: isDarkMode ? '#353839' : 'blue',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: 10,
  
//     },
//     titleText: {
//       color: 'white',
//       fontSize: 18,
//       fontWeight: 'bold',
//       flex: 1,
//       textAlign: 'center',
//       fontFamily:'ROBOTO'
//     },
//     iconColor: {
//       color: 'white',
//     },
//   });

//   return (
//     <View style={dynamicStyles.container}>
//       {/* Display the back icon if showBackIcon is true */}
//       {showBackIcon && (
//         <TouchableOpacity onPress={handleBackPress}>
//           <MaterialIcons name="arrow-back" size={30} style={dynamicStyles.iconColor} />
//         </TouchableOpacity>
//       )}

//       {/* Display the title at the center */}
//       <Text style={dynamicStyles.titleText}>{title}</Text>

//       {/* Display the menu icon at the right side */}
//       <TouchableOpacity onPress={toggleSidebar}>
//         <MaterialIcons name="menu" size={30} style={dynamicStyles.iconColor} />
//       </TouchableOpacity>

//       {/* Display the CustomSidebar if isSidebarVisible is true */}
//       {isSidebarVisible && <CustomSidebar navigation={navigation} closeSidebar={closeSidebar} />}
//     </View>
//   );
// };

// export default TitleBar;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomSidebar from './CustomSidebar';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './ThemeProvider'; // Import the useTheme hook

const TitleBar = ({ title, showBackIcon = true }) => {
  const navigation = useNavigation();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const { isDarkMode } = useTheme(); // Retrieve the isDarkMode property from the theme

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  // Use dynamic styles based on the theme
  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#353839' : 'blue',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      position: 'absolute', // Make the TitleBar fixed at the top
      top: 0, // Position it at the top of the screen
      width: '100%', // Occupy the full width
      zIndex: 999, // Ensure it appears above other content
    },
    titleText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center',
      fontFamily: 'ROBOTO',
    },
    iconColor: {
      color: 'white',
    },
  });

  return (
    <View style={dynamicStyles.container}>
      {/* Display the back icon if showBackIcon is true */}
      {showBackIcon && (
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialIcons name="arrow-back" size={30} style={dynamicStyles.iconColor} />
        </TouchableOpacity>
      )}

      {/* Display the title at the center */}
      <Text style={dynamicStyles.titleText}>{title}</Text>

      {/* Display the menu icon at the right side */}
      <TouchableOpacity onPress={toggleSidebar}>
        <MaterialIcons name="menu" size={30} style={dynamicStyles.iconColor} />
      </TouchableOpacity>

      {/* Display the CustomSidebar if isSidebarVisible is true */}
      {isSidebarVisible && <CustomSidebar navigation={navigation} closeSidebar={closeSidebar} />}
    </View>
  );
};

export default TitleBar;
