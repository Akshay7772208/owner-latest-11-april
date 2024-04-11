// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';
// import { lightTheme, darkTheme } from '../constants/ThemeStyles';
// import { useTheme } from '../components/ThemeProvider';

// const Calender = ({ navigation }) => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   const containerStyle = {
//     backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
//   };

//   const pageContainerStyle = {
//     backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
//   };

//   const textStyle = {
//     color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
//   };

//   const flatListItemStyle = {
//     backgroundColor: isDarkMode ? darkTheme.flatListItemBackground : lightTheme.flatListItemBackground,
//   };

//   const borderColorStyle = {
//     borderColor: isDarkMode ? 'white' : 'black',
//     borderBottomColor: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
//   };

// //   const [selectedDateRange, setSelectedDateRange] = useState({ from: new Date(), to: new Date() });

// const [selectedDateRange, setSelectedDateRange] = useState({ from: null, to: null });
  

// //   const [selectedDateRange, setSelectedDateRange] = useState(null); // Initially set to null
//   const [selectedDay, setSelectedDay] = useState(null); 
//   // Dummy data for staff
//   const staffData = [
//     { id: '1', date: '2024-03-01', day: 'Monday', orderCount: 5 },
//     { id: '2', date: '2024-03-02', day: 'Tuesday', orderCount: 10 },
//     { id: '3', date: '2024-03-03', day: 'Wednesday', orderCount: 8 },
//     // Add more staff data as needed
//   ];

// //   const filteredStaffData = staffData.filter(item => {
// //     if (!selectedDateRange) return true;
// //     const date = new Date(item.date);
// //     const isDateMatch = date.toISOString().split('T')[0] === selectedDateRange.toISOString().split('T')[0];
// //     return isDateMatch;
// //   });


// const filteredStaffData = staffData.filter(item => {
//     if (!selectedDateRange) return true;
//     const date = new Date(item.date);
//     const from = selectedDateRange.from;
//     const to = selectedDateRange.to;
//     if (!from || !to) return true; // Handle case where from or to is null
//     const isDateMatch = date >= from && date <= to;
//     return isDateMatch;
//   });
  
  
//   const handleDaySelect = (day) => {
//     setSelectedDay(day);
//   };
//   const getStatusCount = (status) => {
//     return filteredStaffData.reduce((count, item) => (item.day === status ? count + item.orderCount : count), 0);
//   };

//   const renderStaffItem = ({ item, index }) => (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('Manage Order', { orderId: item.id })}
//     >
//       <View style={{ ...styles.listItem, borderBottomWidth: index === filteredStaffData.length - 1 ? 0 : 1, ...borderColorStyle }}>
//         <View style={styles.detailsContainer}>
//           <Text style={{ ...styles.name, ...styles.text, color: textStyle.color }}>
//             {item.date}
//           </Text>
//           <View style={{ marginTop: -25 }}>
//             <Text style={{ ...styles.name1, ...styles.text, marginLeft: 'auto', color: textStyle.color }}>
//               {item.day}
//             </Text>
//           </View>
//           <Text style={{ ...styles.name1, ...styles.text, marginTop: 20, color: textStyle.color }}> {item.orderCount} Orders</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

// //   const renderDatePicker = () => {
// //     if (Platform.OS === 'web') {
// //       return (
// //         <input
// //           type="date"
// //           value={selectedDateRange ? selectedDateRange.toISOString().split('T')[0] : ''} // Check if selectedDateRange is not null
// //           onChange={(e) => {
// //             const selectedDate = new Date(e.target.value);
// //             const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
// //             setSelectedDateRange(new Date(formattedDate));
// //           }}
// //           style={styles.datePicker}
// //         />
// //       );
// //     } else {
// //       return null; // Render nothing for non-web platforms
// //     }
// //   };
  

// const renderDatePicker = () => {
//     if (Platform.OS === 'web') {
//       return (
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <input
//             type="date"
//             value={selectedDateRange && selectedDateRange.from ? selectedDateRange.from.toISOString().split('T')[0] : ''}
//             onChange={(e) => {
//               const selectedDate = new Date(e.target.value);
//               const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
//               setSelectedDateRange({ ...selectedDateRange, from: new Date(formattedDate) });
//             }}
//             style={styles.datePicker}
//           />
//           <Text style={{ marginHorizontal: 10, color: textStyle.color }}>TO</Text>
//           <input
//             type="date"
//             value={selectedDateRange && selectedDateRange.to ? selectedDateRange.to.toISOString().split('T')[0] : ''}
//             onChange={(e) => {
//               const selectedDate = new Date(e.target.value);
//               const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
//               setSelectedDateRange({ ...selectedDateRange, to: new Date(formattedDate) });
//             }}
//             style={styles.datePicker}
//           />
//         </View>
//       );
//     } else {
//       return null; // Render nothing for non-web platforms
//     }
// };


  

