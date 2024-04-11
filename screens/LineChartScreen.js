// import React from 'react';
// import { Dimensions,Text,View, StyleSheet,ScrollView } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';

// const LineChartScreen = () => {
  

//   return (
//     <>
//       <TitleBar title="Line Chart" />
//       <View style={style.pageContainer}>
      
//       <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//   {/* <Text>Bezier Line Chart</Text> */}
//   <LineChart
//     data={{
//       labels: ["January", "February", "March", "April", "May", "June"],
//       datasets: [
//         {
//           data: [
//             // Math.random() * 100,
//             // Math.random() * 100,
//             // Math.random() * 100,
//             // Math.random() * 100,
//             // Math.random() * 100,
//             // Math.random() * 100
//             500,400,300,100,200,300
//           ]
//         }
//       ]
//     }}
//     // width={Dimensions.get("window").width} // from react-native
//     width={350}
//     height={220}
//     yAxisLabel="RS"
//     yAxisSuffix="k"
//     yAxisInterval={1} // optional, defaults to 1
//     chartConfig={{
//       backgroundColor: "#e26a00",
//       backgroundGradientFrom: "#fb8c00",
//       backgroundGradientTo: "#ffa726",
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16,
       
//       },
//       propsForDots: {
//         r: "6",
//         strokeWidth: "2",
//         stroke: "#ffa726"
//       }
//     }}
//     bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16,
//       fontFamily:'ROBOTO',
//     }}
//   />
// </View>
// </ScrollView>
// </View>
//       <BottomBar />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
// });

// export default LineChartScreen;


import React from 'react';
import { Dimensions,Text,View, StyleSheet,ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';

import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';

const LineChartScreen = () => {
  
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
      <TitleBar title="Line Chart" />
      <View style={[style.pageContainer, pageContainerStyle]}>
      
      <ScrollView contentContainerStyle={style.scrollContainer}>
      <View style={[style.container, containerStyle]}>
  {/* <Text>Bezier Line Chart</Text> */}
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100
            500,400,300,100,200,300
          ]
        }
      ]
    }}
    // width={Dimensions.get("window").width} // from react-native
    width={370}
    height={220}
    yAxisLabel="RS"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
       
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      fontFamily:'ROBOTO',
    }}
  />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default LineChartScreen;

