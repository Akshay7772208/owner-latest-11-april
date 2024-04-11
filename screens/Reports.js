// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Platform ,ScrollView} from 'react-native';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';

// export default function Reports(props) {
//   return (
//     <>
//       <TitleBar title="Reports" />
//       <View style={style.pageContainer}>
      
//       <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//         <View style={styles.row}>
//           <TouchableOpacity
//             onPress={() => props.navigation.navigate('LineChart')}
//             style={styles.item}
//           >
//             <Text style={styles.itemText}>Line Chart</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => props.navigation.navigate('BarChart')}
//             style={styles.item}
//           >
//             <Text style={styles.itemText}>Bar Chart</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => props.navigation.navigate('PieChart')}
//             style={styles.item}
//           >
//             <Text style={styles.itemText}>Pie Chart </Text>
//           </TouchableOpacity>
//         </View>
//         </View>
//         </ScrollView>
//       </View>
      
//       <BottomBar />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//     marginTop: 10,
//   },
//   item: {
//     flex: 1,
//     height: 120,
//     paddingVertical: 20,
//     borderWidth: 1,
//     borderRadius: 13,
//     fontFamily:'ROBOTO',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 5,
//     backgroundColor: 'white',
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//       },
//       android: {
//         elevation: 4,
//       },
//     }),
//   },
//   itemText: {
//     // Customize the text styles as needed
//     fontFamily:'ROBOTO',
//   },
// });


import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, ScrollView } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';

export default function Reports(props) {
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

  const borderColorStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
  };

  return (
    <>
      <TitleBar title="Reports" />
      <View style={[style.pageContainer, pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('LineChart')}
                style={[styles.item, borderColorStyle,containerStyle]}
              >
                <Text style={[styles.itemText, textStyle]}>Line Chart</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('BarChart')}
                style={[styles.item, borderColorStyle,containerStyle]}
              >
                <Text style={[styles.itemText, textStyle]}>Bar Chart</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('PieChart')}
                style={[styles.item, borderColorStyle,containerStyle]}
              >
                <Text style={[styles.itemText, textStyle]}>Pie Chart </Text>
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
    borderRadius: 13,
    fontFamily: 'ROBOTO',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  itemText: {
    // Customize the text styles as needed
    fontFamily: 'ROBOTO',
  },
});
