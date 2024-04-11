// UpdateMenu.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text ,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Platform,
 Switch,
  Image
} from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import { FONT_FAMILY } from '../config';
import { icons } from '../constants';
import style from '../constants/style';
import { MaterialIcons } from '@expo/vector-icons';
import DeleteUpdateButton from '../components/DeleteUpdateButton';
  import { useTheme } from '../components/ThemeProvider';
  import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { Category } from '@mui/icons-material';
  const Picker = RNPicker
    // Platform.OS === 'web' ? require('react-native-web').Picker : RNPicker;
  
    const UpdateMenu = ({ route, navigation }) => {
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

  const menuData = route.params.menuData;
  const [name, setName] = useState(menuData.name || '');
  const [category, setCategory] = useState(menuData.menu_cat_id === 1 ? "Cat1" : "Cat2");
  const [ingredients, setIngredients] = useState(menuData.ingredients || 'oil');
  const [vegNonVeg, setVegNonVeg] = useState(menuData.veg_nonveg || '');
  //const [spicy, setSpicy] = useState(menuData.spicy_index || '');
  const [spicy, setSpicy] = useState(menuData.spicy_index === 'Spicy' ? "Hot" : (menuData.spicy_index === 'Medium' ? "Medium" : "Mild"));
  const [price, setPrice] = useState(String(menuData.price) || '');
  const [errors, setErrors] = useState({});
  const [toggle, setToggle] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    const nameRegex = /^[a-zA-Z\s]+$/;
 // Regular expression to allow only characters and numerical values
    const ingredientsRegex = /^[a-zA-Z0-9, \s]+$/;
    const priceRegex = /^[a-zA-Z0-9,.\s]+$/;


    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }else if (!nameRegex.test(name)) {
      newErrors.name = 'Invalid characters in Name ';
    }

    if (!category.trim()) {
      newErrors.category = 'Category is required';
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }else if (!ingredientsRegex.test(ingredients)) {
      newErrors.ingredients = ' Invalid Ingredients ';
    }

    if (!vegNonVeg.trim()) {
      newErrors.vegNonVeg = 'Veg/Non-Veg is required';
    }

    if (!spicy.trim()) {
      newErrors.spicy = 'Spicy is required';
    }

    if (!price.trim()) {
      newErrors.price = 'Price is required';
    } else if (!priceRegex.test(price)) {
      newErrors.price = ' Invalid price ';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async() => {
    if (validateForm()) {
      // Implement your update logic here
      // console.log('Update pressed', {
      //   name,
      //   category,
      //   ingredients,
      //   vegNonVeg,
      //   spicy,
      //   price,
      // });

      let convertedSpicy = spicy;
      if (spicy === 'Hot') {
        convertedSpicy = 'Spicy';
      } else if (spicy === 'Mild') {
        convertedSpicy = 'Sweet';
      } else {
        convertedSpicy = 'Medium';
      }
  
      // Navigate back to the previous screen or any other screen as needed
      try {
        const response = await fetch(
          "http://194.195.116.199/owner_api/menu/update",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              menu_cat_id: menuData.menu_cat_id,
              restaurant_id: menuData.restaurant_id,
              name: name,
              veg_nonveg: vegNonVeg,
              spicy_index: convertedSpicy,
              price:price,
              menu_id:menuData.menu_id
            }),
          }
        );
        const data = await response.json();
        if (data.st === 1) {
          console.log("menu updated successfully:", data.msg);
          // You can navigate back to the previous screen if needed
          // navigation.goBack();
        } else {
          console.error("Error updating category:", data.msg);
        }
      } catch (error) {
        console.error("Error:", error);
      }

      navigation.goBack();
    } else {
      console.log('Update data validation failed!');
    }
  };

  const handleDelete=async()=>{
    try {
      //console.log(inventoryData)
      const response = await fetch(
        "http://194.195.116.199/owner_api/menu/delete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
             // Pass the menu_cat_id for identification
            restaurant_id: menuData.restaurant_id, // Pass the restaurant_id for identification
            menu_id:menuData.menu_id
          }),
        }
      );
      const data = await response.json();
      if (data.st === 1) {
        console.log("Menu deleted successfully:", data.msg);
        // You can navigate back to the previous screen if needed
        // navigation.goBack();
      } else {
        console.error("Error deleting Menu", data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    // Set the initial value of toggle based on the default vegNonVeg value
    setToggle(vegNonVeg === 'nonveg');
  }, [vegNonVeg]);
  return (
    <>
      <TitleBar title="Update Menu" />
      <View style={[style.pageContainer,  pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
        <View style={[style.container, containerStyle]}>
        

          <Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Name:
          </Text>
            <TextInput
              style={[styles.input, errors.name ? styles.inputError : null, textStyle]}
              value={name}
              placeholder="Enter Name"
              onChangeText={(text) => setName(text)}
            />
            {errors.name && (
              <Text style={style.errorText}>{errors.name}</Text>
            )}

<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Category:
          </Text>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
              style={{ ...styles.input, backgroundColor: 'white',...dropdownStyle, ...textStyle }}
            >
              <Picker.Item label="Select Category" value="" />
              <Picker.Item label="Cat1" value="Cat1" />
              <Picker.Item label="Cat2" value="Cat2" />
            </Picker>
            {errors.category && (
              <Text style={style.errorText}>{errors.category}</Text>
            )}

<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Ingredients:
          </Text>
            <TextInput
              style={[styles.input, errors.ingredients ? styles.inputError : null , textStyle]}
              value={ingredients}
              placeholder="Enter Ingredients"
              onChangeText={(text) => setIngredients(text)}
            />
            {errors.ingredients && (
              <Text style={style.errorText}>{errors.ingredients}</Text>
            )}

            {/* <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Veg/Non-Veg:
          </Text>
            <Picker
              selectedValue={vegNonVeg}
              onValueChange={(itemValue) => setVegNonVeg(itemValue)}
              style={[styles.input, { backgroundColor: 'white' }]}
            >
              <Picker.Item label="Select Veg/Non-Veg" value="" />
              <Picker.Item label="Veg" value="Veg" />
              <Picker.Item label="Non-Veg" value="Non-Veg" />
            </Picker>
            {errors.vegNonVeg && (
              <Text style={style.errorText}>{errors.vegNonVeg}</Text>
            )} */}

<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Veg/Non-Veg:
          </Text>
      <View style={[styles.vegNonVegContainer,containerStyle]}>
        <Text style={[styles.toggleText,textStyle]}>{vegNonVeg}</Text>
        <Switch
          trackColor={{ false: 'green', true: 'red' }}
          thumbColor="white"
          ios_backgroundColor="green"
          onValueChange={(value) => {
            setToggle(value);
            setVegNonVeg(value ? 'nonveg' : 'veg');
          }}
          value={toggle}
        />
      </View>
      {errors.vegNonVeg && <Text style={style.errorText}>{errors.vegNonVeg}</Text>}



      <Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Spicy:
          </Text>
      <Picker
        selectedValue={spicy}
        onValueChange={(itemValue) => setSpicy(itemValue)}
        style={{ ...styles.input, backgroundColor: 'white',...dropdownStyle, ...textStyle }}
      >
        <Picker.Item label="Select Spicy" value="" />
        <Picker.Item label="Mild" value="Mild" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="Hot" value="Hot" />
      </Picker>
      {errors.spicy && <Text style={style.errorText}>{errors.spicy}</Text>}

            {/* <Text style={styles.label}><Text style={{ color: "red" }}>*</Text>Spicy:
          </Text>
            <TextInput
              style={[styles.input, errors.spicy ? styles.inputError : null]}
              value={spicy}
              placeholder="Enter Spicy"
              onChangeText={(text) => setSpicy(text)}
            />
            {errors.spicy && (
              <Text style={style.errorText}>{errors.spicy}</Text>
            )} */}
<Text style={[styles.label, textStyle]}><Text style={{ color: "red" }}>*</Text>Price:
          </Text>
            <TextInput
              style={[styles.input, errors.price ? styles.inputError : null , textStyle]}
              value={price}
              placeholder="Enter Price"
              onChangeText={(text) => setPrice(text)}
            />
            {errors.price && (
              <Text style={style.errorText}>{errors.price}</Text>
            )}

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
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '95%',
    marginHorizontal: 'auto',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
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
    fontFamily: 'ROBOTO',
  },
  input: {
    height: 30,
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
  // errorText: {
  //   color: 'red',
  //   marginBottom: 10,
  //   fontFamily: 'ROBOTO',
  // },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  // deleteButton: {
  //   backgroundColor: '#fff',
  // },
  // updateButton: {
  //   backgroundColor: 'orange',
  //   padding: 10,
  //   borderRadius: 5,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: '30%',
  // },
  // buttonText: {
  //   color: 'white',
  //   fontFamily: 'ROBOTO',
  //   fontSize: 16,
  // },

  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'green', // Default color for Veg
    marginBottom: 5,
  },
  toggleText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'ROBOTO',
  },
  vegNonVegContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'white', // Default color for Veg
    marginBottom: 5,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 5,
    fontFamily: 'ROBOTO',
   
   
  },
 
});

export default UpdateMenu;

