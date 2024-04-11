import React, { useState ,useEffect} from 'react';
import { ScrollView, View, Text , TextInput, StyleSheet, Image, TouchableOpacity, Picker ,Switch} from 'react-native';
import Footer from '../components/Footer';
import { FONT_FAMILY } from '../config';
import TitleBar from '../components/TitleBar';
import ExtraScreen from './ExtraScreen';
import BottomBar from '../components/BottomBar';
import { COLORS } from '../constants';
import style from '../constants/style';
import SaveButton from '../components/SaveButton';

import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';


const CreateMenu = ({ navigation }) => {
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

  const inputBorderStyle = {
    borderColor: isDarkMode ? darkTheme.inputBorderColor : lightTheme.inputBorderColor,
  };

  const dropdownStyle = {
    color: isDarkMode ? darkTheme.dropdownColor : lightTheme.dropdownColor,
    backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
  };

  const switchTrackColor = {
    false: 'green',
    true: 'red',
  };


  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [vegNonVeg, setVegNonVeg] = useState('');
  const [spicy, setSpicy] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});
  // const [toggleColor, setToggleColor] = useState(vegNonVeg.toLowerCase() === 'veg' ? 'green' : 'red');
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
      newErrors.spicy = 'Spicy  is required';
    }

    if (!price.trim()) {
      newErrors.price = 'Price is required';
    } else if (!priceRegex.test(price)) {
      setPriceError('Invalid characters in Price');
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      // Convert spicy level if needed
      let convertedSpicy = spicy;
      if (spicy === 'Mild') {
        convertedSpicy = 'Sweet';
      } else if (spicy === 'Hot') {
        convertedSpicy = 'Spicy';
      }else{
        convertedSpicy="Medium"
      }

      let menuCatId;
      if (category === 'Cat1') {
        menuCatId = 1;
      } else {
        menuCatId = 2;
      }
      const vegNonVegValue = toggle ? 'nonveg' : 'veg'; // Set veg_nonveg based on toggle state


      const formData = {
        restaurant_id: 13,
        menu_cat_id: menuCatId,
        name,
        veg_nonveg: vegNonVegValue,
        spicy_index: convertedSpicy, // Use the converted spicy level
        price,
        
      };

      fetch('http://194.195.116.199/owner_api/menu/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          if (data.st === 1) {
            console.log('Menu item created successfully:', data.msg);
            navigation.goBack();
          } else {
            console.error('Failed to create menu item:', data.msg);
            // Handle error accordingly
          }
        })
        .catch(error => {
          console.error('Error while creating menu item:', error);
          // Handle error accordingly
        });
    } else {
      console.log('Menu data validation failed!');
    }
  };

  useEffect(() => {
    // Set the initial value of toggle based on the default vegNonVeg value
    setToggle(vegNonVeg === 'Non-Veg');
  }, [vegNonVeg]);

  return (
    <>
    <TitleBar title="Create Menu" />
    <View style={[style.pageContainer, pageContainerStyle]}>
      <ScrollView contentContainerStyle={style.scrollContainer}>
        <View style={[style.container, containerStyle]}>
          <Text style={[styles.label, textStyle]}>
            <Text style={{ color: 'red' }}>*</Text>Name:
          </Text>
          <TextInput
            style={[styles.input, inputBorderStyle, textStyle,containerStyle,]}
            value={name}
            placeholder="Enter Name"
            onChangeText={(text) => setName(text)}
            onBlur={validateForm} 
          />
          {errors.name && <Text style={[style.errorText]}>{errors.name}</Text>}

          <Text style={[styles.label, textStyle]}>
            <Text style={{ color: 'red' }}>*</Text>Category:
          </Text>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={[styles.input, { backgroundColor: 'white' }, dropdownStyle, textStyle]}
          >
            <Picker.Item label="Select Category" value="" />
            <Picker.Item label="Cat1" value="Cat1" />
            <Picker.Item label="Cat2" value="Cat2" />
          </Picker>
          {errors.category && <Text style={[style.errorText]}>{errors.category}</Text>}

          <Text style={[styles.label, textStyle]}>
            <Text style={{ color: 'red' }}>*</Text>Ingredients:
          </Text>
          <TextInput
            style={[styles.input, inputBorderStyle, textStyle,containerStyle]}
            value={ingredients}
            placeholder="Enter Ingredients"
            onChangeText={(text) => setIngredients(text)}
          />
          {errors.ingredients && <Text style={[style.errorText]}>{errors.ingredients}</Text>}

          <Text style={[styles.label, textStyle]}>
            <Text style={{ color: 'red' }}>*</Text>Veg/Non-Veg:
          </Text>
          <View style={[styles.vegNonVegContainer, containerStyle]}>
            <Text style={[styles.toggleText, textStyle]}>{vegNonVeg}</Text>
            <Switch
              trackColor={switchTrackColor}
              thumbColor="white"
              ios_backgroundColor="green"
              onValueChange={(value) => {
                setToggle(value);
                setVegNonVeg(value ? 'Non-Veg' : 'Veg');
              }}
              value={toggle}
            />
          </View>
          {errors.vegNonVeg && <Text style={[style.errorText]}>{errors.vegNonVeg}</Text>}

          <Text style={[styles.label, textStyle]}>
            <Text style={{ color: 'red' }}>*</Text>Spicy:
          </Text>
          <Picker
            selectedValue={spicy}
            onValueChange={(itemValue) => setSpicy(itemValue)}
            style={[styles.input, { backgroundColor: 'white' }, dropdownStyle, textStyle]}
          >
            <Picker.Item label="Select Spicy" value="" />
            <Picker.Item label="Mild" value="Mild" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="Hot" value="Hot" />
          </Picker>
          {errors.spicy && <Text style={[style.errorText]}>{errors.spicy}</Text>}

          <Text style={[styles.label, textStyle]}>
            <Text style={{ color: 'red' }}>*</Text>Price:
          </Text>
          <TextInput
            style={[styles.input, inputBorderStyle, textStyle,containerStyle]}
            value={price}
            placeholder="Enter Price"
            onChangeText={(text) => setPrice(text)}
          />
          {errors.price && <Text style={[style.errorText]}>{errors.price}</Text>}

          <SaveButton onPress={handleSave} />
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
    backgroundColor: 'white', // Set the background color to white
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 70,
  },
  
  formContainer: {
    backgroundColor: '#fff',
    width: '95%',
    marginHorizontal: 'auto',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
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
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 5,
    fontFamily: 'ROBOTO',
    backgroundColor: 'white',
  },
  // errorText: {
  //   color: 'red',
  //   marginBottom: 10,
  //   fontFamily: 'ROBOTO',
  // },
  saveButton: {
    backgroundColor: COLORS.successButton,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 'auto',
    width: '30%',
    marginBottom: 80,
  },
  saveButtonText: {
    color: 'white',
    fontFamily: 'ROBOTO',
    fontSize: 16,
  },
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

export default CreateMenu;
