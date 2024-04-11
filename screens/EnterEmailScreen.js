import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Footer from '../components/Footer';
import Toast from 'react-native-toast-message';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: 'black',
    marginBottom: 30,
    fontFamily: 'ROBOTO',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    fontFamily: 'ROBOTO',
  },
  button: {
    width: windowWidth - 120,
    marginTop: 20,
    backgroundColor: '#6495ED',
    borderRadius: 10,
    fontFamily: 'ROBOTO',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    fontFamily: 'ROBOTO'
  },
  footerText: {
    color: 'grey',
    fontFamily: 'ROBOTO',
  },
});

const EnterEmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleNext = async () => {
    if (email.trim()) {
      try {
        const response = await fetch('http://194.195.116.199/owner_api/user_login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Response message:', data.msg);
          // Successfully sent email to backend
          // Navigate to Verify OTP screen
          if (data.st === 1) {
            // Successfully sent email to backend
            // Navigate to Verify OTP screen
            Toast.show({
              type: 'success',
              text1: data.msg,
              // text2: data.msg,
            });
            navigation.navigate('VerifyOTP', { email });
          } else {
             // If user not found, show an alert and don't navigate
             Toast.show({
              type: 'error',
              text1: data.msg,
              //text2: data.msg,
            });
          }
        } else {
          // Handle error response from backend
          const errorMessage = await response.text();
          Alert.alert('Error', errorMessage || 'Failed to send email. Please try again.');
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error('An error occurred:', error);
        Alert.alert('Error', 'An error occurred. Please try again later.');
      }
    } else {
      // Show an error message for invalid email
      Alert.alert('Error', 'Please enter a valid email address');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={{ marginBottom: 20, color: 'black', fontFamily:'ROBOTO' }}>
        Enter your email address to receive a verification code
      </Text>
      <Text style={{ color: 'black', fontFamily: 'ROBOTO' }}>Email Address</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Submit" titleStyle={{ fontFamily: 'ROBOTO' }} buttonStyle={styles.button} onPress={handleNext} />

      <Footer />
    </View>
  );
};

export default EnterEmailScreen;
