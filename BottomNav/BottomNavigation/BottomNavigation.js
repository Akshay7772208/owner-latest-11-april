// BottomNavigation.js

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Bills from '../Bills';
import Homes from '../Homes';
import Staff from '../Staff';
import Order from '../Order';
import Menu from '../Menu';
//import AppNavigation from '../../AppNavigation';
import PagesScreen from '../../screens/HomeScreen';
import ManageStaffScreen from '../../screens/ManageStaffScreen';
import MyForm from '../../screens/SaveDetailsScreen';
import Reports from '../../screens/Reports';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen
          name="Staff"
          component={Staff}
          options={{
            tabBarLabel: 'Staff',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="people" size={size} color={color} />
            ),
            drawerLabelStyle: {
              fontFamily: 'Roboto-Regular',  // Add your custom font family here
            },
            headerShown:false,
            tabBarVisible:false
          }}
        />
        <Tab.Screen
          name="Bills"
          component={Bills}
          options={{
            tabBarLabel: 'Bills',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="receipt" size={size} color={color} />
            ),
            drawerLabelStyle: {
              fontFamily: 'Roboto-Regular',  // Add your custom font family here
            },
            headerShown:false
          }}
        />
        <Tab.Screen
          name="Homes"
          component={PagesScreen}
          options={{
            tabBarLabel: 'Homes',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
            drawerLabelStyle: {
              fontFamily: 'Roboto-Regular',  // Add your custom font family here
            },
            headerShown:false
          }}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="shopping-cart" size={size} color={color} />
            ),
            drawerLabelStyle: {
              fontFamily: 'Roboto-Regular',  // Add your custom font family here
            },
            headerShown:false
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="menu" size={size} color={color} />
            ),
            drawerLabelStyle: {
              fontFamily: 'Roboto-Regular',  // Add your custom font family here
            },
            headerShown:false
          }}
        />
        

        
      </Tab.Navigator>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BottomNavigation;

