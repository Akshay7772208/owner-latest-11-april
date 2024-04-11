// // MyForm.js
// import React, { useState } from "react";
// import {
//   ScrollView,
//   View,
//   Text ,
//   TextInput,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Picker,
// } from "react-native";
// import Footer from "../components/Footer";
// import { FONT_FAMILY } from "../config";
// import TitleBar from "../components/TitleBar";
// import ExtraScreen from "./ExtraScreen";
// import BottomBar from "../components/BottomBar";
// import { COLORS } from "../constants";
// import style from "../constants/style";
// import SaveButton from "../components/SaveButton";



// const MyForm = () => {
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [address, setAddress] = useState("");
//   const [role, setRole] = useState("");
//   const [dob, setDob] = useState("");
//   const [aadharNo, setAadharNo] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [photoError, setPhotoError] = useState(false);
//   const [errors, setErrors] = useState({});
//   const fileInputRef = React.createRef();

//   const validateForm = () => {
//     const newErrors = {};

//     if (!name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!mobile.trim()) {
//       newErrors.mobile = "Mobile is required";
//     }

//     if (!address.trim()) {
//       newErrors.address = "Address is required";
//     }

//     if (role === null || !role.trim()) {
//       newErrors.role = "Role is required";
//     }

//     if (!dob.trim()) {
//       newErrors.dob = "Date of Birth is required";
//     }

//     if (!aadharNo.trim()) {
//       newErrors.aadharNo = "Aadhar number is required";
//     }

