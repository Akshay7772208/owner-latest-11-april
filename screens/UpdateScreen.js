// import React, { useState } from 'react';
// import {
//   View,
//   Image,
//   Text as RNText,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Platform,
//   ScrollView
// } from 'react-native';
// import Footer from '../components/Footer';
// import { icons } from '../constants';
// import { FONT_FAMILY } from '../config'; // Import the FONT_FAMILY variable
// import { MaterialIcons } from '@expo/vector-icons';
// import DatePicker from 'react-native-datepicker';

// // Import Picker from 'react-native' on mobile and 'react-native-web' on web
// import { Picker as RNPicker } from 'react-native';
// import TitleBar from '../components/TitleBar';
// import ExtraScreen from './ExtraScreen';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';
// import DeleteUpdateButton from '../components/DeleteUpdateButton';
// const Picker =
//   Platform.OS === 'web' ? require('react-native-web').Picker : RNPicker;

// const Text = (props) => (
//   <RNText {...props} style={[props.style, { fontFamily: FONT_FAMILY }]} />
// ); // Use FONT_FAMILY

// const UpdateScreen = ({ route, navigation }) => {
//   const staffData = route && route.params ? route.params.staffData : {};

//   const [name, setName] = useState(staffData.name || '');
//   const [mobile, setMobile] = useState(staffData.mobile || '');
//   const [address, setAddress] = useState(staffData.address || '');
//   const [role, setRole] = useState(staffData.role || '');
//   const [dob, setDob] = useState(staffData.dob || '');
//   const [aadharNo, setAadharNo] = useState(staffData.aadharNo || '');
 
//   const handleDateChange = (date) => {
//     setDob(date);
//     setDobError('');
//   };

//   const [nameError, setNameError] = useState('');
//   const [mobileError, setMobileError] = useState('');
//   const [addressError, setAddressError] = useState('');
//   const [roleError, setRoleError] = useState('');
//   const [dobError, setDobError] = useState('');
//   const [aadharNoError, setAadharNoError] = useState('');
//   const [photoError, setPhotoError] = useState(false);

//   const [selectedImage, setSelectedImage] = useState(
//     staffData.selectedImage || null
//   );

//   const handleUpdate = () => {
//     // Validate fields
//     if (!name || !mobile || !address || !role || !dob || !aadharNo) {
//       // Display error messages for empty fields
//       setNameError(name ? '' : 'Name is required');
//       setMobileError(mobile ? '' : 'Mobile is required');
//       setAddressError(address ? '' : 'Address is required');
//       setRoleError(role ? '' : 'Role is required');
//       setDobError(dob ? '' : 'Date of Birth is required');
//       setAadharNoError(aadharNo ? '' : 'Aadhar Number is required');

//       // Check for no photo selected
//       if (!selectedImage && !photoError) {
//         setPhotoError(true);
//       } else {
//         setPhotoError(false);
//       }

//       return;
//     }

//     // Implement your update logic here
//     console.log('Update pressed', {
//       name,
//       mobile,
//       address,
//       role,
//       dob,
//       aadharNo,
//       selectedImage,
//     });

//     // Reset photo error state after a successful update
//     setPhotoError(false);

