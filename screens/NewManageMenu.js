// // NewManageMenu.js
// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import { FONT_FAMILY } from '../config';
// import { icons } from '../constants';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';
// import AddButton from '../components/AddButton';
// import EditButton from '../components/EditButton';



// const FloatingPlusIcon = ({ navigation }) => (
//   <AddButton onPress={() => navigation.navigate('CreateMenu')} />
// );

// const NewManageMenu = ({ navigation }) => {
//   const [selectedType, setSelectedType] = useState('');

//   useFocusEffect(
//     React.useCallback(() => {
//       setSelectedType('');
//       return () => {
//         // Cleanup function (optional)
//       };
//     }, [])
//   );

//   const menuData = [
//     { id: '1', name: 'Burger', category: 'Cat1', ingredients: 'Beef, Lettuce, Tomato, Cheese', vegNonVeg: 'Non-Veg', spicyIndex: 'Medium', price: '$10.99' },
//     { id: '2', name: 'Pizza', category: 'Cat2', ingredients: 'Dough, Tomato Sauce, Cheese, Toppings', vegNonVeg: 'Veg', spicyIndex: 'Mild', price: '$12.99' },
//     { id: '3', name: 'Pasta', category: 'Cat3', ingredients: 'Pasta, Tomato Sauce, Garlic, Olive Oil', vegNonVeg: 'Veg', spicyIndex: 'Mild', price: '$8.99' },
//     // Add more menu data as needed
//   ];

//   const handleEditPress = (menuItem) => {
//     navigation.navigate('UpdateMenu', { menuData: menuItem });
//   };

//   const renderMenuItem = ({ item, index }) => (
//     <View style={{ ...styles.listItem, borderBottomWidth: index === menuData.filter((menu) => (selectedType ? menu.vegNonVeg === selectedType : true)).length - 1 ? 0 : 1 }}>
//       <View style={styles.detailsContainer}>
//         <Text style={{ ...styles.name, ...styles.text }}>{item.name}</Text>
//         <Text style={{ ...styles.vegNonVeg, ...styles.text }}>{item.vegNonVeg}</Text>
//         <Text style={{ ...styles.price, ...styles.text }}>{item.price}</Text>
//       </View>
//       <EditButton onPress={() => handleEditPress(item)} />
//     </View>
//   );
  

//   const renderTypeButton = ({ item }) => (
//     <TouchableOpacity
//       style={{
//         marginLeft: 15,
//         padding: 15,
//         marginTop: 10,
//         marginBottom: 5,
//         backgroundColor: selectedType === item ? 'lightblue' : 'white',
//         borderRadius: 15,
//         alignItems: 'center',
//         justifyContent: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 3,
//         },
//         shadowOpacity: 0.27,
//         shadowRadius: 4.65,
//         elevation: 6,
//         height: 40,
//       }}
//       onPress={() => setSelectedType(item)}
//     >
//       <Text style={{ color: selectedType === item ? 'white' : 'black', marginTop: 5, fontSize: 14, fontWeight: 'bold',fontFamily:'ROBOTO' }}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <>
//       <TitleBar title="Manage Menu" />
//       <View style={style.labelContainer}>
//         <View style={style.container1}>
//           <FlatList
//             data={['Veg', 'Non-Veg']}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item) => item}
//             renderItem={renderTypeButton}
//             style={{ marginTop: 0, marginBottom: 2 }}
//           />
//         </View>
//       </View>
//       <View style={style.pageContainer}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//           <View style={style.container}>
//             <FlatList
//               data={menuData.filter((menu) => (selectedType ? menu.vegNonVeg === selectedType : true))}
//               keyExtractor={(item) => item.id}
//               renderItem={renderMenuItem}
//               style={{ marginTop: 2, marginBottom: 5 }}
//             />
//             <FloatingPlusIcon navigation={navigation} />
//           </View>
//         </ScrollView>
//       </View>
//       <BottomBar />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   listItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: 'black',
//     paddingVertical: 10,
//   },
//   detailsContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   vegNonVeg: {
//     fontSize: 16,
//     color: '#555',
//   },
//   price: {
//     fontSize: 16,
//     color: '#333',
//   },
//   text:{
//     fontFamily:"ROBOTO"
//   }
// });

// export default NewManageMenu;


// NewManageMenu.js
import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
//import { useFocusEffect } from '@react-navigation/native';
import { FONT_FAMILY } from '../config';
import { icons } from '../constants';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import AddButton from '../components/AddButton';
import EditButton from '../components/EditButton';
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';



const FloatingPlusIcon = ({ navigation }) => (
  <AddButton onPress={() => navigation.navigate('CreateMenu')} />
);

