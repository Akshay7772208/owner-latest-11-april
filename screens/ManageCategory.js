import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import AddButton from '../components/AddButton';
import EditButton from '../components/EditButton';
import style from '../constants/style';
import { useFocusEffect } from '@react-navigation/native'

const FloatingPlusIcon = ({ navigation }) => (
  <AddButton onPress={() => navigation.navigate('SaveCategoryDetails')} />
);

const ManageCategory = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [staffData, setStaffData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setRefreshing(true);
      const response = await fetch('http://194.195.116.199/owner_api/menu_category/listview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ restaurant_id: 13 }) // Send restaurant_id as 1
      });
      const data = await response.json();
      if (data.st === 1) {
        const formattedData = data.menucat_details.map(item => ({
          ...item,
          name: item.name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
        }));
        setStaffData(formattedData);
      } else {
        console.error('Error:', data.msg);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setRefreshing(false);
    }
  };
  
  useFocusEffect(
    React.useCallback(() => {
      fetchData(); // Fetch data when screen gains focus
    }, [])
  );
  //const { isDarkMode, toggleTheme } = useTheme();

  const containerStyle = {
    backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
  };

  const pageContainerStyle = {
    backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
  };

  const textStyle = {
    color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
  };

  const borderColorStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
    borderBottomColor: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
  };

  const renderStaffItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleEditPress(item)}>
      <View style={{ ...styles.listItem, borderBottomWidth: index === staffData.length - 1 ? 0 : 1, ...borderColorStyle }}>
        <View style={styles.detailsContainer}>
          <Text style={{ ...styles.name, ...styles.text, color: textStyle.color }}>{item.name}</Text>
          <Text style={{ ...styles.role, ...styles.text, color: textStyle.color }}>MenuCount: {item.menu_count}</Text>
        </View>
        <EditButton onPress={() => handleEditPress(item)} />
      </View>
    </TouchableOpacity>
  );

  const handleEditPress = (staff) => {
    navigation.navigate('UpdateCategoryDetails', { staffData: staff });
  };

  const onRefresh = () => {
    fetchData();
  };

  return (
    <>
      <TitleBar title="Manage Category" />
      <View style={[style.pageContainer, pageContainerStyle]}>
        <ScrollView
          contentContainerStyle={style.scrollContainer}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <View style={[style.container, containerStyle]}>
            <FlatList
              data={staffData}
              keyExtractor={(item) => item.restaurant_id.toString()}
              renderItem={renderStaffItem}
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
  role: {
    fontSize: 16,
    color: '#555',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto'
  }
});

export default ManageCategory;
