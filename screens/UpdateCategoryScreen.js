// // UpdateScreen.js
// import React, { useState } from 'react';
// import { View, Image, Text , TouchableOpacity, TextInput, StyleSheet, Platform ,ScrollView} from 'react-native';
// import { deleted } from '../constants/icons';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';
// import { MaterialIcons } from '@expo/vector-icons';
// import DeleteUpdateButton from '../components/DeleteUpdateButton';
// // import Footer from '../components/Footer';
// // import { icons } from '../constants';
// // import { FONT_FAMILY } from '../config'; // Import the FONT_FAMILY variable

// //const iconDelete = require('../../../assets/images/delete.png');
// const UpdateCategoryDetails = ({ route, navigation }) => {
//   const staffData = route && route.params ? route.params.staffData : {};

//   const [category, setCategory] = useState(staffData.category || '');
// //   const [mobile, setMobile] = useState(staffData.mobile || '');
// //   const [address, setAddress] = useState(staffData.address || '');
// //   const [role, setRole] = useState(staffData.role || '');
// //   const [dob, setDob] = useState(staffData.dob || '');
// //   const [aadharNo, setAadharNo] = useState(staffData.aadharNo || '');

//   const [categoryError, setCategoryError] = useState('');
// //   const [mobileError, setMobileError] = useState('');
// //   const [addressError, setAddressError] = useState('');
// //   const [roleError, setRoleError] = useState('');
// //   const [dobError, setDobError] = useState('');
// //   const [aadharNoError, setAadharNoError] = useState('');
// //   const [photoError, setPhotoError] = useState(false);

// //   const [selectedImage, setSelectedImage] = useState(staffData.selectedImage || null);

// const handleUpdate = () => {
//   // Validate fields
//   if (!category) {
//     // Display error messages for empty fields
//     setCategoryError("Category is required");
//     // ... other error state settings

//     // Check for no photo selected
//     // if (!selectedImage && !photoError) {
//     //   setPhotoError(true);
//     // } else {
//     //   setPhotoError(false);
//     // }

//     return;
//   }

//   // Reset all error states if validation passes
//   setCategoryError("");
//   // ... reset other error states

//   // Implement your update logic here
//   console.log("Update pressed", {
//     category,
//   });

//   // Reset photo error state after a successful update
//   // setPhotoError(false);

//   // You can navigate back to the previous screen if needed
//   // navigation.goBack();
// };

// const handleDelete = () => {
//   console.log('Data to be deleted');
// };
// return (
//     <>
//     <TitleBar title="Update Category"/>
//     <View style={style.pageContainer}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>

//           <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Category:
//           </Text>
//           <TextInput
//   style={[styles.input, categoryError ? { borderColor: 'red' } : null]}
//   value={category}
//   placeholder="Enter Category"
//   onChangeText={(text) => setCategory(text)} // Add this line to handle text changes
// />
//           {categoryError ? <Text style={style.errorText}>{categoryError}</Text> : null}

//           {/* <Text>Role:</Text>
//           <Picker
//             selectedValue={role}
//             onValueChange={(itemValue) => {
//               setRole(itemValue);
//               setRoleError('');
//             }}
//             style={styles.input}
//           >
// <Picker.Item label="Select Role" value="" />
//             <Picker.Item label="Manager" value="Manager" />
//             <Picker.Item label="Waiter" value="Waiter" />
//             <Picker.Item label="Chef" value="Chef" />
//           </Picker>
//           {roleError ? <Text style={style.errorText}>{roleError}</Text> : null}

//           <Text>Photo:</Text>
//           <View> */}
//             {/* ... your existing code ... */}
//           {/* </View> */}

//           {/* Buttons in the same row */}
//           {/* <View style={styles.buttonRow}>
//   <TouchableOpacity onPress={handleDelete} style={style.deleteButton}>
//     <View style={styles.buttonContent}>
//       <MaterialIcons name="delete" size={19} color="black" />
//       <Text style={{ fontFamily: 'ROBOTO', marginLeft: 5 }}>Delete</Text>
//     </View>
//   </TouchableOpacity>

//   <TouchableOpacity style={style.updateButton} onPress={handleUpdate}>
//     <View style={styles.buttonContent}>
//       <MaterialIcons name="task-alt" size={19} color="white" />
//       <Text style={[style.buttonText, { marginLeft: 5 }]}>Update</Text>
//     </View>
//   </TouchableOpacity>
// </View> */}
// <DeleteUpdateButton onDelete={handleDelete} onUpdate={handleUpdate} />

//     </View>
//     </ScrollView>
//     </View>
//     <BottomBar/>
//   </>
// );
// };

// const styles = StyleSheet.create({
//   pageContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   container: {
//     padding: 20,
//     backgroundColor: 'white',
//     height: 'auto',
//     borderWidth: 1,
//     borderColor: 'black',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   label: {
//     fontSize: 16,
//     marginVertical: 5,
//     fontFamily: 'Roboto',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     fontFamily: 'Roboto',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     marginTop: 20,
//     justifyContent: 'space-between', // Space between Delete and Update buttons
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
//   //   fontSize: 16,
//   // },
//   errorText: {
//     fontFamily: 'ROBOTO', // Add fontFamily here
//     color: 'red',
//     marginBottom: 5,
//   },
//   selectedImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//   },
//   browseLabel: {
//     backgroundColor: '#ddd',
//     padding: 5,
//     borderRadius: 5,
//     marginBottom: 10,
//     cursor: 'pointer',
//   },
//   browseInput: {
//     display: 'none',
//   },
//   buttonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

// });

// export default UpdateCategoryDetails;

