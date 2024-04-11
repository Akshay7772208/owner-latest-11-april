// import React, { useState } from 'react';
// import { View, Image, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';




// const ManageOrder = ({ navigation }) => {
//   const [selectedType, setSelectedType] = useState('');
//   // Dummy data for staff
//   const staffData = [
//     { id: '1', ordernumber: 'Order Number 1', orderstatus: 'Accepted', menucount: 5 },
//     { id: '2', ordernumber: 'Order Number 2', orderstatus: 'Completed', menucount: 10 },
//     { id: '3', ordernumber: 'Order Number 3', orderstatus: 'Cooking', menucount: 8 },
//     { id: '4', ordernumber: 'Order Number 4', orderstatus: 'Accepted', menucount: 3 },
//     { id: '5', ordernumber: 'Order Number 5', orderstatus: 'Completed', menucount: 15 },
//     // Add more staff data as needed
//   ];

//   const getStatusCount = (status) => {
//     return staffData.reduce((count, item) => (item.orderstatus === status ? count + item.menucount : count), 0);
//   };

//   const renderStaffItem = ({ item, index }) => (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('Order View', { orderId: item.id })}
//     >
//          <View style={{ ...styles.listItem, borderBottomWidth: index === staffData.length - 1 ? 0 : 1 }}>
//         <View style={styles.detailsContainer}>
//           <Text style={{ ...styles.name, ...styles.text }}>
//             {item.ordernumber}
//           </Text>
//           <View style={{ marginTop: -25 }}>
//             <Text style={{ ...styles.name1, ...styles.text, marginLeft: 'auto' }}>
//               {item.orderstatus}
//             </Text>
//           </View>
//           <Text style={{ ...styles.name1, ...styles.text, marginTop: 20 }}> {item.menucount} Menu(s)</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderTypeButton = ({ item }) => (
//     <TouchableOpacity
//       style={{
//         marginLeft: 15,
//         padding: 15,
//         marginTop: 10,
//         marginBottom: 5,
//         backgroundColor: selectedType === item ? 'lightblue' : 'white',
//         borderRadius: 15,
//         alignItems: 'center',
//         justifyContent: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 3,
//         },
//         shadowOpacity: 0.27,
//         shadowRadius: 4.65,
//         elevation: 6,
//         height: 40,
//       }}
//       onPress={() => setSelectedType(item)}
//     >
//       <Text style={{ color: selectedType === item ? 'white' : 'black', marginTop: 5, fontSize: 14, fontWeight: 'bold', fontFamily: 'ROBOTO' }}>
//         {`${item} (${getStatusCount(item)})`}
//       </Text>
//     </TouchableOpacity>
//   );

//   return (
//     <>
//       <TitleBar title="Manage Order" />
//       <View style={style.labelContainer}>
//         <View style={style.container1}>
//           <FlatList
//             data={['Accepted', 'Completed', 'Cooking']}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item) => item}
//             renderItem={renderTypeButton}
//             style={{ marginTop: 0, marginBottom: 2 }}
//           />
//         </View>
//       </View>
//       <View style={style.pageContainer}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//           <View style={style.container}>
//             <FlatList
//               data={staffData.filter((item) => selectedType ? item.orderstatus === selectedType : true)}
//               keyExtractor={(item) => item.id}
//               renderItem={renderStaffItem}
//             />
//           </View>
//         </ScrollView>
//       </View>
//       <BottomBar />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   listItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: 'black',
//     paddingVertical: 10,
//   },
//   detailsContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   name1: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'grey',
//   },
//   role: {
//     fontSize: 16,
//     color: '#555',
//   },
//   floatingButton: {
//     position: 'absolute',
//     bottom: 60,
//     right: 20,
//     backgroundColor: '#4CAF50',
//     borderRadius: 50,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontFamily: 'ROBOTO',
//   },
// });

// export default ManageOrder;


import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';


const ManageOrder = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://194.195.116.199/owner_api/order/listview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ restaurant_id: 13 }) // Send restaurant_id as 1
    });
     const data = await response.json();
      if (data.st === 1) {
        setStaffData(data.lists);
      } else {
        console.error('Error:', data.msg);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
  // Dummy data for staff
  // const staffData = [
  //   { id: '1', ordernumber: 'Order Number 1', orderstatus: 'Accepted', menucount: 5 },
  //   { id: '2', ordernumber: 'Order Number 2', orderstatus: 'Completed', menucount: 10 },
  //   { id: '3', ordernumber: 'Order Number 3', orderstatus: 'Cooking', menucount: 8 },
  //   { id: '4', ordernumber: 'Order Number 4', orderstatus: 'Accepted', menucount: 3 },
  //   { id: '5', ordernumber: 'Order Number 5', orderstatus: 'Completed', menucount: 15 },
  //   // Add more staff data as needed
  // ];

  const getStatusCount = (status) => {
    return staffData.reduce((count, item) => (item.order_status === status ? count + item.menucount : count), 0);
  };

  const renderStaffItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Order View', { orderId: item.order_id })}
    >
         <View style={{ ...styles.listItem, borderBottomWidth: index === staffData.length - 1 ? 0 : 1,...borderColorStyle }}>
        <View style={styles.detailsContainer}>
          <Text style={{ ...styles.name, ...styles.text,color: textStyle.color }}>
            {item.order_number}
          </Text>
          <View style={{ marginTop: -25 }}>
            <Text style={{ ...styles.name1, ...styles.text, marginLeft: 'auto',color: textStyle.color }}>
              {item.order_status}
            </Text>
          </View>
          <Text style={{ ...styles.name1, ...styles.text, marginTop: 20 ,color: textStyle.color}}> {item.menu_count} Menu(s)</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderTypeButton = ({ item }) => {
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
      <Text style={{ color: selectedType === item ? 'white' : textStyle.color, marginTop: 5, fontSize: 14, fontWeight: 'bold', fontFamily: 'ROBOTO' }}>
        {`${buttonText}`}
      </Text>
    </TouchableOpacity>
    );
  };

  return (
    <>
      <TitleBar title="Manage Order" />
      <View style={[style.labelContainer, pageContainerStyle]}>
      <View style={[style.container1, containerStyle]}>
          <FlatList
            data={['accepted', 'completed', 'ongoing']}
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
              data={staffData.filter((item) => selectedType ? item.order_status === selectedType : true)}
              keyExtractor={(item) => item.order_id}
              renderItem={renderStaffItem}
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
});

export default ManageOrder;
