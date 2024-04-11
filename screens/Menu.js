// Menu.js

import React from 'react';
import { View, Text } from 'react-native';
import TitleBar from '../components/TitleBar';
import ExtraScreen from './ExtraScreen';

const Menu = () => {
  return (
    <>
    <TitleBar title="Menu"/>
    <View>
      <Text>Menu</Text>
    </View>
    <ExtraScreen/>
    </>
  );
};

Menu.navigationOptions = {
  headerStyle: {
    backgroundColor: 'red', // Set the background color to red
  },
  headerTintColor: '#fff', // Set the text color to white
};

export default Menu;


// import { View, Text } from 'react-native'
// import React from 'react'

// const Menu = () => {
//   return (
//     <View>
//       <Text>Menu</Text>
//     </View>
//   )
// }

// export default Menu