//     if (!selectedImage) {
//       setPhotoError(true);
//       newErrors.photo = "Photo is required";
//     } else {
//       setPhotoError(false);
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       console.log("Form data saved!", {
//         name,
//         mobile,
//         address,
//         role,
//         dob,
//         aadharNo,
//         selectedImage,
//       });
//     } else {
//       console.log("Form data validation failed!");
//     }
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//       setPhotoError(false);
//     }
//   };

//   const handleBrowseClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   return (
//     <>
//       <TitleBar title="Create Staff" />
//       <View style={style.pageContainer}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//           <View style={style.container}>
//             {/* <Text style={styles.title}>Create Staff</Text> */}
//             <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Name:
//           </Text>
//             <TextInput
//               style={styles.input}
//               value={name}
//               placeholder="Enter Name"
//               onChangeText={(text) => setName(text)}
//             />
//             {errors.name && <Text style={style.errorText}>{errors.name}</Text>}

//             <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Mobile:
//           </Text>
//             <TextInput
//               style={styles.input}
//               value={mobile}
//               placeholder="Enter Mobile"
//               onChangeText={(text) => setMobile(text)}
//             />
//             {errors.mobile && (
//               <Text style={style.errorText}>{errors.mobile}</Text>
//             )}

            

//             <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Role:
//           </Text>
//             <Picker
//               selectedValue={role}
//               onValueChange={(itemValue) => setRole(itemValue)}
//               style={[styles.input, { backgroundColor: "white" }]}
//             >
//               <Picker.Item label="Select Role" value="" />
//               <Picker.Item label="Manager" value="Manager" />
//               <Picker.Item label="Waiter" value="Waiter" />
//               <Picker.Item label="Chef" value="Chef" />
//             </Picker>
//             {errors.role && <Text style={style.errorText}>{errors.role}</Text>}

//             <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Date of Birth:
//           </Text>
//             <TextInput
//               style={styles.input}
//               value={dob}
//               placeholder="Enter Date of Birth"
//               onChangeText={(text) => setDob(text)}
//             />
//             {errors.dob && <Text style={style.errorText}>{errors.dob}</Text>}

//             <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Aadhar Number:
//           </Text>
//             <TextInput
//               style={styles.input}
//               value={aadharNo}
//               placeholder="Enter Aadhar Number"
//               onChangeText={(text) => setAadharNo(text)}
//             />
//             {errors.aadharNo && (
//               <Text style={style.errorText}>{errors.aadharNo}</Text>
//             )}

// <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Address:
//           </Text>
//             <TextInput
//               style={[styles.input, styles.textArea]} // Apply the textArea style
//               value={address}
//               placeholder="Enter Address"
//               multiline={true}
//               numberOfLines={4} // Set the desired number of lines
//               onChangeText={(text) => setAddress(text)}
//             />
//             {errors.address && (
//               <Text style={style.errorText}>{errors.address}</Text>
//             )}

//             <Text style={styles.label}>Photo:</Text>
//             <View style={styles.photoContainer}>
//               <TouchableOpacity
//                 style={styles.browseButton}
//                 onPress={handleBrowseClick}
//               >
//                 <Text style={styles.browseButtonText}>Browse...</Text>
//               </TouchableOpacity>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoChange}
//                 style={styles.fileInput}
//                 ref={fileInputRef}
//               />
//               {selectedImage ? (
//                 <Image
//                   source={{ uri: selectedImage }}
//                   style={styles.selectedImage}
//                 />
//               ) : null}
//             </View>
//             {photoError && <Text style={style.errorText}>{errors.photo}</Text>}

//             {/* <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//             <Text style={styles.saveButtonText}>Save</Text>
//           </TouchableOpacity> */}
//             <SaveButton onPress={handleSave} />
//           </View>
//         </ScrollView>
//       </View>
//       <BottomBar />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
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
//     borderColor: "#ddd",
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginBottom: 5,
//     borderRadius: 5,
//     fontFamily: FONT_FAMILY,
//     backgroundColor: "white",
//   },
//   errorText: {
//     color: "red",
//     marginBottom: 10,
//     fontFamily: FONT_FAMILY,
//   },
//   photoContainer: {
//     marginBottom: 20,
//   },
//   browseButton: {
//     backgroundColor: "#9e9e9e",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   browseButtonText: {
//     color: "white",
//     fontFamily: FONT_FAMILY,
//     fontSize: 14,
//   },
//   fileInput: {
//     display: "none",
//   },
//   selectedImage: {
//     width: "100%",
//     height: 150,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   imagePickerText: {
//     fontSize: 16,
//     color: "black",
//     fontFamily: FONT_FAMILY,
//   },
//   saveButton: {
//     backgroundColor: COLORS.successButton,
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//     marginLeft: "auto",
//     width: "30%",
//   },
//   saveButtonText: {
//     color: "white",
//     fontFamily: FONT_FAMILY,
//     fontSize: 16,
//   },
//   textArea: {
//     height: 80, // Set the desired height for multiline input
//     textAlignVertical: "top", // Align text to the top
//   },
// });

// export default MyForm;


// MyForm.js
import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text ,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Picker } from "@react-native-picker/picker";
import Footer from "../components/Footer";
import { FONT_FAMILY } from "../config";
import TitleBar from "../components/TitleBar";
import ExtraScreen from "./ExtraScreen";
import BottomBar from "../components/BottomBar";
import { COLORS } from "../constants";
import style from "../constants/style";
import SaveButton from "../components/SaveButton";
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';

const MyForm = () => {
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

  const inputFieldStyle = {
    backgroundColor: isDarkMode ? darkTheme.inputFieldBackground : lightTheme.inputFieldBackground,
  };

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [dob, setDob] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [photoError, setPhotoError] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = React.createRef();

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const mobileRegex = /^[0-9]+$/;
    const aadharRegex = /^\d{12}$/; // Assumes Aadhar number is 12 digits
    // const addressRegex = /^[a-zA-Z0-9\s#*,.-]+$/;
    //const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }else if (!nameRegex.test(name)) {
      newErrors.name = "Invalid characters in Name";
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!mobileRegex.test(mobile)) {
      newErrors.mobile = "Invalid Mobile number";
    }

    if (!address.trim()) {
      newErrors.address = "Address is required";
    }

    if (role === null || !role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!dob.trim()) {
      newErrors.dob = "Date of Birth is required";
    }else if (!dobRegex.test(dob)) {
      newErrors.dob = "Invalid Date of Birth format. Please use dd/mm/yyyy.";
    }

    if (!aadharNo.trim()) {
      newErrors.aadharNo = "Aadhar number is required";
    } else if (!aadharRegex.test(aadharNo)) {
      newErrors.aadharNo = "Invalid Aadhar Number";
    }

    if (!selectedImage) {
      setPhotoError(true);
      newErrors.photo = "Photo is required";
    } else {
      setPhotoError(false);
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append('restaurant_id', '13'); // Assuming this is the restaurant ID
        formData.append('name', name);
        formData.append('mobile', mobile);
        formData.append('dob', dob);
        formData.append('address', address);
        formData.append('role', role.toLowerCase()); // Ensure the role is in lowercase
        formData.append('aadhar_number', aadharNo);
        //formData.append('photo', selectedImage);

        if (selectedImage) {
          const localUri = selectedImage.uri;
          const filename = localUri.split("/").pop();
          const match = /\.(\w+)$/.exec(filename);
          const type = match ? `image/${match[1]}` : `image`;

          formData.append("photo", {
            uri: localUri,
            name: filename,
            type,
          });
        }
  
  
        const response = await fetch('http://194.195.116.199/owner_api/staff/create', {
          method: 'POST',
          body: formData,
          headers:{
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          }
        });
  
        const data = await response.json();
        if (data.st === 1) {
          console.log('Staff created successfully:', data.msg);
          // Reset the form after successful creation
          setName('');
          // Any other actions you want to perform after successful creation
        } else {
          console.error('Error creating staff:', data.msg);
          // Handle error cases
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle network errors or other exceptions
      }
    } else {
      console.log('Form data validation failed!');
      // Handle form validation errors if any
    }
  };
  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setPhotoError(false);
    }
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   quality: 1,
    // });
  
    // if (!result.cancelled) {
    //   setSelectedImage(result.uri);
    //   setPhotoError(false);
    // }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
     
      <TitleBar title="Create Staff" />
      <View style={[style.pageContainer,  pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
        <View style={[style.container, containerStyle]}>
            {/* <Text style={styles.title}>Create Staff</Text> */}
            <Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Name:
          </Text>
            <TextInput
             style={[styles.input,containerStyle,textStyle]}
              value={name}
              placeholder="Enter Name"
              onChangeText={(text) => setName(text)}
            />
            {errors.name && <Text style={style.errorText}>{errors.name}</Text>}

            <Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Mobile:
          </Text>
            <TextInput
              style={[styles.input,containerStyle,textStyle]}
              value={mobile}
              placeholder="Enter Mobile"
              onChangeText={(text) => setMobile(text)}
            />
            {errors.mobile && (
              <Text style={style.errorText}>{errors.mobile}</Text>
            )}

            

<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Role:</Text>
            <Picker
              selectedValue={role}
              onValueChange={(itemValue) => setRole(itemValue)}
              style={{ ...styles.input, backgroundColor: 'white',...dropdownStyle, ...textStyle }}
              itemStyle={[styles.dropdownItem, textStyle]}
            >
              <Picker.Item label="Select Role" value="" />
              <Picker.Item label="Manager" value="Manager" />
              <Picker.Item label="Waiter" value="Waiter" />
              <Picker.Item label="Chef" value="Chef" />
            </Picker>
            {errors.role && <Text style={style.errorText}>{errors.role}</Text>}

            <Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Date of Birth:
          </Text>
            <TextInput
         style={[styles.input,textStyle,containerStyle]}
              value={dob}
              placeholder="Enter Date of Birth"
              onChangeText={(text) => setDob(text)}
            />
            {errors.dob && <Text style={style.errorText}>{errors.dob}</Text>}

            <Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Aadhar Number:
          </Text>
            <TextInput
             style={[styles.input,textStyle,containerStyle]}
              value={aadharNo}
              placeholder="Enter Aadhar Number"
              onChangeText={(text) => setAadharNo(text)}
            />
            {errors.aadharNo && (
              <Text style={style.errorText}>{errors.aadharNo}</Text>
            )}

<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Address:
          </Text>
            <TextInput
              style={[styles.input, styles.textArea,textStyle,containerStyle]} // Apply the textArea style
              value={address}
              placeholder="Enter Address"
              multiline={true}
              numberOfLines={4} // Set the desired number of lines
              onChangeText={(text) => setAddress(text)}
            />
            {errors.address && (
              <Text style={style.errorText}>{errors.address}</Text>
            )}

<Text style={[styles.label, textStyle]}>Photo:</Text>
            <View style={styles.photoContainer}>
              <TouchableOpacity
                style={styles.browseButton}
                onPress={handleBrowseClick}
              >
                <Text style={styles.browseButtonText}>Browse...</Text>
              </TouchableOpacity>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={styles.fileInput}
                ref={fileInputRef}
              />
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.selectedImage}
                />
              ) : null}
            </View>
            {photoError && <Text style={style.errorText}>{errors.photo}</Text>}

            {/* <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity> */}
            <SaveButton onPress={handleSave} />
          </View>
        </ScrollView>
      </View>
      
     
      <BottomBar />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: FONT_FAMILY,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: FONT_FAMILY,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 5,
    fontFamily: FONT_FAMILY,
    backgroundColor: "white",
  },
  // errorText: {
  //   color: "red",
  //   marginBottom: 10,
  //   fontFamily: FONT_FAMILY,
  // },
  photoContainer: {
    marginBottom: 20,
  },
  browseButton: {
    backgroundColor: "#9e9e9e",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  browseButtonText: {
    color: "white",
    fontFamily: FONT_FAMILY,
    fontSize: 14,
  },
  fileInput: {
    display: "none",
  },
  selectedImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  imagePickerText: {
    fontSize: 16,
    color: "black",
    fontFamily: FONT_FAMILY,
  },
  saveButton: {
    backgroundColor: COLORS.successButton,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: "auto",
    width: "30%",
  },
  saveButtonText: {
    color: "white",
    fontFamily: FONT_FAMILY,
    fontSize: 16,
  },
  textArea: {
    height: 80, // Set the desired height for multiline input
    textAlignVertical: "top", // Align text to the top
  },
});

export default MyForm;
