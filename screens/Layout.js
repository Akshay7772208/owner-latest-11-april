import React from 'react';
import { View, StyleSheet } from 'react-native';
import TitleBar from '../components/TitleBar';
import Footer from '../components/BottomBar';

const Layout = () => {
  return (
    <View style={styles.container}>
      <TitleBar title="Your Title" />
      <View style={styles.content}>
        {/* <View style={styles.card}><ManageStaffScreen /></View> */}
        
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Grey background color outside the card
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff', // White background color for the card
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#ccc', // Grey border color
    padding: 20,
    width: '100%',
    maxWidth: 400, // Example width, adjust as needed
  },
});

export default Layout;
