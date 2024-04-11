// // import React, { useState } from "react";
// // import {
// //   ScrollView,
// //   View,
// //   Text,
// //   TextInput,
// //   Picker,
// //   StyleSheet,
// //   TouchableOpacity,
// // } from "react-native";
// // import TitleBar from "../components/TitleBar";
// // import BottomBar from "../components/BottomBar";
// // import { COLORS } from "../constants";
// // import style from "../constants/style";
// // import SaveButton from "../components/SaveButton";

// // const SaveInventory = () => {
// //   const [name, setName] = useState("");
// //   const [quantity, setQuantity] = useState("");
// //   const [selectedType, setSelectedType] = useState("");

// //   const dropdownItems = ["Select Type", "Hotel", "Kitchen", "Garden"];

// //   return (
// //     <>
// //       <TitleBar title="Create Inventory" />
// //       <View style={style.pageContainer}>
// //         <ScrollView contentContainerStyle={style.scrollContainer}>
// //           <View style={style.container}>
// //             <Text style={styles.requiredLabel}>
// //               <Text style={{ color: "red" }}>*</Text>Name:
// //             </Text>
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Name"
// //               value={name}
// //               onChangeText={(text) => setName(text)}
// //             />

// //             <Text style={styles.requiredLabel}>
// //             <Text style={{ color: "red" }}>*</Text>Quantity:
// //             </Text>
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Quantity"
// //               value={quantity}
// //               onChangeText={(text) => setQuantity(text)}
// //             />

// //             <View style={styles.dropdownContainer}>
// //               <Text style={styles.requiredLabel}>
// //                 <Text style={{ color: "red" }}>*</Text>Type:
// //               </Text>
// //               <Picker
// //                 style={styles.dropdownPicker}
// //                 selectedValue={selectedType}
// //                 onValueChange={(itemValue) => setSelectedType(itemValue)}
// //               >
// //                 {dropdownItems.map((item, index) => (
// //                   <Picker.Item key={index} label={item} value={item} />
// //                 ))}
// //               </Picker>
// //             </View>
// //             <SaveButton onPress={() => console.log("Form data saved!")} />
// //           </View>
// //         </ScrollView>
// //       </View>
// //       <BottomBar />
// //     </>
// //   );
// // };
// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     backgroundColor: "white",
// //   },
// //   label: {
// //     fontSize: 16,
// //     marginVertical: 5,
// //     fontFamily: "Roboto",
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: "gray",
// //     borderWidth: 1,
// //     paddingHorizontal: 10,
// //     marginBottom: 10,
// //     fontFamily: "Roboto",
// //   },
// //   saveButton: {
// //     backgroundColor: COLORS.successButton,
// //     padding: 10,
// //     borderRadius: 5,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginTop: 20,
// //   },
// //   saveButtonText: {
// //     color: "white",
// //     fontFamily: "Roboto",
// //     fontSize: 16,
// //   },
// //   dropdownContainer: {
// //     marginTop: 10,
// //   },
// //   dropdownPicker: {
// //     height: 40,
// //     borderColor: "gray",
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     fontFamily: "Roboto",
// //   },
// // });

// // export default SaveInventory;


// import React, { useState } from "react";
// import {
//   ScrollView,
//   View,
//   Text,
//   TextInput,
//   Picker,
//   StyleSheet,
// } from "react-native";
// import TitleBar from "../components/TitleBar";
// import BottomBar from "../components/BottomBar";
// import SaveButton from "../components/SaveButton";
// import { COLORS } from "../constants";
// import style from "../constants/style";
// import { lightTheme, darkTheme } from '../constants/ThemeStyles';
// import { useTheme } from '../components/ThemeProvider';

// const SaveInventory = () => {
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

//   const dropdownStyle = {
//     color: isDarkMode ? darkTheme.dropdownColor : lightTheme.dropdownColor,
//     backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
//   };
 

//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [errors, setErrors] = useState({});

//   const dropdownItems = ["Select Type", "Hotel", "Kitchen", "Garden"];

//   const validateForm = () => {
//     const newErrors = {};
//     const nameRegex = /^[a-zA-Z\s]+$/;

//     const quantityRegex = /^[0-9]+$/;

//     if (!name.trim()) {
//       newErrors.name = 'Name is required';
//     } else if (!nameRegex.test(name)) {
//       newErrors.name = 'Invalid characters in Name ';
//     }

//     if (!quantity.trim()) {
//       newErrors.quantity = 'Quantity is required';
//     } else if (!quantityRegex.test(quantity)) {
//       newErrors.quantity = 'Invalid Quantity ';
//     }

//     if (!selectedType.trim()) {
//       newErrors.selectedType = 'Please select a Type';
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

