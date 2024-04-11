// import React from 'react';
// import { View, StyleSheet,ScrollView } from 'react-native';
// import { PieChart } from 'react-native-chart-kit';
// import Svg, { Path } from 'react-native-svg';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';

// const PieChartScreen = () => {
//   const data = [
//     { name: 'Jan', population: 100, color: '#FF6F61', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//     { name: 'Feb', population: 200, color: '#56B7AB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//     { name: 'Mar', population: 300, color: '#FFD966', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//     { name: 'Apr', population: 100, color: '#7A7A7A', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//     { name: 'May', population: 50, color: '#BB8FCE', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//     { name: 'Jun', population: 200, color: '#5E5E5E', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//   ];

//   const chartConfig = {
//     backgroundColor: '#ffffff',
//     backgroundGradientFrom: '#eff3ff',
//     backgroundGradientTo: '#d9e2f3',
//     decimalPlaces: 2,
//     color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: {
//       borderRadius: 16,
//     },
//   };

//   const renderSvg = ({ slices, width, height, center }) => {
//     const totalPopulation = slices.reduce((acc, slice) => acc + slice.population, 0);
//     const radianFactor = Math.PI * 2 / totalPopulation;

//     let cumulativeAngle = -Math.PI / 2; // Start from the top

//     const paths = slices.map((slice, index) => {
//       const angle = slice.population * radianFactor;
//       const x1 = center[0] + width / 4 * Math.cos(cumulativeAngle);
//       const y1 = center[1] + height / 4 * Math.sin(cumulativeAngle);
//       const x2 = center[0] + width / 4 * Math.cos(cumulativeAngle + angle);
//       const y2 = center[1] + height / 4 * Math.sin(cumulativeAngle + angle);

//       cumulativeAngle += angle;

//       return (
//         <Path
//           key={index}
//           d={`M${center[0]},${center[1]} L${x1},${y1} A${width / 4},${height / 4} 0 ${angle > Math.PI ? 1 : 0},1 ${x2},${y2} Z`}
//           fill={slice.color}
//         />
//       );
//     });

//     return <Svg>{paths}</Svg>;
//   };

//   return (
//     <>
//       <TitleBar title="Pie Chart" />
//       <View style={style.pageContainer}>
      
//       <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//         <PieChart
//           data={data}
//           width={400}
//           height={250}
//           chartConfig={chartConfig}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//           center={[10, 10]}
//           absolute
//           renderCustomSvg={renderSvg}
//          style={styles.chart}
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
//   chart:{
//     fontFamily:'ROBOTO'
//   }
// });

// export default PieChartScreen;


import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Svg, { Path } from 'react-native-svg';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';


import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';

const PieChartScreen = () => {
  
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

  const data = [
    { name: 'Jan', population: 100, color: '#FF6F61', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Feb', population: 200, color: '#56B7AB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Mar', population: 300, color: '#FFD966', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Apr', population: 100, color: '#7A7A7A', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'May', population: 50, color: '#BB8FCE', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Jun', population: 200, color: '#5E5E5E', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#d9e2f3',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const renderSvg = ({ slices, width, height, center }) => {
    const totalPopulation = slices.reduce((acc, slice) => acc + slice.population, 0);
    const radianFactor = Math.PI * 2 / totalPopulation;

    let cumulativeAngle = -Math.PI / 2; // Start from the top

    const paths = slices.map((slice, index) => {
      const angle = slice.population * radianFactor;
      const x1 = center[0] + width / 4 * Math.cos(cumulativeAngle);
      const y1 = center[1] + height / 4 * Math.sin(cumulativeAngle);
      const x2 = center[0] + width / 4 * Math.cos(cumulativeAngle + angle);
      const y2 = center[1] + height / 4 * Math.sin(cumulativeAngle + angle);

      cumulativeAngle += angle;

      return (
        <Path
          key={index}
          d={`M${center[0]},${center[1]} L${x1},${y1} A${width / 4},${height / 4} 0 ${angle > Math.PI ? 1 : 0},1 ${x2},${y2} Z`}
          fill={slice.color}
        />
      );
    });

    return <Svg>{paths}</Svg>;
  };

  return (
    <>
      <TitleBar title="Pie Chart" />
      <View style={[style.pageContainer, pageContainerStyle]}>
      
      <ScrollView contentContainerStyle={style.scrollContainer}>
      <View style={[style.container, containerStyle]}>
        <PieChart
          data={data}
          width={400}
          height={250}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          center={[10, 10]}
          absolute
          renderCustomSvg={renderSvg}
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
  chart:{
    fontFamily:'ROBOTO'
  }
});

export default PieChartScreen;