//     // You can navigate back to the previous screen if needed
//     // navigation.goBack();
//     navigation.navigate('AppNavigation');
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDelete = () => {
//     console.log('Data to be deleted');
//   };

//   return (
//     <>
//       <TitleBar title="Update Staff" />
//       <View style={style.pageContainer}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//           {/* <Text style={styles.title}>Update Staff</Text> */}

//           <Text style={styles.label}>

// <Text style={{ color: "red" }}>*</Text>Name:
//           </Text>
//           <TextInput
//             style={[styles.input, nameError ? styles.inputError : null]}
//             value={name}
//             placeholder="Enter Name"
//             onChange={(e) => {
//               setName(e.target.value);
//               setNameError('');
//             }}
//           />
//           {nameError ? (
//             <Text style={styles.errorText}>{nameError}</Text>
//           ) : null}

//           <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Mobile:
//           </Text>
//           <TextInput
//             style={[styles.input, mobileError ? styles.inputError : null]}
//             value={mobile}
//             placeholder="Enter Mobile"
//             onChange={(e) => {
//               setMobile(e.target.value);
//               setMobileError('');
//             }}
//           />
//           {mobileError ? (
//             <Text style={styles.errorText}>{mobileError}</Text>
//           ) : null}
 

//           <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Role:
//           </Text>
//           <Picker
//             selectedValue={role}
//             onValueChange={(itemValue) => {
//               setRole(itemValue);
//               setRoleError('');
//             }}
//             style={{ ...styles.input, backgroundColor: 'white' }}
//           >
//             <Picker.Item label="Select Role" value="" />
//             <Picker.Item label="Manager" value="Manager" />
//             <Picker.Item label="Waiter" value="Waiter" />
//             <Picker.Item label="Chef" value="Chef" />
//           </Picker>
//           {roleError ? (
//             <Text style={styles.errorText}>{roleError}</Text>
//           ) : null}

//           <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Date of Birth:
//           </Text>
//           <TextInput
//             style={[styles.input, dobError ? styles.inputError : null]}
//             value={dob}
//             placeholder="Enter Date of Birth"
//             onChange={(e) => {
//               setDob(e.target.value);
//               setDobError('');
//             }}
//           />
//           {dobError ? (
//             <Text style={styles.errorText}>{dobError}</Text>
//           ) : null}

//           <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Aadhar Number:
//           </Text>
//           <TextInput
//             style={[styles.input, aadharNoError ? styles.inputError : null]}
//             value={aadharNo}
//             placeholder="Enter Aadhar Number"
//             onChange={(e) => {
//               setAadharNo(e.target.value);
//               setAadharNoError('');
//             }}
//           />
//           {aadharNoError ? (
//             <Text style={styles.errorText}>{aadharNoError}</Text>
//           ) : null}

// <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Address:
//           </Text>
// <TextInput
//   style={[styles.input, styles.textArea]} // Apply the textArea style
//   value={address}
//   placeholder="Enter Address"
//   multiline={true}
//   numberOfLines={4} // Set the desired number of lines
//   onChangeText={(text) => setAddress(text)}
// />

// {addressError ? <Text style={styles.errorText}>{addressError}</Text> : null}

//           <Text style={styles.label}>Photo:</Text>
//           <View>
//             {selectedImage ? (
//               <Image
//                 source={{ uri: selectedImage }}
//                 style={styles.selectedImage}
//               />
//             ) : null}
//             <TouchableOpacity
//               onPress={() => document.getElementById('browseInput').click()}
//               style={styles.browseLabel}
//             >
//               <Text>Browse</Text>
//             </TouchableOpacity>
//             <input
//               type="file"
//               id="browseInput"
//               accept="image/*"
//               style={styles.browseInput}
//               onChange={handlePhotoChange}
//             />
//             {photoError ? (
//               <Text style={styles.errorText}>Photo is required</Text>
//             ) : null}
//           </View>

//           {/* Buttons in the same row */}
//           {/* <View style={styles.buttonRow}>
//           <TouchableOpacity onPress={handleDelete} style={style.deleteButton}>
//           <MaterialIcons name="delete" size={16} color="black" />
//           <Text style={{fontFamily:'ROBOTO'}}>Delete</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={style.updateButton} onPress={handleUpdate}>
//         <MaterialIcons name="task-alt" size={16} color="black" />
//           <Text style={style.buttonText}>Update</Text>
//         </TouchableOpacity>
//           </View> */}
//           <DeleteUpdateButton onDelete={handleDelete} onUpdate={handleUpdate} />
//         </View>
//       </ScrollView>
//       </View>
      
//       <BottomBar />
      
//     </>
//   );
// };

// const styles = StyleSheet.create({
  
//   // scrollContainer: {
//   //   flexGrow: 1,
//   //   //justifyContent: 'space-between',
//   //   paddingBottom: 70, // Adjust this value to set the margin at the bottom
//   // },
//   // container: {
//   //   flex: 1,
//   //   padding: 20,
//   //   width: '95%',
//   //   marginHorizontal: 'auto',
//   //   backgroundColor: 'white',
//   //   borderWidth: 1,
//   //   borderColor: '#333',
//   //   borderRadius: 10,
//   //   overflow: 'hidden',
//   //   marginTop: 10,
//   //   marginBottom: 10,
//   //   shadowColor: '#000',
//   //   shadowOffset: {
//   //     width: 0,
//   //     height: 4,
//   //   },
//   //   shadowOpacity: 0.1,
//   //   shadowRadius: 4,
//   //   elevation: 4,
//   // },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     fontFamily: FONT_FAMILY,
//   },
//   label: {
//     fontSize: 16,
//     marginVertical: 5,
//     fontFamily: FONT_FAMILY,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     fontFamily: FONT_FAMILY,
//   },
//   inputError: {
//     borderColor: 'red',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//     fontFamily: FONT_FAMILY,
//   },
//   selectedImage: {
//     width: '100%',
//     height: 150,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   browseLabel: {
//     backgroundColor: '#9e9e9e',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   browseInput: {
//     display: 'none',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     marginTop: 20,
//     justifyContent: 'space-between',
//   },
//   textArea: {
//     height: 80, // Set the desired height for multiline input
//     textAlignVertical: 'top', // Align text to the top
//   },
//   // deleteButton: {
//   //   fontFamily: 'ROBOTO', // Add fontFamily here
//   //   backgroundColor: 'transparent',
//   //   padding: 10,
//   //   borderRadius: 5,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   width: '45%',
//   //   borderColor: 'red',
//   //   borderWidth: 1,
//   // },
//   // updateButton: {
//   //   fontFamily: 'ROBOTO', // Add fontFamily here
//   //   backgroundColor: '#4CAF50',
//   //   padding: 10,
//   //   borderRadius: 5,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   width: '45%',
//   // },
//   // buttonText: {
//   //   fontFamily: 'ROBOTO', // Add fontFamily here
//   //   color: 'white',
//   //   fontSize: 16,}
// });

// export default UpdateScreen;


import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  ScrollView
} from 'react-native';
import Footer from '../components/Footer';
import { icons } from '../constants';
import { FONT_FAMILY } from '../config'; // Import the FONT_FAMILY variable
import { MaterialIcons } from '@expo/vector-icons';