//   return (
//     <>
//       <TitleBar title="Create Inventory" />
//       <View style={[style.pageContainer, PagecontainerStyle]}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//           <View style={[style.container, containerStyle]}>
//             <Text style={[styles.requiredLabel, textStyle]}>
//               <Text style={{ color: "red" }}>*</Text>Name:
//             </Text>
//             <TextInput
//               style={[styles.input, textStyle]}
//               placeholder="Name"
//               value={name}
//               id="outlined-basic"
//               variant="outlined"
//               onChangeText={(text) => setName(text)}
//             />
//             {errors.name && <Text style={style.errorText}>{errors.name}</Text>}

//             <Text style={[styles.requiredLabel, textStyle]}>
//               <Text style={{ color: "red" }}>*</Text>Quantity:
//             </Text>
//             <TextInput
//               style={[styles.input, textStyle]}
//               placeholder="Quantity"
//               value={quantity}
//               onChangeText={(text) => setQuantity(text)}
//             />
//             {errors.quantity && <Text style={style.errorText}>{errors.quantity}</Text>}

//             <View style={styles.dropdownContainer}>
//               <Text style={[styles.requiredLabel, textStyle]}>
//                 <Text style={{ color: "red" }}>*</Text>Type:
//               </Text>
//               <Picker
//                 style={[styles.dropdownPicker, dropdownStyle, textStyle]}
//                 selectedValue={selectedType}
//                 onValueChange={(itemValue) => setSelectedType(itemValue)}
//               >
//                 {dropdownItems.map((item, index) => (
//                   <Picker.Item key={index} label={item} value={item} />
//                 ))}
//               </Picker>
//               {errors.selectedType && <Text style={style.errorText}>{errors.selectedType}</Text>}
//             </View>
//             <SaveButton onPress={handleSave} />
//           </View>
//         </ScrollView>
//       </View>
//       <BottomBar />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "white",
//   },
//   label: {
//     fontSize: 16,
//     marginVertical: 5,
//     fontFamily: "Roboto",
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     fontFamily: "Roboto",
//   },
//   saveButton: {
//     backgroundColor: COLORS.successButton,
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   saveButtonText: {
//     color: "white",
//     fontFamily: "Roboto",
//     fontSize: 16,
//   },
//   dropdownContainer: {
//     marginTop: 10,
//   },
//   dropdownPicker: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 10,
//     fontFamily: "Roboto",
//     borderRadius: 5,
//   },
//   requiredLabel: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontFamily: "Roboto",
//   },
//   // errorText: {
//   //   color: 'red',
//   //   marginBottom: 5,
//   //   fontFamily: 'Roboto',
    
//   // },
// });

// export default SaveInventory;



// // import React, { useState } from "react";
// // import {
// //   ScrollView,
// //   View,
// //   Text,
// //   StyleSheet,
// // } from "react-native";
// // import TitleBar from "../components/TitleBar";
// // import BottomBar from "../components/BottomBar";
// // import SaveButton from "../components/SaveButton";
// // import { COLORS } from "../constants";
// // import style from "../constants/style";
// // import { lightTheme, darkTheme } from '../constants/ThemeStyles';
// // import { useTheme } from '../components/ThemeProvider';
// // import { TextInput } from 'react-native-paper';

// // const SaveInventory = () => {
// //   const { isDarkMode, toggleTheme } = useTheme();

// //   const containerStyle = {
// //     backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
// //   };

// //   const PagecontainerStyle = {
// //     backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
// //   };

// //   const textStyle = {
// //     color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
// //   };

// //   const dropdownStyle = {
// //     color: isDarkMode ? darkTheme.dropdownColor : lightTheme.dropdownColor,
// //     backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
// //   };

// //   const [name, setName] = useState("");
// //   const [quantity, setQuantity] = useState("");
// //   const [errors, setErrors] = useState({});

// //   const validateForm = () => {
// //     const newErrors = {};
// //     const nameRegex = /^[a-zA-Z\s]+$/;

// //     if (!name.trim()) {
// //       newErrors.name = 'Name is required';
// //     } else if (!nameRegex.test(name)) {
// //       newErrors.name = 'Invalid characters in Name ';
// //     }

// //     setErrors(newErrors);

// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSave = () => {
// //     if (validateForm()) {
// //       // Implement save logic here
// //       console.log('Form data saved!');
// //     } else {
// //       console.log('Form data validation failed!');
// //     }
// //   };

// //   return (
// //     <>
// //       <TitleBar title="Create Inventory" />
// //       <View style={[style.pageContainer, PagecontainerStyle]}>
// //         <ScrollView contentContainerStyle={style.scrollContainer}>
// //           <View style={[style.container, containerStyle]}>
// //             {/* <Text style={[styles.requiredLabel, textStyle]}>
// //               <Text style={{ color: "red" }}>*</Text>Name:
// //             </Text> */}
// //      <View style={styles.inputContainer}>
// //   <TextInput
// //     label={<Text style={{fontWeight:'bold',fontSize:17}}><Text style={{color:'red'}}>*</Text>Name</Text>}
// //     mode="outlined"
// //     value={name}
// //     onChangeText={name => setName(name)}
// //   />
// //   {errors.name && <Text style={style.errorText}>{errors.name}</Text>}
// // </View>
// // <View style={styles.inputContainer}>
// //   <TextInput
// //     label={<Text style={{fontWeight:'bold',fontSize:17}}><Text style={{color:'red'}}>*</Text>Quantity</Text>}
// //     mode="outlined"
// //     value={quantity}
// //     onChangeText={quantity => setQuantity(quantity)}
// //   />
// //   {errors.quantity && <Text style={style.errorText}>{errors.quantity}</Text>}
// // </View>
// //             <SaveButton onPress={handleSave} />
// //           </View>
// //         </ScrollView>
// //       </View>
// //       <BottomBar />
// //     </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     backgroundColor: "white",
// //   },
// //   input: {
// //     height: 45,
// //     marginBottom: 10,
// //   },
// //   requiredLabel: {
// //     fontSize: 16,
// //     marginBottom: 5,
// //   },
// //   inputContainer: {
// //     marginBottom: 10, // Adjust this value as needed for the desired space
// //   },
// // });

// // export default SaveInventory;

import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Picker, StyleSheet } from "react-native";
import TitleBar from "../components/TitleBar";
import BottomBar from "../components/BottomBar";
import SaveButton from "../components/SaveButton";
import { COLORS } from "../constants";
import style from "../constants/style";
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';

