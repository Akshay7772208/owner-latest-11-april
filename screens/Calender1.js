import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';

const Calender1 = ({ navigation }) => {
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

  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date

  // Dummy data for staff
  const staffData = [
    { id: '1', date: '2024-03-01', day: 'Monday', orderCount: 5 },
    { id: '2', date: '2024-03-02', day: 'Tuesday', orderCount: 10 },
    { id: '3', date: '2024-03-03', day: 'Wednesday', orderCount: 8 },
    // Add more staff data as needed
  ];

  // Function to filter staff data based on the selected date
  const filteredStaffData = staffData.filter(item => {
    const date = new Date(item.date);
    return date.toDateString() === selectedDate.toDateString();
  });

  const getStatusCount = (status) => {
    return filteredStaffData.reduce((count, item) => (item.day === status ? count + item.orderCount : count), 0);
  };

  const renderStaffItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Manage Order', { orderId: item.id })}
    >
      <View style={{ ...styles.listItem, borderBottomWidth: index === filteredStaffData.length - 1 ? 0 : 1 }}>
        <View style={styles.detailsContainer}>
          <Text style={{ ...styles.name, ...styles.text, color: textStyle.color }}>
            {item.date}
          </Text>
          <View style={{ marginTop: -25 }}>
            <Text style={{ ...styles.name1, ...styles.text, marginLeft: 'auto', color: textStyle.color }}>
              {item.day}
            </Text>
          </View>
          <Text style={{ ...styles.name1, ...styles.text, marginTop: 20, color: textStyle.color }}> {item.orderCount} Orders</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Render DatePicker for web platform
  const renderDatePicker = () => {
    if (Platform.OS === 'web') {
      return (
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      );
    } else {
      return null; // Render nothing for non-web platforms
    }
  };

  return (
    <>
      <TitleBar title="Calendar" />
      <View style={[style.labelContainer, pageContainerStyle]}>
        <View style={[style.container1, containerStyle]}>
          {renderDatePicker()}
        </View>
      </View>
      <View style={[style.pageContainer, pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
          <FlatList
  data={filteredStaffData}
  keyExtractor={(item) => item.id}
  renderItem={renderStaffItem}
  // Add this line to apply styles to the content container
/>
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
    color: 'black',
  },
  name1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  role: {
    fontSize: 16,
    color: '#555',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'ROBOTO',
  },
  flatListContent: {
    flexGrow: 1, // Ensure the FlatList fills the available space
  },
});

export default Calender1;