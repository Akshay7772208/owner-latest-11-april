import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Alert,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Footer from '../components/Footer';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  otpDigit: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 5,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    fontFamily: 'ROBOTO',
  },
  button: {
    width: windowWidth - 120,
    marginTop: 20,
    backgroundColor: '#6495ED',
    borderRadius: 10,
    fontFamily: 'ROBOTO',
  },
  resendContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'ROBOTO',
  },
  resendText: {
    marginRight: 5,
    fontFamily: 'ROBOTO',
  },
  resendLink: {
    color: '#4B0082',
    textDecorationLine: 'underline',
    fontFamily: 'ROBOTO',
  },
});

const VerifyOTPScreen = ({ route, navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email]=useState(route.params.email)
  const handleVerify = async () => {
    const enteredOtp = otp.join('');

    try {
      const response = await fetch('http://194.195.116.199/owner_api/verify_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp:enteredOtp }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.st === 1) {
          console.log(data.msg)
          navigation.navigate('ManageStaff');
        } else if (data.st === 2) {
          console.log(data.msg)
          //Alert.alert('Error', data.msg);
        } else {
          Alert.alert('Error', 'An error occurred. Please try again.');
        }
      } else {
        Alert.alert('Error', 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  const handleDigitChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (index < 5 && value !== '') {
      // Move to the next input
      document.getElementById(`otpInput_${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  const handleResend = () => {
    // Handle resend logic here
    //alert('Resend functionality to be implemented.');
    Toast.show({
      type: 'success',
      text1: 'OTP Resent',
      visibilityTime: 5000,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black', fontFamily: 'ROBOTO' }}>Enter the OTP sent to {email}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpDigit}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleDigitChange(index, value)}
            id={`otpInput_${index}`}
          />
        ))}
      </View>
      <View style={{ ...styles.resendContainer, marginBottom: 40 }}>
        <Text style={styles.resendText}>Didn't receive the code?</Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={{ ...styles.resendLink, color: 'blue', fontFamily: 'ROBOTO' }}>Resend</Text>
        </TouchableOpacity>
      </View>
      <Button title="Submit" titleStyle={{ fontFamily: 'ROBOTO' }} buttonStyle={styles.button} onPress={handleVerify} />

      <Footer />
    </View>
  );
};

export default VerifyOTPScreen;
