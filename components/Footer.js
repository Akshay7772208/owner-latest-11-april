// Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COMPANY_NAME, VERSION, FONT_FAMILY } from '../config';
import { lightTheme,darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';
const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  footerText: {
    color: 'grey',
 fontFamily:'ROBOTO'
  },
});

const Footer = () => {
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

  const borderColorStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
  };

  return (
    <View style={[styles.footer, containerStyle]}>
       <Text style={[styles.footerText, textStyle]}>{COMPANY_NAME}</Text>
       <Text style={[styles.footerText, textStyle]}>{VERSION}</Text>
    </View>
  );
};

export default Footer;
