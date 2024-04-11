// import React from 'react';
// import { View, StyleSheet ,ScrollView} from 'react-native';
// import { BarChart } from 'react-native-chart-kit';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';

// const BarChartScreen = () => {
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
//     datasets: [
//       {
//         data: [100, 50, 200, 300, 100, 400, 600, 750],
//       },
//     ],
//   };

//   return (
//     <>
//       <TitleBar title="Bar Chart" />
//       <View style={style.pageContainer}>
      
//       <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//         <BarChart
//           data={data}
//           width={350}
//           height={300}
//           yAxisSuffix="k"
//           chartConfig={{
//             backgroundColor: '#ffffff',
//             backgroundGradientFrom: '#eff3ff',
//             backgroundGradientTo: '#d9e2f3',
//             // backgroundGradientFrom: 'blue',
//             // backgroundGradientTo: 'red',
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0,122, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//             barPercentage: 0.6, // Adjust this value to control the width of the bars
//             categoryPercentage: 0.6, // Adjust this value to control the spacing between bars
//           }}
//           style={styles.chart}
//         />
//       </View>
//       </ScrollView>
//       </View>
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
//     fontFamily:'ROBOTO',
//   },
// });

// export default BarChartScreen;


import React from 'react';
import { View, StyleSheet ,ScrollView} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';


import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';

const BarChartScreen = () => {
  
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

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        data: [100, 50, 200, 300, 100, 400, 600, 750],
      },
    ],
  };

  return (
    <>
      <TitleBar title="Bar Chart" />
      <View style={[style.pageContainer, pageContainerStyle]}>
      
      <ScrollView contentContainerStyle={style.scrollContainer}>
      <View style={[style.container, containerStyle]}>
        <BarChart
          data={data}
          width={370}
          height={300}
          yAxisSuffix="k"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#d9e2f3',
            // backgroundGradientFrom: 'blue',
            // backgroundGradientTo: 'red',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0,122, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            barPercentage: 0.6, // Adjust this value to control the width of the bars
            categoryPercentage: 0.6, // Adjust this value to control the spacing between bars
          }}
          style={styles.chart}
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
    fontFamily:'ROBOTO',
  },
});

export default BarChartScreen;