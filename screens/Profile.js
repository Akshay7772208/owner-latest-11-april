import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Footer from '../components/Footer';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';

const ProfileScreen = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleToggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const containerStyle = {
    backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
  };

  const PagecontainerStyle = {
    backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
  };

  const textStyle = {
    color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
  };

  const textStyle1 = {
    color: isDarkMode ? 'orange' : 'orange',
  };

  return (
    <>
      <TitleBar title="Profile" />
      <View style={[style.pageContainer, PagecontainerStyle]}>
        <ScrollView contentContainerStyle={[style.scrollContainer, PagecontainerStyle]}>
          <View style={[style.container, containerStyle]}>
            <View style={[styles.container, containerStyle]}>
              <Text style={[styles.nameText, textStyle]}>John Doe</Text>

              <View style={[styles.optionsCard, containerStyle]}>
                <TouchableOpacity
                  style={[styles.optionContainer, containerStyle]}
                  onPress={handleToggleNotifications}
                >
                  <View style={[styles.optionIconContainer, containerStyle]}>
                    <MaterialIcons name="notifications" size={24} color={textStyle.color} />
                  </View>
                  <Text style={[styles.optionLabel, textStyle]}>Notifications</Text>
                  <View style={styles.toggleContainer}>
                    <MaterialIcons
                      name={isNotificationsEnabled ? 'toggle-off' : 'toggle-on'}
                      size={34}
                      color={isNotificationsEnabled ? 'green' : 'red'}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.optionContainer, containerStyle]} >
                  <View style={[styles.optionIconContainer, containerStyle]}>
                    <MaterialIcons name="dark-mode" size={24} color={textStyle.color} />
                  </View>
                  <Text style={[styles.optionLabel, textStyle]}>Theme</Text>
                   <View style={styles.toggleContainer}>
                    <MaterialIcons
                    onPress={toggleTheme}
                      name={isDarkMode ? 'toggle-on' : 'toggle-off'}
                      size={34}
                      color={isDarkMode ? 'white' : 'black'}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.optionContainer, containerStyle]}>
                  <View style={[styles.optionIconContainer, containerStyle]}>
                    <MaterialIcons name="settings" size={24} color={textStyle.color} />
                  </View>
                  <Text style={[styles.optionLabel, textStyle]}>Settings</Text>
                  <View style={styles.forwardIconContainer}>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color={textStyle.color} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.optionContainer, containerStyle]}>
                  <View style={[styles.optionIconContainer, containerStyle]}>
                    <MaterialIcons name="lock" size={24} color={textStyle.color} />
                  </View>
                  <Text style={[styles.optionLabel, textStyle]}>Login</Text>
                  <View style={styles.forwardIconContainer}>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color={textStyle.color} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={[styles.logoutButtonContainer, containerStyle]}>
                <Text style={[styles.logoutButtonText, textStyle1]}>Logout</Text>
              </View>
              <Footer />
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'ROBOTO',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily: 'ROBOTO',
  },
  optionsCard: {
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
     borderRadius:10,
    marginTop: 20,
    elevation: 5, // Box shadow for Android
    shadowColor: 'black', // Box shadow for iOS
     shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionIconContainer: {
    marginRight: 15,
  },
  optionLabel: {
    fontSize: 16,
    flex: 1,
    fontFamily:'ROBOTO'
  },
  forwardIconContainer: {
    marginLeft: 15,
  },
 
  logoutButtonContainer: {
    // backgroundColor: 'orange',
    // borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'ROBOTO',
  },
  toggleContainer: {
    marginLeft: 'auto', // Push the toggle icon to the right
  },
});

export default ProfileScreen;