// Import Picker from 'react-native' on mobile and 'react-native-web' on web
//import { Picker as RNPicker } from 'react-native';
import { Picker as RNPicker} from "@react-native-picker/picker";
import TitleBar from '../components/TitleBar';
import ExtraScreen from './ExtraScreen';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import DeleteUpdateButton from '../components/DeleteUpdateButton';
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
const Picker =
  Platform.OS === 'web' ? require('react-native-web').Picker : RNPicker;

  const UpdateScreen = ({ route, navigation }) => {
    const { isDarkMode, toggleTheme } = useTheme();
  
    const containerStyle = {
      backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
    };
  
    const pageContainerStyle = {
      backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
    };
  
    const textStyle = {
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    };
   

    const dropdownStyle = {
      color: isDarkMode ? darkTheme.dropdownColor : lightTheme.dropdownColor,
      backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
    };

  const staffData = route && route.params ? route.params.staffData : {};

  const [name, setName] = useState(staffData.name || '');
  const [mobile, setMobile] = useState(staffData.mobile || '');
  const [address, setAddress] = useState(staffData.address || '');
  const [role, setRole] = useState(staffData.role || '');
  const [dob, setDob] = useState(staffData.dob || '');
  const [aadharNo, setAadharNo] = useState(staffData.aadhar_number || '');
 
  const handleDateChange = (date) => {
    setDob(date);
    setDobError('');
  };

  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [dobError, setDobError] = useState('');
  const [aadharNoError, setAadharNoError] = useState('');
  const [photoError, setPhotoError] = useState(false);

  const [selectedImage, setSelectedImage] = useState(
    staffData.photo || null
  );

  const handleUpdate = () => {
    // Validate fields

    const nameRegex = /^[a-zA-Z\s]+$/;
    const mobileRegex = /^[0-9]+$/;
    const aadharRegex = /^\d{12}$/; // Assumes Aadhar number is 12 digits
    // const addressRegex = /^[a-zA-Z0-9\s#*,.-]+$/;
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    // Reset all errors
    setNameError('');
    setMobileError('');
    setAddressError('');
    setRoleError('');
    setDobError('');
    setAadharNoError('');
    setPhotoError(false);
    
    // Check each field separately
    if (!name) {
      setNameError('Name is required');
    } else if (!nameRegex.test(name)) {
      setNameError('Invalid characters in Name');
    }
    
    if (!mobile) {
      setMobileError('Mobile is required');
    } else if (!mobileRegex.test(mobile)) {
      setMobileError('Invalid Mobile number');
    }
    
    if (!address) {
      setAddressError('Address is required');
    } 
    
    if (role === null || !role.trim()) {
      setRoleError('Role is required');
    }
    
    if (!dob) {
      setDobError('Date of Birth is required');
    } else if (!dobRegex.test(dob)) {
      setDobError('Invalid Date of Birth format. Please use dd/mm/yyyy.');
    }
    
    if (!aadharNo) {
      setAadharNoError('Aadhar Number is required');
    } else if (!aadharRegex.test(aadharNo)) {
      setAadharNoError('Invalid Aadhar Number');
    }
    
    // Check for no photo selected
    if (!selectedImage && !photoError) {
      setPhotoError(true);
    } else {
      setPhotoError(false);
    }
    
    // If any error is found, return without updating
   {
      return;
    }

    // Implement your update logic here
    console.log('Update pressed', {
      name,
      mobile,
      address,
      role,
      dob,
      aadharNo,
      selectedImage,
    });

    // Reset photo error state after a successful update
    setPhotoError(false);

    // You can navigate back to the previous screen if needed
    // navigation.goBack();
    navigation.navigate('AppNavigation');
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    console.log('Data to be deleted');
  };


  
  return (
    <>


       <TitleBar title="Update Staff" /> 
       <View style={[style.pageContainer,  pageContainerStyle]}> 
       <ScrollView contentContainerStyle={style.scrollContainer}>

        
        <View style={[style.container, containerStyle]}>
          {/* <Text style={styles.title}>Update Staff</Text> */}

          <Text style={[styles.label, textStyle]}>

<Text style={{ color: "red" }}>*</Text>Name:
          </Text>
          <TextInput
            style={[styles.input, nameError ? styles.inputError : null, textStyle]}
            value={name}
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
              setNameError('');
            }}
          />
          {nameError ? (
            <Text style={style.errorText}>{nameError}</Text>
          ) : null}

