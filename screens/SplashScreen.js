// // SplashScreen.js
// import React, { useEffect } from 'react';
// import { View, Text, Image } from 'react-native';
// import Footer from '../components/Footer';
// import { FONT_FAMILY } from '../config'; // Import the FONT_FAMILY variable
// //import CustomHeader from '../components/CustomHeader';

// import { lightTheme, darkTheme } from '../constants/ThemeStyles';
// import { useTheme } from '../components/ThemeProvider';
// const SplashScreen = ({ navigation }) => {

//   const containerStyle = {
//     backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
//   };

//   // const PagecontainerStyle = {
//   //   backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
//   // };

//   const textStyle = {
//     color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace('EnterEmail'); // Replace with the name of your main screen
//     }, 3000); // 3000 milliseconds = 3 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
      
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
//         <Text style={{ fontFamily: 'ROBOTO' }}>Splash Screen</Text>
//         <Footer />
//       </View>
//     </>
//   );
// };

// export default SplashScreen;


import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';

const SplashScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  const containerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
  };

  const textStyle = {
    fontFamily: 'ROBOTO',
    color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
  };

 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('EnterEmail');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={containerStyle}>
        <Text style={textStyle}>Splash Screen</Text>
        <Footer  />
      </View>
    </>
  );
};

export default SplashScreen;