const SaveInventory = () => {
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

  const dropdownStyle = {
    color: isDarkMode ? darkTheme.dropdownColor : lightTheme.dropdownColor,
    backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
  };

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [errors, setErrors] = useState({});

  const dropdownItems = ["Select Type", "Hotel", "Kitchen", "Garden"];

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const quantityRegex = /^[0-9]+$/;

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!nameRegex.test(name)) {
      newErrors.name = 'Invalid characters in Name ';
    }

    if (!quantity.trim()) {
      newErrors.quantity = 'Quantity is required';
    } else if (!quantityRegex.test(quantity)) {
      newErrors.quantity = 'Invalid Quantity ';
    }

    if (!selectedType.trim()) {
      newErrors.selectedType = 'Please select a Type';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (validateForm()) {
      try {
        const response = await fetch('http://194.195.116.199/owner_api/inventory/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            restaurant_id: 13, // Assuming a fixed restaurant_id for now
            name: name,
            quantity: parseInt(quantity),
            description: "Added through mobile app", // You can customize this
            type: selectedType.toLowerCase() === 'hotel' ? 'hotel' : 
                  selectedType.toLowerCase() === 'kitchen' ? 'kitchen' : 
                  selectedType.toLowerCase() === 'garden' ? 'garden' : '',
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to post data to backend');
        }

        const responseData = await response.json();
        console.log('Response from backend:', responseData);
      } catch (error) {
        console.error('Error posting data to backend:', error.message);
      }
    } else {
      console.log('Form validation failed!');
    }
  };

  return (
    <>
      <TitleBar title="Create Inventory" />
      <View style={[style.pageContainer, PagecontainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
            <Text style={[styles.requiredLabel, textStyle]}>
              <Text style={{ color: "red" }}>*</Text>Name:
            </Text>
            <TextInput
              style={[styles.input, textStyle]}
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            {errors.name && <Text style={style.errorText}>{errors.name}</Text>}

            <Text style={[styles.requiredLabel, textStyle]}>
              <Text style={{ color: "red" }}>*</Text>Quantity:
            </Text>
            <TextInput
              style={[styles.input, textStyle]}
              placeholder="Quantity"
              value={quantity}
              onChangeText={(text) => setQuantity(text)}
            />
            {errors.quantity && <Text style={style.errorText}>{errors.quantity}</Text>}

            <View style={styles.dropdownContainer}>
              <Text style={[styles.requiredLabel, textStyle]}>
                <Text style={{ color: "red" }}>*</Text>Type:
              </Text>
              <Picker
                style={[styles.dropdownPicker, dropdownStyle, textStyle]}
                selectedValue={selectedType}
                onValueChange={(itemValue) => setSelectedType(itemValue)}
              >
                {dropdownItems.map((item, index) => (
                  <Picker.Item key={index} label={item} value={item} />
                ))}
              </Picker>
              {errors.selectedType && <Text style={style.errorText}>{errors.selectedType}</Text>}
            </View>
            <SaveButton onPress={handleSave} />
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
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
  saveButton: {
    backgroundColor: COLORS.successButton,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  dropdownContainer: {
    marginTop: 10,
  },
  dropdownPicker: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    fontFamily: "Roboto",
    borderRadius: 5,
  },
  requiredLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "Roboto",
  },
});

export default SaveInventory;