<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Mobile:
          </Text>
          <TextInput
            style={[styles.input, mobileError ? styles.inputError : null, textStyle]}
            value={mobile}
            placeholder="Enter Mobile"
            onChange={(e) => {
              setMobile(e.target.value);
              setMobileError('');
            }}
          />
          {mobileError ? (
            <Text style={style.errorText}>{mobileError}</Text>
          ) : null}
 

 <Text style={[styles.label, textStyle]}>
            <Text style={{ color: "red" }}>*</Text>Role:
          </Text>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => {
              setRole(itemValue);
              setRoleError('');
            }}
            style={{ ...styles.input, backgroundColor: 'white',...dropdownStyle, ...textStyle }}
          >
            <Picker.Item label="Select Role" value="" />
            <Picker.Item label="Manager" value="Manager" />
            <Picker.Item label="Waiter" value="Waiter" />
            <Picker.Item label="Chef" value="Chef" />
          </Picker>
          {roleError ? (
            <Text style={style.errorText}>{roleError}</Text>
          ) : null}

<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Date of Birth:
          </Text>
          <TextInput
            style={[styles.input, dobError ? styles.inputError : null,textStyle]}
            value={dob}
            placeholder="Enter Date of Birth"
            onChange={(e) => {
              setDob(e.target.value);
              setDobError('');
            }}
          />
          {dobError ? (
            <Text style={style.errorText}>{dobError}</Text>
          ) : null}

