// IconSidebar.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CustomSidebar from './CustomSidebar';
import { useNavigation, useRoute } from '@react-navigation/native';

const IconSidebar = ({ title }) => {
  const navigation = useNavigation();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <View style={{ backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between' }}>
      {/* Display the title passed as a prop */}
      <Text style={{ color: 'white', padding: 10 }}>{title}</Text>

      {/* Icon to toggle the sidebar */}
      <TouchableOpacity onPress={toggleSidebar}>
        <MaterialIcons name="menu" size={30} color="white" style={{ padding: 10 }} />
      </TouchableOpacity>

      {/* Display the CustomSidebar if isSidebarVisible is true */}
      {isSidebarVisible && <CustomSidebar navigation={navigation} closeSidebar={closeSidebar} />}
    </View>
  );
};

export default IconSidebar;