const NewManageMenu = ({ navigation }) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://194.195.116.199/owner_api/menu/listview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ restaurant_id: 13 }) // Send restaurant_id as 1
    });
     const data = await response.json();
      if (data.st === 1) {
        setMenuData(data.lists);
      } else {
        console.error('Error:', data.msg);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
  const flatListItemStyle = {
    backgroundColor: isDarkMode ? darkTheme.flatListItemBackground : lightTheme.flatListItemBackground,
  };

  const borderColorStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
    borderBottomColor: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
  };


  const [selectedType, setSelectedType] = useState('');

  // useFocusEffect(
  //   React.useCallback(() => {
  //     setSelectedType('');
  //     return () => {
  //       // Cleanup function (optional)
  //     };
  //   }, [])
  // );

  // const menuData = [
  //   { id: '1', name: 'Burger', category: 'Cat1', ingredients: 'Beef, Lettuce, Tomato, Cheese', vegNonVeg: 'Non-Veg', spicyIndex: 'Medium', price: 'Rs10.99' },
  //   { id: '2', name: 'Pizza', category: 'Cat2', ingredients: 'Dough, Tomato Sauce, Cheese, Toppings', vegNonVeg: 'Veg', spicyIndex: 'Mild', price: 'Rs12.99' },
  //   { id: '3', name: 'Pasta', category: 'Cat3', ingredients: 'Pasta, Tomato Sauce, Garlic, Olive Oil', vegNonVeg: 'Veg', spicyIndex: 'Mild', price: 'Rs8.99' },
  //   // Add more menu data as needed
  // ];

  const handleEditPress = (menuItem) => {
    navigation.navigate('UpdateMenu', { menuData: menuItem });
  };

  const renderMenuItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleEditPress(item)}>
    <View style={{ ...styles.listItem, borderBottomWidth: index === menuData.filter((menu) => (selectedType ? menu.veg_nonveg === selectedType : true)).length - 1 ? 0 : 1 ,...borderColorStyle}}>
      <View style={styles.detailsContainer}>
        <Text style={{ ...styles.name, ...styles.text,color: textStyle.color }}>{item.name}</Text>
        <Text style={{ ...styles.vegNonVeg, ...styles.text ,color: textStyle.color}}>{item.veg_nonveg}</Text>
        <Text style={{ ...styles.price, ...styles.text ,color: textStyle.color}}>{item.price}</Text>
      </View>
      <EditButton onPress={() => handleEditPress(item)} />
    </View>
    </TouchableOpacity>
  );
  

  const renderTypeButton = ({ item }) => {
    const shadowColor = isDarkMode ? darkTheme.shadowColor : lightTheme.shadowColor
    const shadowOpacity = isDarkMode ? darkTheme.shadowOpacity : lightTheme.shadowOpacity
    const buttonText = `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`;


    return (
    <TouchableOpacity
      style={{
        marginLeft: 15,
        padding: 15,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: selectedType === item ? 'lightblue' : flatListItemStyle.backgroundColor,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: shadowColor,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: shadowOpacity,
        shadowRadius: 4.65,
        elevation: 6,
        height: 40,
      }}
      onPress={() => setSelectedType(item)}
    >
      <Text style={{ color: selectedType === item ? 'white'  :textStyle.color, marginTop: 5, fontSize: 14, fontWeight: 'bold',fontFamily:'ROBOTO' }}>{buttonText}</Text>
    </TouchableOpacity>
  );
    };

  return (
    <>
      <TitleBar title="Manage Menu" />
      <View style={[style.labelContainer, pageContainerStyle]}>
        <View style={[style.container1, containerStyle]}>
          <FlatList
            data={['veg', 'nonveg']}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={renderTypeButton}
            style={{ marginTop: 0, marginBottom: 2 }}
          />
        </View>
      </View>
      <View style={[style.pageContainer1, pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
        <View style={[style.container, containerStyle]}>
            <FlatList
              data={menuData.filter((menu) => (selectedType ? menu.veg_nonveg === selectedType : true))}
              keyExtractor={(item) => item.menu_id}
              renderItem={renderMenuItem}
              style={{ marginTop: 2, marginBottom: 5 }}
            />
            <FloatingPlusIcon navigation={navigation} />
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
};

const styles = StyleSheet.create({
  
  listItem: {
    flexDirection: 'row',
    height:'100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
     paddingVertical: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  vegNonVeg: {
    fontSize: 16,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#333',
  },
  text:{
    fontFamily:"ROBOTO"
  }
});

export default NewManageMenu;