//   return (
//     <>
//       <TitleBar title="Calendar" />
//       <View style={[style.labelContainer, pageContainerStyle]}>
//         <View style={[style.container1, containerStyle]}>
//         {renderDatePicker()}
         
//         </View>
//       </View>
//       <View style={[style.pageContainer, pageContainerStyle]}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//           <View style={[style.container, containerStyle]}>
//             <FlatList
//               data={filteredStaffData}
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
//   datePicker: {
//     marginLeft: 15,
//     marginRight:15,
//     padding: 15,
//     marginTop: 10,
//     marginBottom: 5,
//     // backgroundColor: selectedType === item ? 'lightblue' : flatListItemStyle.backgroundColor,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor:'rgba(0, 0, 0, 0.7)',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,
//     elevation: 6,
//     height: 15,
  
   

//   },
 
// });

// export default Calender;


import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';

const Calendar = ({ navigation }) => {
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

  const [selectedDateRange, setSelectedDateRange] = useState({ from: null, to: null });

  const [selectedDay, setSelectedDay] = useState(null); 

  // Updated staff data format with dd/mm/yyyy date format
  const staffData = [
    { id: '1', date: '01/03/2024', day: 'Monday', orderCount: 5 },
    { id: '2', date: '02/03/2024', day: 'Tuesday', orderCount: 10 },
    { id: '3', date: '03/03/2024', day: 'Wednesday', orderCount: 8 },
    { id: '4', date: '05/03/2024', day: 'Friday', orderCount: 2 },
    // Add more staff data as needed
  ];

  const filteredStaffData = staffData.filter(item => {
    if (!selectedDateRange) return true;
    const dateParts = item.date.split('/');
    const date = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    const from = selectedDateRange.from;
    const to = selectedDateRange.to;
    if (!from || !to) return true; // Handle case where from or to is null
    const isDateMatch = date >= from && date <= to;
    return isDateMatch;
  });

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const getStatusCount = (status) => {
    return filteredStaffData.reduce((count, item) => (item.day === status ? count + item.orderCount : count), 0);
  };

  const renderStaffItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Manage Order', { orderId: item.id })}
    >
      <View style={{ ...styles.listItem, borderBottomWidth: index === filteredStaffData.length - 1 ? 0 : 1, ...borderColorStyle }}>
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

  const renderDatePicker = ({ backgroundColor, textColor }) => {
    if (Platform.OS === 'web') {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: backgroundColor }}>
          <input
            type="date"
            value={selectedDateRange && selectedDateRange.from ? selectedDateRange.from.toISOString().split('T')[0] : ''}
            onChange={(e) => {
              const selectedDate = new Date(e.target.value);
              const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
              setSelectedDateRange({ ...selectedDateRange, from: new Date(formattedDate) });
            }}
            style={{ ...styles.datePicker, backgroundColor: backgroundColor, color: textColor }}
          />
          <Text style={{ marginHorizontal: 10, color: textColor,fontFamily:'ROBOTO' }}>TO</Text>
          <input
            type="date"
            value={selectedDateRange && selectedDateRange.to ? selectedDateRange.to.toISOString().split('T')[0] : ''}
            onChange={(e) => {
              const selectedDate = new Date(e.target.value);
              const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
              setSelectedDateRange({ ...selectedDateRange, to: new Date(formattedDate) });
            }}
            style={{ ...styles.datePicker, backgroundColor: backgroundColor, color: textColor }}
          />
        </View>
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
        {renderDatePicker({ backgroundColor: containerStyle.backgroundColor, textColor: textStyle.color })}

        </View>
      </View>
      <View style={[style.pageContainer1, pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
            <FlatList
              data={filteredStaffData}
              keyExtractor={(item) => item.id}
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
      fontFamily: 'Roboto',
    },
    name1: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'grey',
      fontFamily: 'Roboto',
    },
    role: {
      fontSize: 16,
      color: '#555',
      fontFamily: 'Roboto',
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
      fontFamily: 'Roboto',
    },
    datePicker: {
      fontSize:17,
      fontFamily:'Roboto',
      marginLeft: 15,
      marginRight: 15,
      padding: 14,
      marginTop: 10,
      marginBottom: 5,
      borderRadius: 15,
      
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'rgba(0, 0, 0, 0.7)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      height: 15,
    },
  });
export default Calendar  