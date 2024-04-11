// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Picker,
//   TextInput,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import TitleBar from "../components/TitleBar";
// import BottomBar from "../components/BottomBar";
// import style from "../constants/style";
// import { MaterialIcons } from "@expo/vector-icons";
// import DeleteUpdateButton from "../components/DeleteUpdateButton";
// const UpdateInventory = ({ route, navigation }) => {
//   const staffData = route && route.params ? route.params.staffData || {} : {};

//   const [name, setName] = useState(staffData.name || "");
//   const [quantity, setQuantity] = useState(staffData.mobile || "");
//   const [category, setCategory] = useState("");

//   const [nameError, setNameError] = useState("");
//   const [quantityError, setQuantityError] = useState("");
//   const [categoryError, setCategoryError] = useState("");

//   const categories = ["Select Type", "Hotel", "Kitchen", "Garden"];

//   const handleUpdate = () => {
//     // Validate fields
//     if (!name || !quantity || !category || category === "Select Type") {
//       setNameError(name ? "" : "Name is required");
//       setQuantityError(quantity ? "" : "Quantity is required");
//       setCategoryError(
//         category && category !== "Select Type" ? "" : "Category is required"
//       );
//       return;
//     }

//     // Implement your update logic here
//     console.log("Update pressed", { name, quantity, category });

//     // Reset error states after a successful update
//     setNameError("");
//     setQuantityError("");
//     setCategoryError("");

//     // You can navigate back to the previous screen if needed
//     // navigation.goBack();
//   };

//   const handleDelete = () => {
//     console.log("Data to be deleted");
//   };

//   return (
//     <>
//     <TitleBar title="Update Inventory" />
//     <View style={style.pageContainer}>
//       <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//           <Text style={styles.label}>
//           <Text style={{ color: "red" }}>*</Text>Name:
//           </Text>
//           <TextInput
//             style={[styles.input, nameError ? { borderColor: "red" } : null]}
//             value={name}
//             placeholder="Enter Name"
//             onChangeText={(text) => setName(text)}
//           />
//           {nameError ? (
//             <Text style={style.errorText}>{nameError}</Text>
//           ) : null}

//           <Text style={styles.label}>
//           <Text style={{ color: "red" }}>*</Text>Quantity:
//           </Text>
//           <TextInput
//             style={[
//               styles.input,
//               quantityError ? { borderColor: "red" } : null,
//             ]}
//             value={quantity}
//             placeholder="Enter Quantity"
//             onChangeText={(text) => setQuantity(text)}
//           />
//           {quantityError ? (
//             <Text style={style.errorText}>{quantityError}</Text>
//           ) : null}

//           <Text style={styles.label}>
//           <Text style={{ color: "red" }}>*</Text>Category:
//           </Text>
//           <Picker
//             selectedValue={category}
//             onValueChange={(itemValue) => setCategory(itemValue)}
//             style={[
//               styles.input,
//               categoryError ? { borderColor: "red" } : null,
//             ]}
//           >
//             {categories.map((cat, index) => (
//               <Picker.Item key={index} label={cat} value={cat} />
//             ))}
//           </Picker>
//           {categoryError ? (
//             <Text style={style.errorText}>{categoryError}</Text>
//           ) : null}

//        <DeleteUpdateButton onDelete={handleDelete} onUpdate={handleUpdate} />
//         </View>
//       </ScrollView>
//     </View>
//     <BottomBar />
//   </>
// );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "white",
//     borderWidth: 1,
//     borderColor: "black",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
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
//   buttonRow: {
//     flexDirection: "row",
//     marginTop: 20,
//     justifyContent: "space-between", // Space between Delete and Update buttons
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
//     fontFamily: "ROBOTO", // Add fontFamily here
//     color: "red",
//     marginBottom: 5,
//   },
// });

// export default UpdateInventory;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; 
import TitleBar from "../components/TitleBar";
import BottomBar from "../components/BottomBar";
import DeleteUpdateButton from "../components/DeleteUpdateButton";
import style from "../constants/style";
import { MaterialIcons } from "@expo/vector-icons";

import { lightTheme, darkTheme } from "../constants/ThemeStyles";
import { useTheme } from "../components/ThemeProvider";

