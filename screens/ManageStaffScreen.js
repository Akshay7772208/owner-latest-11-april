import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FONT_FAMILY } from '../config';
import { icons } from '../constants';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import EditButton from '../components/EditButton';
import AddButton from '../components/AddButton';
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';


const FloatingPlusIcon = ({ navigation }) => (
  <AddButton onPress={() => navigation.navigate('Save')} />
);

const ManageStaffScreen = ({ navigation }) => {
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://194.195.116.199/owner_api/staff/listview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ restaurant_id: 13 }) // Send restaurant_id as 1
    });
     const data = await response.json();
      if (data.st === 1) {
        const staffWithImages = data.lists.map(staff => ({
          ...staff,
          photo: `http://194.195.116.199/${staff.photo}` // Assuming the 'photo' property contains the image URI
        }));
        setStaffData(staffWithImages);
      } else {
        console.error('Error:', data.msg);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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

  const flatListItemStyle = {
    backgroundColor: isDarkMode ? darkTheme.flatListItemBackground : lightTheme.flatListItemBackground,
  };

  const borderColorStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
    borderBottomColor: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
  };

  const [selectedRole, setSelectedRole] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setSelectedRole('');
      return () => {
        // Cleanup function (optional)
      };
    }, [])
  );

  // const staffData = [
  //   { id: '1', name: 'John Doe', role: 'Manager', photo: 'https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F5df0c384-a012-43e7-8ad1-3d5dd868082a.jpeg' },
  //   { id: '2', name: 'Jane Smith', role: 'Chef', photo: 'https://example.com/photo2.jpg' },
  //   { id: '3', name: 'John Doe', role: 'Manager', photo: 'https://example.com/photo3.jpg' },
  //   { id: '4', name: 'Jane Smith', role: 'Waiter', photo: 'https://example.com/photo4.jpg' },
  //   { id: '5', name: 'Shekru Labs', role: 'Manager', photo: 'https://example.com/photo5.jpg' },
  //   { id: '6', name: 'Jane Smith', role: 'Manager', photo: 'https://example.com/photo6.jpg' },
  // ];

  const handleEditPress = (staff) => {
    navigation.navigate('Update', { staffData: staff });
  };

  const renderStaffItem = ({ item, index }) => (
    
    <View style={{ ...styles.listItem, borderBottomWidth: index === staffData.length - 1 ? 0 : 1, ...borderColorStyle }}>
      <View style={styles.detailsContainer}>
        <Image
          source={{ uri: item.photo }}
          style={styles.photo}
        />
        <View style={styles.textContainer}>
          <Text style={{ ...styles.name, ...styles.text, color: textStyle.color }}>{item.name}</Text>
          <Text style={{ ...styles.role, ...styles.text, color: textStyle.color }}>{item.role}</Text>
        </View>
      </View>
      <EditButton onPress={() => handleEditPress(item)} />
    </View>
  );

  const renderRoleButton = ({ item }) => {
    const shadowColor = isDarkMode ? darkTheme.shadowColor : lightTheme.shadowColor
    const shadowOpacity = isDarkMode ? darkTheme.shadowOpacity : lightTheme.shadowOpacity
    const buttonText = `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`;


    return (
      <TouchableOpacity
        style={{
          marginLeft: 15,
          padding: 15,
          marginTop: 10,
          marginBottom: 5,
          backgroundColor: selectedRole === item ? 'lightblue' : flatListItemStyle.backgroundColor,
          borderRadius: 15,
          borderColor: 'grey',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: shadowColor,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: shadowOpacity,
          shadowRadius: 4.65,
          elevation: 6,
          height: 40,
        }}
        onPress={() => setSelectedRole(item)}
      >
        <Text style={{ color: selectedRole === item ? 'white' : textStyle.color, marginTop: 5, fontSize: 14, fontWeight: 'bold', fontFamily: 'ROBOTO' }}>{buttonText}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TitleBar title="Manage Staff" />
      <View style={[style.labelContainer, pageContainerStyle]}>
        <View style={[style.container1, containerStyle]}>
          <FlatList
            data={['manager', 'chef', 'waiter', 'manager2', 'chef2', 'waiter2']}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={renderRoleButton}
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
          />
        </View>
      </View>
      <View style={[style.pageContainer1, pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
            <FlatList
              data={staffData.filter((staff) => (selectedRole ? staff.role === selectedRole : true))}
              keyExtractor={(item) => item.staff_id}
              renderItem={renderStaffItem}
              style={{ marginTop: 2, marginBottom: 5 }}
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
    paddingVertical: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#555',
  },
  editButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'ROBOTO',
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
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ManageStaffScreen;
