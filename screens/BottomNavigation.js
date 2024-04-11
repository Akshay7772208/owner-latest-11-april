import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Bills from '../Bills';
import Homes from '../Homes';
import Staff from '../Staff';
import Order from '../Order';
import Menu from '../Menu';
import AppNavigation from '../../AppNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 14,
          },
          defaultLabelStyle: {
            fontFamily:'MadimiOne' // Set your custom font family here
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
          }}
        />
        <Tab.Screen
          name="Homes"
          component={Homes}
          options={{
            tabBarLabel: 'Homes',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
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
