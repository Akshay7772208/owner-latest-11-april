// // CustomDrawerContent.js
// import React from 'react';
// import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { View, Text } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       {/* Custom Header */}
//       <View
//         style={{
//           height: 80,
//           width: '100%',
//           justifyContent: 'center',
//           alignItems: 'center',
//           borderBottomColor: '#f4f4f4',
//           borderBottomWidth: 1,
//         }}
//       >
//         <MaterialIcons name="menu" size={30} style={{ marginLeft: 10 }} />
//       </View>

//       {/* Drawer Items */}
//       <DrawerItemList {...props} />

//       {/* Logout Item */}
//       <DrawerItem
//         label="Logout"
//         onPress={() => {
//           // Perform logout logic here
//           console.log('Logout pressed');
//         }}
//         style={{
//           padding: 16,
//           borderTopWidth: 1,
//           borderTopColor: '#f4f4f4',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontFamily: 'Roboto-Regular',
//         }}
//         labelStyle={{ color: '#f4511e', fontWeight: 'bold' }}
//       />

//       {/* Version Info */}
//       <View
//         style={{
//           paddingBottom: 20,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Text style={{ color: '#777', fontFamily: 'Roboto-Regular' }}>v1.0</Text>
//       </View>
//     </DrawerContentScrollView>
//   );
// };

// export default CustomDrawerContent;