// UpdateScreen.js
import React, { useState,useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { deleted } from "../constants/icons";
import TitleBar from "../components/TitleBar";
import BottomBar from "../components/BottomBar";
import style from "../constants/style";
import { MaterialIcons } from "@expo/vector-icons";
import DeleteUpdateButton from "../components/DeleteUpdateButton";


import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';

const UpdateCategoryDetails = ({ route, navigation }) => {

  

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

 

  const staffData = route && route.params ? route.params.staffData : {};
  const showDeleteButton = staffData.menu_count !== '1';

  const [category, setCategory] = useState(staffData.name || "");
  //   const [mobile, setMobile] = useState(staffData.mobile || '');
  //   const [address, setAddress] = useState(staffData.address || '');
  //   const [role, setRole] = useState(staffData.role || '');
  //   const [dob, setDob] = useState(staffData.dob || '');
  //   const [aadharNo, setAadharNo] = useState(staffData.aadharNo || '');

  const [categoryError, setCategoryError] = useState("");
  //   const [mobileError, setMobileError] = useState('');
  //   const [addressError, setAddressError] = useState('');
  //   const [roleError, setRoleError] = useState('');
  //   const [dobError, setDobError] = useState('');
  //   const [aadharNoError, setAadharNoError] = useState('');
  //   const [photoError, setPhotoError] = useState(false);

  //   const [selectedImage, setSelectedImage] = useState(staffData.selectedImage || null);
  const handleUpdate = async() => {
    // Validate fields
    const categoryRegex = /^[a-zA-Z\s]+$/;

    if (!category) {
      setCategoryError("Category is required");
    } else if (!categoryRegex.test(category)) {
      setCategoryError('Invalid characters in Category ');
    }
    
  
      try {
        const response = await fetch(
          "http://194.195.116.199/owner_api/menu_category/update",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              menu_cat_id: staffData.menu_cat_id, // Pass the menu_cat_id for identification
              restaurant_id: staffData.restaurant_id, // Pass the restaurant_id for identification
              name: category.trim(),
             
            }),
          }
        );
        const data = await response.json();
        if (data.st===1) {
          console.log("Category updated successfully:", data.msg);
          // You can navigate back to the previous screen if needed
          // navigation.goBack();
        } else {
          console.error("Error updating category:", data.msg);
        }
      } catch (error) {
        console.error("Error:", error);
      }
   
      // Reset all error states if validation passes
    // setCategoryError("");
  
    // Implement your update logic here
    // console.log("Update pressed", {
    //   category,
    // });

    // Reset photo error state after a successful update
    // setPhotoError(false);

    // You can navigate back to the previous screen if needed
    // navigation.goBack();
  };

  const handleDelete = async() => {
    try {
      const response = await fetch(
        "http://194.195.116.199/owner_api/menu_category/delete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            menu_cat_id: staffData.menu_cat_id, // Pass the menu_cat_id for identification
            restaurant_id: staffData.restaurant_id, // Pass the restaurant_id for identification
            
          }),
        }
      );
      const data = await response.json();
      if (data.st===1) {
        
        console.log("Category deleted successfully:", data.msg);
        // You can navigate back to the previous screen if needed
        // navigation.goBack();
      } else {
        console.error("Error deleting category:", data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
 
  };
  return (
    <>
      <TitleBar title="Update Category" />
      <View style={[style.pageContainer, PagecontainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
          <Text style={[styles.label, textStyle]}>
              <Text style={{ color: "red" }}>*</Text>Category:
            </Text>
            <TextInput
              style={[
                styles.input,
                categoryError ? { borderColor: "red" } : null, textStyle
              ]}
              value={category}
              placeholder="Enter Category"
              onChangeText={(text) => setCategory(text)} // Add this line to handle text changes
            />
            {categoryError ? (
              <Text style={style.errorText}>{categoryError}</Text>
            ) : null}

            {/* <Text>Role:</Text>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => {
              setRole(itemValue);
              setRoleError('');
            }}
            style={styles.input}
          >
<Picker.Item label="Select Role" value="" />
            <Picker.Item label="Manager" value="Manager" />
            <Picker.Item label="Waiter" value="Waiter" />
            <Picker.Item label="Chef" value="Chef" />
          </Picker>
          {roleError ? <Text style={style.errorText}>{roleError}</Text> : null}

         

         
          
          <Text>Photo:</Text>
          <View> */}
            {/* ... your existing code ... */}
            {/* </View> */}

            {/* Buttons in the same row */}
            {/* <View style={styles.buttonRow}>
  <TouchableOpacity onPress={handleDelete} style={style.deleteButton}>
    <View style={styles.buttonContent}>
      <MaterialIcons name="delete" size={19} color="black" />
      <Text style={{ fontFamily: 'ROBOTO', marginLeft: 5 }}>Delete</Text>
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity style={style.updateButton} onPress={handleUpdate}>
    <View style={styles.buttonContent}>
      <MaterialIcons name="task-alt" size={19} color="white" />
      <Text style={[style.buttonText, { marginLeft: 5 }]}>Update</Text>
    </View>
  </TouchableOpacity>
</View> */}
           {showDeleteButton && (
              <DeleteUpdateButton
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            )}
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    padding: 20,
    backgroundColor: "white",
    height: "auto",
    borderWidth: 1,
    borderColor: "black",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: "Roboto",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: "Roboto",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between", // Space between Delete and Update buttons
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
  //   fontSize: 16,
  // },
  // errorText: {
  //   fontFamily: "ROBOTO", // Add fontFamily here
  //   color: "red",
  //   marginBottom: 5,
  // },
  selectedImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  browseLabel: {
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    cursor: "pointer",
  },
  browseInput: {
    display: "none",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default UpdateCategoryDetails;
