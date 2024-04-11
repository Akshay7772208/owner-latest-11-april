import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import TitleBar from '../components/TitleBar'
import BottomBar from '../components/BottomBar'

const KitchenInventory = () => {
  return (
    <>
    <TitleBar title="Kitchen Inventory"/>
    <View style={styles.container}>
    <Text style={styles.text}>Kitchen Inventory</Text>
  </View>
  <BottomBar/>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular', // Change this to the desired Roboto style
fontSize:20
  },
 
});
export default KitchenInventory