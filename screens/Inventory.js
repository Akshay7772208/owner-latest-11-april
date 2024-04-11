import React,{useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import AddButton from '../components/AddButton';
import EditButton from '../components/EditButton';
import { useState } from 'react';
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { COLORS } from '../constants';

const FloatingPlusIcon = ({ navigation }) => (
  <AddButton onPress={() => navigation.navigate('Save Inventory')} />
);

const Inventory = ({ navigation }) => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://194.195.116.199/owner_api/inventory/listview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ restaurant_id: 13 }) // Send restaurant_id as 1
    });
     const data = await response.json();
      if (data.st === 1) {
        setInventoryData(data.lists);
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

  const [selectedType, setSelectedType] = useState('');
  // const inventoryData = [
  //   { id: '1', name: 'Name1', quantity: 'Quantity1', type: 'Hotel' },
  //   { id: '2', name: 'Name2', quantity: 'Quantity2', type: 'Kitchen' },
  //   { id: '3', name: 'Name3', quantity: 'Quantity3', type: 'Garden' },
  //   { id: '4', name: 'Name4', quantity: 'Quantity4', type: 'Hotel' },
  //   // ... (more data)
  // ];

  const renderInventoryItem = ({ item, index }) => (
    <View style={{ ...styles.listItem, borderBottomWidth: index === inventoryData.length - 1 ? 0 : 1, ...borderColorStyle }}>
      <View style={styles.detailsContainer}>
        <Text style={{ ...styles.name, ...styles.text, color: textStyle.color }}>{item.name}</Text>
        <Text style={{ ...styles.quantity, ...styles.text, color: textStyle.color }}>{item.quantity}</Text>
        <Text style={{ ...styles.type, ...styles.text, color: textStyle.color }}>{item.type}</Text>
      </View>
      <EditButton onPress={() => handleEditPress(item)} />
    </View>
  );

  const handleEditPress = (inventoryItem) => {
    navigation.navigate('Update Inventory', { inventoryData:inventoryItem });
  };

  

  const renderTypeButton = ({ item }) => {
    const shadowColor = isDarkMode ? darkTheme.shadowColor : lightTheme.shadowColor;
    const shadowOpacity = isDarkMode ? darkTheme.shadowOpacity : lightTheme.shadowOpacity;
    const buttonText = `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`;


    return (
      <TouchableOpacity
        style={{
          marginLeft: 15,
          padding: 15,
          marginTop: 10,
          marginBottom: 5,
          backgroundColor: selectedType === item ? 'lightblue' : flatListItemStyle.backgroundColor,
          borderRadius: 15,
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
        onPress={() => setSelectedType(item)}
      >
        <Text style={{ color: selectedType === item ? 'white' : textStyle.color, marginTop: 5, fontSize: 14, fontWeight: 'bold', fontFamily: 'ROBOTO' }}>{buttonText}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TitleBar title="Inventory" />
      <View style={[style.labelContainer, pageContainerStyle]}>
        <View style={[style.container1, containerStyle]}>
          <FlatList
            data={['hotel', 'kitchen', 'garden']}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={renderTypeButton}
            style={{ marginTop: 0, marginBottom: 2 }}
          />
        </View>
      </View>

      <View style={[style.pageContainer1, pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
            <FlatList
              data={inventoryData.filter((inventoryData)=>(selectedType? inventoryData.type===selectedType:true))}
              
              keyExtractor={(item) => item.description}
              renderItem={renderInventoryItem}
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
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.backGroundColor,
  },
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
  quantity: {
    fontSize: 16,
    color: '#555',
  },
  type: {
    fontSize: 16,
    color: '#555',
  },
  text: {
    fontFamily: 'Roboto',
  },
});

export default Inventory;


