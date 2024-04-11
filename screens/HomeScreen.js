// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Image,ScrollView } from 'react-native';
// import BottomNavigation from '../BottomNav/BottomNavigation/BottomNavigation';
// import HeaderScreen from './HeaderScreen';
// import ExtraScreen from './ExtraScreen';
// import TitleBar from '../components/TitleBar';
// import { COLORS } from '../constants';
// import { MaterialIcons } from '@expo/vector-icons';
// import style from '../constants/style';

// export default function HomeScreen(props) {
  
//   return (
//     <>
//       <TitleBar title="Daily Delight" showBackIcon={false} />
//       <View style={style.pageContainer}>
//       <ScrollView contentContainerStyle={style.scrollContainer}>  
//       <View style={style.container}>
      
//         <View style={styles.row}>
//           <TouchableOpacity
//             onPress={() => props.navigation.navigate('Reports')}
//             style={styles.item}
//           >
//             {/* <Image
//               resizeMode="contain"
//               source={chartIcon}
//               style={styles.itemImage}
//             /> */}
//             <MaterialIcons name="bar-chart" size={30} color={COLORS.black} />
//             <Text style={styles.itemText}>Reports</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => props.navigation.navigate('Inventory')}
//             style={styles.item}
//           >
//             {/* <Image
//               resizeMode="contain"
//               source={profileIcon}
//               style={styles.itemImage}
//             /> */}
//             <MaterialIcons name="store" size={30} color={COLORS.black} />
//             <Text style={styles.itemText}>Inventory</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => props.navigation.navigate('ManageStaff')}
//             style={styles.item}
//           >
//             {/* <Image
//               resizeMode="contain"
//               source={chatIcon}
//               style={styles.itemImage}
//             /> */}
//              <MaterialIcons name="people" size={30} color={COLORS.black} />
//             <Text style={styles.itemText}>Staff</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.row}>
//           <TouchableOpacity
//             onPress={() => props.navigation.navigate('Manage Order')}
//             style={styles.item}
//           >
//             {/* <Image
//               resizeMode="contain"
//               source={calendarIcon}
//               style={styles.itemImage}
//             /> */}
//                <MaterialIcons name="list-alt" size={30} color={COLORS.black} />
//             <Text style={styles.itemText}>Order</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => props.navigation.navigate('ManageMenu')}
//             style={styles.item}
//           >
//             {/* <Image
//               resizeMode="contain"
//               source={loginIcon}
//               tintColor={colors.primary}
//               style={styles.itemImage}
//             /> */}
//              <MaterialIcons name="restaurant-menu" size={30} color={COLORS.black} />
//             <Text style={styles.itemText}> Menu</Text>
//           </TouchableOpacity>

//           {/* <TouchableOpacity
//             onPress={() => props.navigation.navigate('Manage Bills')}
//             style={styles.item}
//           > */}
//             {/* <Image
//               resizeMode="contain"
//               source={blogIcon}
//               tintColor={colors.primary}
//               style={styles.itemImage}
//             /> */}
//             {/* <MaterialIcons name="money" size={30} color={COLORS.black} />
//             <Text style={styles.itemText}>Bills</Text>
//           </TouchableOpacity> */}
//         </View>
//         </View>
//    </ScrollView>
//       </View>
      
      
//       <ExtraScreen />
   
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//     marginTop: 10,
//   },
//   item: {
//     height: 100,
//     width: 100, // Set a fixed width for all buttons
//     paddingVertical: 20,
//     borderWidth: 1,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 5,
//     backgroundColor: 'white',
//   },
//   itemText: {
//     fontFamily: 'ROBOTO',
//   },
//   itemImage: {
//     height: 35,
//   },
// });


import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TitleBar from '../components/TitleBar';
import ExtraScreen from './ExtraScreen';
import style from '../constants/style';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';

export default function HomeScreen(props) {
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

  const borderColorStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
  };

  return (
    <>
      <TitleBar title="MenuMitra" showBackIcon={false} />
      <View style={[style.pageContainer, PagecontainerStyle, styles.centerContainer]}>
        <ScrollView contentContainerStyle={[style.scrollContainer, PagecontainerStyle]}>
          <View style={[style.container, containerStyle]}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Reports')}
                style={[styles.item, containerStyle, borderColorStyle]}
              >
                <MaterialIcons name="bar-chart" size={30} color={textStyle.color} />
                <Text style={[styles.itemText, textStyle]}>Reports</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('Inventory')}
                style={[styles.item, containerStyle, borderColorStyle]}
              >
                <MaterialIcons name="store" size={30} color={textStyle.color} />
                <Text style={[styles.itemText, textStyle]}>Inventory</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('ManageStaff')}
                style={[styles.item, containerStyle, borderColorStyle]}
              >
                <MaterialIcons name="people" size={30} color={textStyle.color} />
                <Text style={[styles.itemText, textStyle]}>Staff</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Calender')}
                style={[styles.item, containerStyle, borderColorStyle]}
              >
                <MaterialIcons name="list-alt" size={30} color={textStyle.color} />
                <Text style={[styles.itemText, textStyle]}>Order</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('ManageMenu')}
                style={[styles.item, containerStyle, borderColorStyle]}
              >
                <MaterialIcons name="restaurant-menu" size={30} color={textStyle.color} />
                <Text style={[styles.itemText, textStyle]}> Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <ExtraScreen />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    height: 100,
    width: 100,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:8,
    backgroundColor: 'white',
  },
  itemText: {
    fontFamily: 'ROBOTO',
  },
  centerContainer: {
    justifyContent: 'center',
  },
  itemImage: {
    height: 35,
  },
});