<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Aadhar Number:
          </Text>
          <TextInput
            style={[styles.input, aadharNoError ? styles.inputError : null,textStyle]}
            value={aadharNo}
            placeholder="Enter Aadhar Number"
            onChange={(e) => {
              setAadharNo(e.target.value);
              setAadharNoError('');
            }}
          />
          {aadharNoError ? (
            <Text style={style.errorText}>{aadharNoError}</Text>
          ) : null}

<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Address:
          </Text>
<TextInput
  style={[styles.input,styles.textArea, addressError ? styles.inputError : null,textStyle]} // Apply the textArea style
  value={address}
  placeholder="Enter Address"
  multiline={true}
  numberOfLines={4} // Set the desired number of lines
  onChangeText={(text) => setAddress(text)}
/>

{addressError ? <Text style={style.errorText}>{addressError}</Text> : null}

<Text style={[styles.label, textStyle]}>Photo:</Text>
          <View>
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={styles.selectedImage}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => document.getElementById('browseInput').click()}
              style={styles.browseLabel}
            >
                   <Text style={[ textStyle]}>Browse</Text>
            </TouchableOpacity>
            <input
              type="file"
              id="browseInput"
              accept="image/*"
              style={styles.browseInput}
              onChange={handlePhotoChange}
            />
            {photoError ? (
              <Text style={style.errorText}>Photo is required</Text>
            ) : null}
          </View>

          {/* Buttons in the same row */}
          {/* <View style={styles.buttonRow}>
          <TouchableOpacity onPress={handleDelete} style={style.deleteButton}>
          <MaterialIcons name="delete" size={16} color="black" />
          <Text style={{fontFamily:'ROBOTO'}}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.updateButton} onPress={handleUpdate}>
        <MaterialIcons name="task-alt" size={16} color="black" />
          <Text style={style.buttonText}>Update</Text>
        </TouchableOpacity>
          </View> */}
          <DeleteUpdateButton onDelete={handleDelete} onUpdate={handleUpdate} />
        </View>
      </ScrollView>
      </View>
      
      <BottomBar />
      
    </>
  );
};

const styles = StyleSheet.create({
  
  // scrollContainer: {
  //   flexGrow: 1,
  //   //justifyContent: 'space-between',
  //   paddingBottom: 70, // Adjust this value to set the margin at the bottom
  // },
  // container: {
  //   flex: 1,
  //   padding: 20,
  //   width: '95%',
  //   marginHorizontal: 'auto',
  //   backgroundColor: 'white',
  //   borderWidth: 1,
  //   borderColor: '#333',
  //   borderRadius: 10,
  //   overflow: 'hidden',
  //   marginTop: 10,
  //   marginBottom: 10,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  //   elevation: 4,
  // },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'ROBOTO',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'ROBOTO',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontFamily: 'ROBOTO',
  },
  inputError: {
    borderColor: 'red',
  },
 
  selectedImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  browseLabel: {
    backgroundColor: '#9e9e9e',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  browseInput: {
    display: 'none',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  textArea: {
    height: 80, // Set the desired height for multiline input
    textAlignVertical: 'top', // Align text to the top
  },
  // deleteButton: {
  //   fontFamily: 'ROBOTO', // Add fontFamily here
  //   backgroundColor: 'transparent',
  //   padding: 10,
  //   borderRadius: 5,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: '45%',
  //   borderColor: 'red',
  //   borderWidth: 1,
  // },
  // updateButton: {
  //   fontFamily: 'ROBOTO', // Add fontFamily here
  //   backgroundColor: '#4CAF50',
  //   padding: 10,
  //   borderRadius: 5,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: '45%',
  // },
  // buttonText: {
  //   fontFamily: 'ROBOTO', // Add fontFamily here
  //   color: 'white',
  //   fontSize: 16,}
});

export default UpdateScreen;
