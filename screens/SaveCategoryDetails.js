// import React, { useState } from 'react';
// import {ScrollView, View, Text, TextInput, Button, Picker, StyleSheet, Image,TouchableOpacity } from 'react-native';
// import { useDropzone } from 'react-dropzone';
// import Footer from '../components/Footer';
// import BottomBar from '../components/BottomBar';
// import TitleBar from '../components/TitleBar';
// import { COLORS } from '../constants';
// import style from '../constants/style';
// import SaveButton from '../components/SaveButton';

// const SaveCategoryDetails = () => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [address, setAddress] = useState('');
//   const [role, setRole] = useState('');
//   const [dob, setDob] = useState('');
//   const [aadharNo, setAadharNo] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (!name.trim()) {
//       newErrors.name = 'Name is required';
//     }

   

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       // Implement save logic here
//       console.log('Form data saved!');
//     } else {
//       console.log('Form data validation failed!');
//     }
//   };

//   const onDrop = (acceptedFiles) => {
//     // Assuming only one file is allowed
//     setSelectedImage(URL.createObjectURL(acceptedFiles[0]));
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//   });

//   return (
//     <>
//     <TitleBar title="Create Category"/>
//     <View style={style.pageContainer}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//       <Text style={styles.label}> <Text style={{ color: "red" }}>*</Text>Category Name:
//           </Text>
//       <TextInput style={styles.input} value={name}  placeholder="Enter Category Name" onChangeText={(text) => setName(text)} />
//       {errors.name && <Text style={style.errorText}>{errors.name}</Text>}

      
      
//       {errors.photo && <Text style={style.errorText}>{errors.photo}</Text>}
//       {/* <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//       <Text style={styles.saveButtonText}>Save</Text>
//    </TouchableOpacity> */}
//    <SaveButton onPress={handleSave} />
//    </View>
//     </ScrollView>
//     </View>

//      <BottomBar/>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor:'white'
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
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//     fontFamily: 'Roboto',
//   },
//   imagePicker: {
//     height: 100,
//     border: '1px dashed gray',
//     marginBottom: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     cursor: 'pointer',
//   },
//   selectedImage: {
//     width: '100%',
//     height: '100%',
//   },
//   imagePickerText: {
//     fontSize: 16,
//     color: 'blue',
//     fontFamily: 'Roboto',
//   },
//   saveButton: {
//     backgroundColor: COLORS.successButton, // Green color, you can change it to your desired color
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     width:100,
//     alignSelf:'end'
    
//   },
//   saveButtonText: {
//     color: 'white',
//     fontFamily: 'Roboto',
//     fontSize: 16,
//   },
  
// });


// export default SaveCategoryDetails;


// import React, { useState } from 'react';
// import {ScrollView, View, Text, TextInput, Button, Picker, StyleSheet, Image,TouchableOpacity } from 'react-native';
// import { useDropzone } from 'react-dropzone';
// import Footer from '../components/Footer';
// import BottomBar from '../components/BottomBar';
// import TitleBar from '../components/TitleBar';
// import { COLORS } from '../constants';
// import style from '../constants/style';
// import SaveButton from '../components/SaveButton';


// import { lightTheme, darkTheme } from '../constants/ThemeStyles';
// import { useTheme } from '../components/ThemeProvider';

// const SaveCategoryDetails = () => {
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

//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [address, setAddress] = useState('');
//   const [role, setRole] = useState('');
//   const [dob, setDob] = useState('');
//   const [aadharNo, setAadharNo] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     const nameRegex = /^[a-zA-Z\s]+$/;


//     if (!name.trim()) {
//       newErrors.name = ' Category Name is required';
//     }else if (!nameRegex.test(name)) {
//       newErrors.name = 'Invalid characters in Name';
//     }

   

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       // Implement save logic here
//       console.log('Form data saved!');
//     } else {
//       console.log('Form data validation failed!');
//     }
//   };

//   const onDrop = (acceptedFiles) => {
//     // Assuming only one file is allowed
//     setSelectedImage(URL.createObjectURL(acceptedFiles[0]));
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//   });

//   return (
//     <>
//     <TitleBar title="Create Category"/>
//     <View style={[style.pageContainer, PagecontainerStyle]}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//           <View style={[style.container, containerStyle]}>
//           <Text style={[styles.label, textStyle]}> <Text style={{ color: "red" }}>*</Text>Category Name:
//           </Text>
//       <TextInput  style={[styles.input, textStyle]}value={name}  placeholder="Enter Category Name" onChangeText={(text) => setName(text)} />
//       {errors.name && <Text style={style.errorText}>{errors.name}</Text>}

      
      
//       {errors.photo && <Text style={style.errorText}>{errors.photo}</Text>}
//       {/* <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//       <Text style={styles.saveButtonText}>Save</Text>
//    </TouchableOpacity> */}
//    <SaveButton onPress={handleSave} />
//    </View>
//     </ScrollView>
//     </View>

//      <BottomBar/>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor:'white'
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
//   // errorText: {
//   //   color: 'red',
//   //   marginBottom: 10,
//   //   fontFamily: 'Roboto',
//   // },
//   imagePicker: {
//     height: 100,
//     border: '1px dashed gray',
//     marginBottom: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     cursor: 'pointer',
//   },
//   selectedImage: {
//     width: '100%',
//     height: '100%',
//   },
//   imagePickerText: {
//     fontSize: 16,
//     color: 'blue',
//     fontFamily: 'Roboto',
//   },
//   saveButton: {
//     backgroundColor: COLORS.successButton, // Green color, you can change it to your desired color
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     width:100,
//     alignSelf:'end'
    
//   },
//   saveButtonText: {
//     color: 'white',
//     fontFamily: 'Roboto',
//     fontSize: 16,
//   },
  
// });

// export default SaveCategoryDetails;

import React, { useState } from 'react';
import {ScrollView, View, Text, TextInput, Button, Picker, StyleSheet, Image,TouchableOpacity } from 'react-native';
//import { useDropzone } from 'react-dropzone';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';
import TitleBar from '../components/TitleBar';
import { COLORS } from '../constants';
import style from '../constants/style';
import SaveButton from '../components/SaveButton';


import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';

const SaveCategoryDetails = () => {
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

  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!name.trim()) {
      newErrors.name = 'Category Name is required';
    } else if (!nameRegex.test(name)) {
      newErrors.name = 'Invalid characters in Name';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (validateForm()) {
      try {
        const response = await fetch('http://194.195.116.199/owner_api/menu_category/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            restaurant_id: 13,
            name: name.trim(),
            menu_count: 1,
          }),
        });
        const data = await response.json();
        if (data.st===1) {
          console.log('Category created successfully:', data.msg);
          // Reset the form after successful creation
          setName('');
         
        } else {
          console.error('Error creating category:', data.msg);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('Form data validation failed!');
    }
  };

  return (
    <>
    <TitleBar title="Create Category"/>
    <View style={[style.pageContainer, PagecontainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
          <Text style={[styles.label, textStyle]}> <Text style={{ color: "red" }}>*</Text>Category Name:
          </Text>
      <TextInput  style={[styles.input, textStyle]}value={name}  placeholder="Enter Category Name" onChangeText={(text) => setName(text)} />
      {errors.name && <Text style={style.errorText}>{errors.name}</Text>}

      <SaveButton onPress={handleSave} />
      </View>
    </ScrollView>
    </View>

    <BottomBar/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'white'
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'Roboto',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  saveButton: {
    backgroundColor: COLORS.successButton, // Green color, you can change it to your desired color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width:100,
    alignSelf:'end'
  },
});

export default SaveCategoryDetails;
