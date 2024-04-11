// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, React Native!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default App;




import React,{useRef} from 'react';

import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EnterEmailScreen from './screens/EnterEmailScreen';
import VerifyOTPScreen from './screens/VerifyOTPScreen';
import SplashScreen from './screens/SplashScreen';
 import ManageStaffScreen from './screens/ManageStaffScreen';
import MyForm from './screens/SaveDetailsScreen';
import UpdateScreen from './screens/UpdateScreen';
import BottomNavigation from './BottomNav/BottomNavigation/BottomNavigation';
import ExtraScreen from './screens/ExtraScreen';
import Menu from './BottomNav/Menu';
import ManageMenu from './screens/ManageMenu';
import ManageOrder from './screens/ManageOrder';
import Staff from './BottomNav/Staff';
import Bills from './BottomNav/Bills';
import HomeScreen from './screens/HomeScreen';
import ManageCategory from './screens/ManageCategory';
import CustomSidebar from './components/CustomSidebar';
import SidebarIcon from './components/CustomHeader';
import HeaderScreen from './screens/HeaderScreen';
import Reports from './screens/Reports';
import Order from './BottomNav/Order';
import KitchenInventory from './screens/KitchenInventory';
import HotelInventory from './screens/HotelInventory';
import SaveCategoryDetails from './screens/SaveCategoryDetails';
import ProfileScreen from './screens/Profile';
import UpdateCategoryDetails from './screens/UpdateCategoryScreen';
import Inventory from './screens/Inventory';
import SaveInventory from './screens/SaveInventory';
import UpdateInventory from './screens/UpdateInventory';
import OrderViewScreen from './screens/OrderViewScreen';
import { Text  } from 'react-native';

import { FONT_FAMILY } from './config'; // Import font family from config.js
import NewManageMenu from './screens/NewManageMenu';
import CreateMenu from './screens/CreateMenu';
import UpdateMenu from './screens/UpdateMenu';
import LineChartScreen from './screens/LineChartScreen';
import BarChartScreen from './screens/BarChartScreen';
import PieChartScreen from './screens/PieChartScreen';
import { ThemeProvider } from './components/ThemeProvider';
import Calender from './screens/Calender';
import Toast from 'react-native-toast-message';
import Layout from './screens/Layout';

// RNText.defaultProps = {
//   style: { fontFamily: FONT_FAMILY },
// };

const Stack = createStackNavigator();


const App = () => {
  const toastRef = useRef(null);

  let [fontsLoaded] = useFonts({
    'ROBOTO': require('./assets/fonts/Lato-Light.ttf'),
  });
  
  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // or some loading indicator
  }
 
  
  return (
    <>
    
    <ThemeProvider>
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="AppNavigation" headerMode='none' >
        
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="EnterEmail" component={EnterEmailScreen} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} options={true}/>
        <Stack.Screen name="HeaderScreen" component={HeaderScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ManageStaff" component={ManageStaffScreen} />
        <Stack.Screen name="ManageCategory" component={ManageCategory} />
        <Stack.Screen name="ManageMenu" component={ManageMenu} />
        <Stack.Screen name="NewManageMenu" component={NewManageMenu} />
        <Stack.Screen name="CreateMenu" component={CreateMenu} />
        <Stack.Screen name="UpdateMenu" component={UpdateMenu} />
        <Stack.Screen name="Calender" component={Calender}/>
        <Stack.Screen name="Manage Order" component={ManageOrder} />
        <Stack.Screen name="Order View" component={OrderViewScreen} />
        <Stack.Screen name="Layout" component={Layout} />

        <Stack.Screen name="Save" component={MyForm} />
        <Stack.Screen name="Update" component={UpdateScreen} />
       <Stack.Screen name="AppNavigation" component={HomeScreen} />
       <Stack.Screen name="Reports" component={Reports} />
       <Stack.Screen name="LineChart" component={LineChartScreen} />

       <Stack.Screen name="Menu" component={Menu} />
       <Stack.Screen name="Order" component={ManageOrder} />
       <Stack.Screen name="Staff" component={Staff} />
       <Stack.Screen name="BarChart" component={BarChartScreen} />
        <Stack.Screen name="PieChart" component={PieChartScreen} />
       <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
       <Stack.Screen name="ManageBills" component={Bills} />
       <Stack.Screen name="ManageOrders" component={Order} />
       <Stack.Screen name="KitchenInventory" component={KitchenInventory} />
       <Stack.Screen name="Inventory" component={Inventory} />
       <Stack.Screen name="Save Inventory" component={SaveInventory} /> 
       <Stack.Screen name="Update Inventory" component={UpdateInventory} />
       <Stack.Screen name="HotelInventory" component={HotelInventory} />
       <Stack.Screen name="SaveCategoryDetails" component={SaveCategoryDetails} />
       <Stack.Screen name="UpdateCategoryDetails" component={UpdateCategoryDetails} />
    </Stack.Navigator> 
    
     {/* //<Toast ref={(ref) => Toast.setRef(ref)} />   */}
    <Toast ref={toastRef} />
     
    </NavigationContainer>
    
    </ThemeProvider>
    
    </>

  )
}
export default App





