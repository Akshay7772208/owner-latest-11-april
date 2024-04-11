

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BottomBar from '../components/BottomBar';
import TitleBar from '../components/TitleBar';
import style from '../constants/style';


import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';

export default function ManageMenu(props) {
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
      <TitleBar title="Manage Menu" />
      <View style={[style.pageContainer, PagecontainerStyle, styles.centerContainer]}>
        <ScrollView contentContainerStyle={[style.scrollContainer, PagecontainerStyle]}>
          <View style={[style.container, containerStyle]}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ManageCategory')}
                style={[styles.item, containerStyle, borderColorStyle]}
              >
                <MaterialIcons name="category" size={30} color={textStyle.color}/>
                <Text style={[styles.itemText, textStyle]}>Manage Category</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('NewManageMenu')}
                style={[styles.item, containerStyle, borderColorStyle]}
              >
                <MaterialIcons name="restaurant-menu" size={30}color={textStyle.color} />
                <Text style={[styles.itemText, textStyle]}>Manage Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    fontFamily: 'ROBOTO',
  },
});