const UpdateInventory = ({ route, navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const containerStyle = {
    backgroundColor: isDarkMode
      ? darkTheme.backgroundColor
      : lightTheme.backgroundColor,
  };

  const PagecontainerStyle = {
    backgroundColor: isDarkMode
      ? darkTheme.PageContainer
      : lightTheme.PageContainer,
  };

  const textStyle = {
    color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
  };

  const dropdownStyle = {
    color: isDarkMode ? darkTheme.dropdownColor : lightTheme.dropdownColor,
    backgroundColor: isDarkMode
      ? darkTheme.backgroundColor
      : lightTheme.backgroundColor,
  };

  const inventoryData = route.params?.inventoryData || {};

  const [name, setName] = useState(inventoryData.name || "");
  const [quantity, setQuantity] = useState(String(inventoryData.quantity) || "");
  const [type, setType] = useState(inventoryData.type || "");

  const [nameError, setNameError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [typeError, setTypeError] = useState("");

  const types = ["Select Type", "hotel", "kitchen", "garden"];

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;

    const quantityRegex = /^[0-9]+$/;

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Invalid characters in Name ";
    }

    if (!quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (!quantityRegex.test(quantity)) {
      newErrors.quantity = "Invalid Quantity";
    }

    if (!type.trim() || type === "Select Type") {
      newErrors.type = "Type is required";
    }

    setNameError(newErrors.name || "");
    setQuantityError(newErrors.quantity || "");
    setTypeError(newErrors.type || "");

    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async () => {
    console.log(inventoryData)
    if (validateForm()) {
      // Implement update logic here
      try {
        const response = await fetch(
          "http://194.195.116.199/owner_api/inventory/update",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              inventory_id: inventoryData.inventory_id,
              restaurant_id: inventoryData.restaurant_id,
              name: name,
              quantity: quantity,
              description: inventoryData.description,
              type: type,
            }),
          }
        );
        const data = await response.json();
        if (data.st === 1) {
          console.log("inventory updated successfully:", data.msg);
          // You can navigate back to the previous screen if needed
          // navigation.goBack();
        } else {
          console.error("Error updating category:", data.msg);
        }
      } catch (error) {
        console.error("Error:", error);
      }

      // Reset error states after a successful update
      // setNameError("");
      // setQuantityError("");
      // setTypeError("");

      // You can navigate back to the previous screen if needed
      // navigation.goBack();
    } else {
      console.log("Form data validation failed!");
    }
  };

  const handleDelete = async () => {
    try {
      console.log(inventoryData)
      const response = await fetch(
        "http://194.195.116.199/owner_api/inventory/delete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inventory_id: inventoryData.inventory_id, // Pass the menu_cat_id for identification
            restaurant_id: inventoryData.restaurant_id, // Pass the restaurant_id for identification
          }),
        }
      );
      const data = await response.json();
      if (data.st === 1) {
        console.log("Inventory deleted successfully:", data.msg);
        // You can navigate back to the previous screen if needed
        // navigation.goBack();
      } else {
        console.error("Error deleting Inventory:", data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <TitleBar title="Update Inventory" />
      <View style={[style.pageContainer, PagecontainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
            <Text style={[styles.label, textStyle]}>
              <Text style={{ color: "red" }}>*</Text>Name:
            </Text>
            <TextInput
              style={[
                styles.input,
                nameError ? { borderColor: "red" } : null,
                textStyle,
              ]}
              value={name}
              placeholder="Enter Name"
              onChangeText={(text) => setName(text)}
            />
            {nameError ? (
              <Text style={style.errorText}>{nameError}</Text>
            ) : null}

            <Text style={[styles.label, textStyle]}>
              <Text style={{ color: "red" }}>*</Text>Quantity:
            </Text>
            <TextInput
              style={[
                styles.input,
                quantityError ? { borderColor: "red" } : null,
                textStyle,
              ]}
              value={quantity}
              placeholder="Enter Quantity"
              onChangeText={(text) => setQuantity(text)}
            />
            {quantityError ? (
              <Text style={style.errorText}>{quantityError}</Text>
            ) : null}

            <Text style={[styles.label, textStyle]}>
              <Text style={{ color: "red" }}>*</Text>Type:
            </Text>
            <Picker
              selectedValue={type}
              onValueChange={(itemValue) => setType(itemValue)}
              style={[
                styles.input,
                typeError ? { borderColor: "red" } : null,
                dropdownStyle,
                textStyle,
              ]}
              
            >
              {types.map((type, index) => (
                <Picker.Item  key={index} label={type} value={type} />
              ))}
            </Picker>
            {typeError ? (
              <Text style={style.errorText}>{typeError}</Text>
            ) : null}

            <DeleteUpdateButton
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
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
    borderWidth: 1,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
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
  // errorText: {
  //   fontFamily: "ROBOTO",
  //   color: "red",
  //   marginBottom: 5,
  // },
});

export default UpdateInventory;
